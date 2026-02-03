import React, { useState, useEffect } from "react";
import Catalog from "./components/Catalog";
import ClientAccess from "./components/ClientAccess";
import { catalogByCategory } from "./data/catalog";

function App() {
  const [categoriaActiva, setCategoriaActiva] = useState(null);
  const [busqueda, setBusqueda] = useState("");
  const [carrito, setCarrito] = useState([]);
  const [appliedRate, setAppliedRate] = useState(null);

  const roundTo50 = (value) => {
    if (!value || isNaN(value)) return 0;
    return Math.ceil(value / 50) * 50;
  };

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

  useEffect(() => {
    if (!busqueda.trim()) return;

    const search = busqueda.toLowerCase();
    const cat = catalogByCategory.find((c) =>
      c.products.some((p) =>
        p.name.toLowerCase().includes(search)
      )
    );

    if (cat) setCategoriaActiva(cat);
  }, [busqueda]);

  const enHome = !categoriaActiva;

  return (
    <div className="min-h-screen bg-gray-100 px-3 py-4 relative">

      {/* TASA — SUBIDA PARA QUE NO CHOQUE */}
      <div className="absolute top-1 right-3 sm:top-3">
        <div className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold shadow-sm border border-green-300">
          {appliedRate !== null ? `Tasa: ${appliedRate} Bs/USD` : "Cargando..."}
        </div>
      </div>

      {/* LOGO */}
      {enHome && (
        <header className="flex justify-center mb-6 mt-10">
          <div className="w-full max-w-[420px] h-[120px] rounded-full overflow-hidden bg-white shadow">
            <img
              src="/logo.png"
              alt="Mini bodegOn"
              className="w-full h-full object-cover"
            />
          </div>
        </header>
      )}

      {/* BUSQUEDA + CARRITO + WHATSAPP + VACIAR */}
      <div className="max-w-4xl mx-auto mb-4 bg-white rounded-xl shadow p-3 flex items-center justify-center gap-2">

        <input
          type="text"
          placeholder="🔍 Buscar..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="flex-1 max-w-[180px] border border-amber-300 rounded-full px-3 py-2 text-sm"
        />

        {/* BOTÓN VACIAR — SOLO ÍCONO */}
        <button
          onClick={vaciarCarrito}
          className="w-8 h-8 flex items-center justify-center bg-red-100 text-red-600 rounded-full border border-red-300"
          title="Vaciar carrito"
        >
          🗑️
        </button>

        <p className="text-lg">
          🛒 <strong>{totalItemsCount}</strong>
        </p>

        {/* WHATSAPP MÁS PEQUEÑO */}
        <button
          onClick={comprarPorWhatsApp}
          className="w-10 h-10 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M16 2C8.3 2 2 8.1 2 15.6c0 2.7.8 5.3 2.4 7.5L2 30l7-2.3c2.1 1.1 4.5 1.7 7 1.7 7.7 0 14-6.1 14-13.8S23.7 2 16 2zm0 24.9c-2.2 0-4.3-.6-6.1-1.6l-.4-.2-4.1 1.3 1.4-4-.3-.4c-1.3-1.9-2-4.1-2-6.4C4.5 9.3 9.7 4.3 16 4.3S27.5 9.3 27.5 15.6 22.3 26.9 16 26.9z"/>
          </svg>
        </button>
      </div>

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
                onClick={() => setCategoriaActiva(cat)}
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
        </div>
      </div>

      {/* CONTROL DE ACCESO */}
      <div className="mt-6 mb-10">
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