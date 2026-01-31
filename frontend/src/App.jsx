import React, { useState, useEffect } from "react";
import axios from "axios";
import Catalog from "./components/Catalog";
import { catalogByCategory } from "./data/catalog";

function App() {
  const [categoriaActiva, setCategoriaActiva] = useState(null);
  const [carrito, setCarrito] = useState([]);
  const [appliedRate, setAppliedRate] = useState(38.5); // Tasa por defecto
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const comprarPorWhatsApp = () => {
    const mensaje =
      "Hola, quiero hacer un pedido en Mini bodegOn. Quisiera información.";
    const url = `https://wa.me/584142316762?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  const addToCart = (product) => {
    setCarrito((prev) => [...prev, product]);
  };

  // Llamar a la API para obtener la tasa actual
  const fetchTasa = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/tasa"); // Asegúrate de que la URL sea correcta
      setAppliedRate(response.data.tasa);
    } catch (err) {
      console.error("Error al obtener la tasa: ", err);
      setError("No se pudo obtener la tasa actual.");
    }
  };

  // Llamar a la API para actualizar la tasa
  const updateTasa = async (newRate) => {
    try {
      const response = await axios.put(
        "http://localhost:4000/api/tasa", 
        { tasa: newRate },
        {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("adminToken")}`, // Token del admin
          },
        }
      );
      setAppliedRate(response.data.tasa); // Actualizar la tasa en el estado
      setSuccess("Tasa actualizada correctamente.");
      setError('');
    } catch (err) {
      setError("Error al actualizar la tasa. Asegúrate de que tienes permisos.");
      setSuccess('');
    }
  };

  // Fetch the current tasa when the app loads
  useEffect(() => {
    fetchTasa();
  }, []);

  // Verificar si el admin está logueado
  const isAdmin = localStorage.getItem('adminToken');

  // Mensaje de depuración
  console.log('Admin Token:', isAdmin);

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

      {/* Actualización de tasa (solo visible si el admin está logueado) */}
      {isAdmin && (
        <section className="mt-6 max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Actualizar Tasa de Cambio</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              updateTasa(appliedRate);
            }}
          >
            <input
              type="number"
              value={appliedRate}
              onChange={(e) => setAppliedRate(e.target.value)}
              className="p-2 border border-gray-300 rounded-lg mb-4"
              min="0"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              Actualizar Tasa
            </button>
          </form>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          {success && <p className="text-green-500 mt-2">{success}</p>}
        </section>
      )}
    </div>
  );
}

export default App;
