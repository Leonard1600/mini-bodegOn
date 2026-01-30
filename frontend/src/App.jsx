 import React, { useState } from "react";
import Catalog from "./components/Catalog";
import { catalogByCategory } from "./data/catalog";

function App() {
  const [categoriaActiva, setCategoriaActiva] = useState(null);
  const [carrito, setCarrito] = useState([]);

  const appliedRate = 38.5;

  const comprarPorWhatsApp = () => {
    const mensaje =
      "Hola, quiero hacer un pedido en Mini bodegOn. Quisiera información.";
    const url = `https://wa.me/584142316762?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  const addToCart = (product) => {
    setCarrito((prev) => [...prev, product]);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6 relative">
      {/* TASAS */}
      <div className="absolute top-4 right-4 text-right text-xs text-gray-700 space-y-1 bg-white p-3 rounded-xl shadow">
        <p><strong>Tasa usada:</strong> {appliedRate} Bs/USD</p>
        <p><strong>Tasa BCV:</strong> {appliedRate} Bs/USD</p>
        <p><strong>Fecha:</strong> 27/01/2026</p>
      </div>

      {/* HEADER */}
      <header className="text-center mb-6 mt-6">
        <h1 className="text-4xl font-extrabold tracking-wide text-gray-800">
          Mini <span className="text-emerald-600">bodegOn</span>
        </h1>
      </header>

      {/* CARRITO */}
      <div className="max-w-4xl mx-auto mb-6 bg-white rounded-xl shadow p-4 flex items-center justify-between">
        <p className="text-sm text-gray-700">
          🛒 Carrito: <strong>{carrito.length}</strong> productos
        </p>
        <button
          onClick={comprarPorWhatsApp}
          className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-600 transition"
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
                backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url("${cat.image}")`,
              }}
              className="h-48 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center text-white bg-cover bg-center"
            >
              <h2 className="text-2xl font-bold mb-1">{cat.name}</h2>
              <p className="text-sm mb-3">
                {cat.products.length}{" "}
                {cat.products.length === 1 ? "producto" : "productos"}
              </p>
              <button
                onClick={() => setCategoriaActiva(cat)}
                className="bg-white text-gray-800 font-semibold px-5 py-2 rounded-full hover:bg-gray-100 transition"
              >
                Ver productos
              </button>
            </div>
          ))}
        </section>
      )}

      {/* PRODUCTOS */}
      {categoriaActiva && (
        <section className="max-w-6xl mx-auto">
          <button
            onClick={() => setCategoriaActiva(null)}
            className="mb-4 text-sm text-emerald-600 font-semibold"
          >
            ← Volver a categorías
          </button>

          <Catalog
            category={categoriaActiva}
            appliedRate={appliedRate}
            addToCart={addToCart}
          />
        </section>
      )}
    </div>
  );
}

export default App;

 