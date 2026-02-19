import React, { useState, useEffect } from "react";
import Catalog from "./components/Catalog";
import ClientAccess from "./components/ClientAccess";
import { catalogByCategory } from "./data/catalog";

import { doc, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [categoriaActiva, setCategoriaActiva] = useState(null);
  const [busqueda, setBusqueda] = useState("");
  const [carrito, setCarrito] = useState([]);
  const [appliedRate, setAppliedRate] = useState(null);
  const [motoRate, setMotoRate] = useState(null); // Tasa especial motos
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  const roundTo50 = (value) => {
    if (!value || isNaN(value)) return 0;
    return Math.ceil(value / 50) * 50;
  };

  // Decide qué tasa usar según el producto
  const getPriceBs = (product) => {
    if (!product) return 0;

    const isMoto = product.categoryId === "motos";
    const rate = isMoto ? motoRate : appliedRate;

    if (!rate) return 0;

    return roundTo50(product.priceUSD * rate);
  };

  /* =========================
     CARGAR CARRITO
  ========================= */
  useEffect(() => {
    try {
      const raw = localStorage.getItem("miniBodegonCart");
      if (raw) setCarrito(JSON.parse(raw));
    } catch (err) {
      console.error("Error cargando carrito", err);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("miniBodegonCart", JSON.stringify(carrito));
    } catch (err) {
      console.error("Error guardando carrito", err);
    }
  }, [carrito]);

  const totalItemsCount = carrito.reduce(
    (acc, it) => acc + (it.qty || 0),
    0
  );

  const vaciarCarrito = () => setCarrito([]);

  /* =========================
     CARGAR TASA GLOBAL DESDE FIRESTORE
  ========================= */
  useEffect(() => {
    const ref = doc(db, "config", "tasa");

    const unsub = onSnapshot(ref, (snap) => {
      if (snap.exists()) {
        setAppliedRate(snap.data().valor);
      }
    });

    return () => unsub();
  }, []);

  /* =========================
     CARGAR TASA MOTOS DESDE FIRESTORE
  ========================= */
  useEffect(() => {
    const ref = doc(db, "config", "tasa_motos");

    const unsub = onSnapshot(ref, (snap) => {
      if (snap.exists()) {
        setMotoRate(snap.data().valor);
      }
    });

    return () => unsub();
  }, []);

  /* =========================
     AGREGAR AL CARRITO
  ========================= */
  const addToCart = (product, qty = 1) => {
    if (!product?.id) return;

    setCarrito((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: (p.qty || 0) + qty } : p
        );
      }

      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          priceUSD: product.priceUSD,
          qty,
          categoryId: product.categoryId || null,
        },
      ];
    });
  };

  /* =========================
     WHATSAPP
  ========================= */
  const comprarPorWhatsApp = () => {
    let mensaje = "Hola, quisiera hacer un pedido en Mini bodegOn:";

    if (carrito.length > 0 && (appliedRate || motoRate)) {
      carrito.forEach((it) => {
        const priceBs = getPriceBs(it);
        mensaje += `\n- ${it.name} x${it.qty}: ${priceBs} Bs`;
      });

      const total = carrito.reduce(
        (sum, it) => sum + getPriceBs(it) * it.qty,
        0
      );

      mensaje += `\n\nTotal: ${total} Bs`;
    }

    window.open(
      `https://wa.me/584142316762?text=${encodeURIComponent(mensaje)}`,
      "_blank"
    );
  };

  /* =========================
     BÚSQUEDA GLOBAL
  ========================= */
  useEffect(() => {
    if (!busqueda.trim()) {
      setCategoriaActiva(null);
      return;
    }

    const search = busqueda.toLowerCase();

    const cat = catalogByCategory.find((c) =>
      c.products.some((p) =>
        p.name.toLowerCase().includes(search)
      )
    );

    if (cat) {
      setCategoriaActiva({
        ...cat,
        products: cat.products.filter((p) =>
          p.name.toLowerCase().includes(search)
        ).map((p) => ({
          ...p,
          categoryId: cat.id,
          categoryName: cat.name,
        })),
      });
    }
  }, [busqueda]);

  const enHome = !categoriaActiva;

  return (
    <div className="min-h-screen bg-gray-100 px-3 py-4 relative">

      {/* TASA */}
      <div className="absolute top-0 right-3 sm:top-2">
        <div className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold shadow-sm border border-green-300">
          {appliedRate !== null ? `Tasa: ${appliedRate} Bs/USD` : "Cargando..."}
        </div>
      </div>

      {/* LOGO */}
      {enHome && (
        <header className="flex justify-center mb-6 mt-10">
          <div className="w-full max-w-[420px] h-[140px] rounded-full overflow-hidden bg-white shadow">
            <img
              src="/logo.png"
              alt="Mini bodegOn"
              className="w-full h-full object-cover"
            />
          </div>
        </header>
      )}

      {/* BUSQUEDA + CARRITO + WHATSAPP */}
      <div
        className={`max-w-4xl mx-auto mb-4 bg-white rounded-xl shadow p-3 flex items-center justify-center gap-2 ${
          !enHome ? "mt-6" : ""
        }`}
      >
        <input
          type="text"
          placeholder="🔍 Buscar..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="flex-1 max-w-[180px] border border-amber-300 rounded-full px-3 py-2 text-sm"
        />

        <button
          onClick={() => setMostrarCarrito(!mostrarCarrito)}
          className="relative text-lg"
        >
          🛒 <strong>{totalItemsCount}</strong>
        </button>

        <button
          onClick={comprarPorWhatsApp}
          className="w-10 h-10 flex items-center justify-center 
                     bg-green-500 hover:bg-green-600 
                     text-white rounded-full shadow-md 
                     transition-all active:scale-95"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M16 2C8.3 2 2 8.1 2 15.6c0 2.7.8 5.3 2.4 7.5L2 30l7-2.3c2.1 1.1 4.5 1.7 7 1.7 7.7 0 14-6.1 14-13.8S23.7 2 16 2z" />
          </svg>
        </button>
      </div>

      {/* MINI CARRITO */}
      {mostrarCarrito && (
        <>
          <div
            className="fixed inset-0 bg-black/20 z-10"
            onClick={() => setMostrarCarrito(false)}
          ></div>

          <div className="relative z-20 max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-4 mb-4 border border-gray-200">
            <h3 className="text-lg font-semibold mb-2">Carrito</h3>

            {carrito.length === 0 ? (
              <p className="text-sm text-gray-500">Tu carrito está vacío.</p>
            ) : (
              <div className="space-y-2">
                {carrito.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>{item.name} x{item.qty}</span>
                    <span className="font-semibold">
                      {getPriceBs(item)} Bs
                    </span>
                  </div>
                ))}

                <hr className="my-2" />

                <p className="text-right font-bold text-green-700">
                  Total:{" "}
                  {carrito.reduce(
                    (sum, it) => sum + getPriceBs(it) * it.qty,
                    0
                  )} Bs
                </p>

                <div className="flex justify-between mt-3">
                  <button
                    onClick={vaciarCarrito}
                    className="px-3 py-1 bg-red-500 text-white rounded-full text-sm"
                  >
                    Vaciar
                  </button>

                  <button
                    onClick={comprarPorWhatsApp}
                    className="px-3 py-1 bg-green-500 text-white rounded-full text-sm"
                  >
                    WhatsApp
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {/* CATEGORÍAS */}
      {enHome && (
        <section className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {catalogByCategory.map((cat) => (
            <div
              key={cat.id}
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.4)),url("${cat.image}")`,
              }}
              className="h-48 rounded-2xl text-white flex flex-col justify-center items-center bg-cover shadow"
            >
              <h2 className="text-2xl font-bold">{cat.name}</h2>
              <button
                onClick={() =>
                  setCategoriaActiva({
                    ...cat,
                    products: cat.products.map((p) => ({
                      ...p,
                      categoryId: cat.id,
                      categoryName: cat.name,
                    })),
                  })
                }
                className="mt-3 bg-white text-black px-4 py-2 rounded-full"
              >
                Ver productos
              </button>
            </div>
          ))}
        </section>
      )}

      {/* PRODUCTOS */}
      {categoriaActiva && (
        <Catalog
          category={categoriaActiva}
          appliedRate={appliedRate}
          addToCart={addToCart}
          onBack={() => setCategoriaActiva(null)}
          getPriceBs={getPriceBs}
        />
      )}

      {/* PAGO MÓVIL */}
      <div className="max-w-md mx-auto mt-10 mb-6">
        <div className="bg-blue-50 border border-blue-200 rounded-2xl shadow-md p-6 text-center">
          <h3 className="text-lg font-semibold text-blue-700 mb-3">
            Pago Móvil
          </h3>
          <p className="text-sm text-blue-800 font-medium">
            <strong>C.I:</strong> 21.124.901
          </p>
          <p className="text-sm text-blue-800 font-medium">
            <strong>Teléfono:</strong> 0412-7232455
          </p>
          <p className="text-sm text-blue-800 font-medium">
            <strong>Banco:</strong> 0102 — Banco de Venezuela
          </p>
          <p className="text-sm text-blue-800 font-medium mt-2">
            <strong>Horario:</strong> 7:00 AM — 10:00 PM
          </p>
        </div>
      </div>

      {/* CONTROL DE ACCESO */}
      <div className="mt-6 mb-10">
        <ClientAccess rate={appliedRate} />
      </div>
    </div>
  );
}

export default App;