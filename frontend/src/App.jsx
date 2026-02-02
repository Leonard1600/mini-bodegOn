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

<<<<<<< HEAD
  /* 🛒 AGREGAR AL CARRITO */
  const addToCart = (product) => {
    setCarrito((prev) => [...prev, product]);
  };

  /* 📲 WHATSAPP CON PRODUCTOS + TOTAL */
  const comprarPorWhatsApp = () => {
    if (carrito.length === 0) {
      alert("El carrito está vacío");
      return;
    }

    let total = 0;

    const lista = carrito
      .map((p) => {
        const precio = Math.ceil(p.priceUSD * appliedRate);
        total += precio;
        return `- ${p.name} — Bs. ${precio}`;
      })
      .join("\n");

    const mensaje = `Hola, quiero hacer un pedido en Mini bodegOn:\n\n${lista}\n\nTotal: Bs. ${total}`;

=======
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

>>>>>>> mi-arreglo
    window.open(
      `https://wa.me/584142316762?text=${encodeURIComponent(mensaje)}`,
      "_blank"
    );
  };

<<<<<<< HEAD
  /* 💱 TASAS */
  const fetchTasa = async () => {
    try {
      const { data } = await axios.get(`${API_BASE}/api/tasa`);
      setAppliedRate(data.appliedRate.rate);
      setBcvRate(data.bcvRate.rate);
      setLastUpdate(data.appliedRate.date);
    } catch (err) {
      console.error("Error al obtener la tasa", err);
    }
  };

  useEffect(() => {
    fetchTasa();
  }, []);

  /* 🔍 BÚSQUEDA GLOBAL */
=======
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
>>>>>>> mi-arreglo
  useEffect(() => {
    if (!busqueda.trim()) return;

    const search = busqueda.toLowerCase();
    const cat = catalogByCategory.find((c) =>
      c.products.some((p) => p.name.toLowerCase().includes(search))
    );

    if (cat) setCategoriaActiva(cat);
  }, [busqueda]);

<<<<<<< HEAD
  const enHome = !categoriaActiva;

  return (
    <div
      className="
        min-h-screen
        px-4
        py-6
        relative
        bg-gradient-to-b
        from-[#e8f2ff]
        via-[#f2f6fb]
        to-white
      "
    >
      {/* TASAS — SOLO HOME */}
      {enHome && appliedRate && bcvRate && (
        <div className="absolute -top-2 right-2 bg-white px-3 py-2 rounded-md shadow text-[10px] text-right leading-tight">
          <p className="text-gray-500">
            <strong>Fecha:</strong>{" "}
            {new Date(lastUpdate).toLocaleDateString("es-VE")}
          </p>
          <p className="text-gray-700">
            <strong>Tasa BCV:</strong> {bcvRate} Bs/USD
          </p>
          <p className="mt-1 px-1 rounded bg-amber-100 text-amber-700 font-semibold">
            <strong>Tasa usada:</strong> {appliedRate} Bs/USD
          </p>
        </div>
      )}
=======
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
>>>>>>> mi-arreglo

      {/* LOGO — SOLO HOME */}
      {enHome && (
        <header className="flex justify-center mb-6 mt-10">
          <div className="w-[720px] h-[180px] rounded-full overflow-hidden bg-white shadow">
            <img
              src="/logo.png"
              alt="Mini bodegOn"
              className="w-full h-full object-cover"
            />
          </div>
        </header>
      )}

<<<<<<< HEAD
      {/* HEADER PRINCIPAL */}
      <div className="max-w-4xl mx-auto mb-4 bg-white rounded-xl shadow p-3 flex gap-2 items-center">
=======
      {/* HEADER BUSQUEDA + CARRITO */}
      <div className="max-w-4xl mx-auto mb-6 bg-white rounded-xl shadow p-4 flex flex-col sm:flex-row gap-3 items-center">
>>>>>>> mi-arreglo
        <input
          type="text"
          placeholder="🔍 Buscar producto..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
<<<<<<< HEAD
          className="flex-1 border border-amber-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
        />

        <span className="text-sm font-semibold">
          🛒 {carrito.length}
        </span>
=======
          className="flex-1 border border-amber-300 rounded-full px-4 py-2"
        />

        <p className="text-xl">
          🛒 <strong>{totalItemsCount}</strong>
        </p>
>>>>>>> mi-arreglo

        {/* BOTÓN WHATSAPP — SOLO ICONO (CORRECCIÓN) */}
        <button
          onClick={comprarPorWhatsApp}
          className="w-10 h-10 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-full shrink-0"
          aria-label="Comprar por WhatsApp"
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
<<<<<<< HEAD
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => {
              setCategoriaActiva(null);
              setBusqueda("");
            }}
            className="mb-4 bg-gray-300 px-4 py-2 rounded-full text-sm"
          >
            ⬅ Volver a categorías
          </button>

          <Catalog
            category={categoriaActiva}
            appliedRate={appliedRate}
            addToCart={addToCart}
            search={busqueda}
          />
        </div>
      )}

      {/* ACCESO CLIENTE — SOLO HOME */}
      {enHome && !isAdmin && (
        <ClientAccess onLogin={() => setIsAdmin(true)} />
      )}
=======
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
>>>>>>> mi-arreglo
    </div>
  );
}

<<<<<<< HEAD
export default App;




=======
export default App;
>>>>>>> mi-arreglo
