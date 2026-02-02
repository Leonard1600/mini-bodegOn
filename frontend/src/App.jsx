import React, { useState, useEffect } from "react";
import Catalog from "./components/Catalog";
import ClientAccess from "./components/ClientAccess";
import { catalogByCategory } from "./data/catalog";

function App() {
  const [categoriaActiva, setCategoriaActiva] = useState(null);
  const [busqueda, setBusqueda] = useState("");
  const [carrito, setCarrito] = useState([]);
  const [appliedRate, setAppliedRate] = useState(null);

  // ====== REDONDEO AL PRÓXIMO MÚLTIPLO DE 50 ======
  const roundTo50 = (value) => {
    if (!value || isNaN(value)) return 0;
    return Math.ceil(value / 50) * 50;
  };

  /* =========================
     CARRITO (LOCALSTORAGE)
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

  const totalItemsCount = carrito.reduce((acc, it) => acc + (it.qty || 0), 0);

  /* =========================
     TASA (LOCALSTORAGE)
  ========================= */
  useEffect(() => {
    try {
      const savedRate = localStorage.getItem("bodegonRate");
      if (savedRate) {
        setAppliedRate(Number(savedRate));
      } else {
        setAppliedRate(40);
      }
    } catch (err) {
      console.error("Error cargando tasa", err);
      setAppliedRate(40);
    }
  }, []);

  /* =========================
     WHATSAPP
  ========================= */
  const comprarPorWhatsApp = () => {
    let mensaje = "Hola, quisiera hacer un pedido en Mini bodegOn:";

    if (carrito.length > 0 && appliedRate) {
      carrito.forEach((it) => {
        const priceBs = roundTo50(it.priceUSD * appliedRate);
        mensaje += `\n- ${it.name} x${it.qty}: ${priceBs} Bs`;
      });

      const total = carrito.reduce(
        (sum, it) =>
          sum + roundTo50(it.priceUSD * appliedRate) * it.qty,
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
     CARRITO
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
        },
      ];
    });
  };

  /* =========================
     BÚSQUEDA
  ========================= */
  useEffect(() => {
    if (!busqueda.trim()) return;

    const search = busqueda.toLowerCase();
    const cat = catalogByCategory.find((c) =>
      c.products.some((p) => p.name.toLowerCase().includes(search))
    );

    if (cat) setCategoriaActiva(cat);
  }, [busqueda]);

  /* =========================
     UI
  ========================= */
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6 relative">

      {/* TASA (más grande) */}
      <div className="absolute -top-2 right-2 bg-white px-4 py-3 rounded-md shadow text-[14px]">
        {appliedRate !== null ? (
          <strong style={{ fontSize: "18px" }}>
            Tasa: {appliedRate} Bs/USD
          </strong>
        ) : (
          "Cargando tasa..."
        )}
      </div>

      {/* LOGO */}
      <header className="flex justify-center mb-8 mt-10">
        <div className="w-[720px] h-[180px] rounded-full overflow-hidden">
          <img
            src="/logo.png"
            alt="Mini bodegOn"
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      {/* HEADER BUSQUEDA + CARRITO */}
      <div className="max-w-4xl mx-auto mb-6 bg-white rounded-xl shadow p-4 flex flex-col sm:flex-row gap-3 items-center">
        <input
          type="text"
          placeholder="🔍 Buscar producto..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="flex-1 border border-amber-300 rounded-full px-4 py-2"
        />

        <p className="text-xl">
          🛒 <strong>{totalItemsCount}</strong>
        </p>

        <button
          onClick={comprarPorWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full"
        >
          Comprar por WhatsApp
        </button>
      </div>

      {/* CATEGORÍAS */}
      {!categoriaActiva && (
        <section className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {catalogByCategory.map((cat) => (
            <div
              key={cat.id}
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.4)),url("${cat.image}")`,
              }}
              className="h-48 rounded-2xl text-white flex flex-col justify-center items-center bg-cover"
            >
              <h2 className="text-2xl font-bold">{cat.name}</h2>
              <button
                onClick={() => {
                  setCategoriaActiva(cat);
                  setBusqueda("");
                }}
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
        />
      )}

      {/* CONTROL DE ACCESO AL PIE DE LA PÁGINA */}
      <div className="mt-10">
        <ClientAccess
          rate={appliedRate}
          onRateUpdated={(newRate) => {
            setAppliedRate(newRate);
            try {
              localStorage.setItem("bodegonRate", newRate);
            } catch (err) {
              console.error("Error guardando tasa", err);
            }
          }}
        />
      </div>
    </div>
  );
}

export default App;