import React, { useState, useEffect } from "react";
import axios from "axios";
import Catalog from "./components/Catalog";
import ClientAccess from "./components/ClientAccess";
import { catalogByCategory } from "./data/catalog";

const API_BASE =
  import.meta.env.VITE_API_URL ||
  "https://mini-bodegon-backend-leonard.onrender.com";

function App() {
  const [categoriaActiva, setCategoriaActiva] = useState(null);
  const [carrito, setCarrito] = useState([]);
  const [appliedRate, setAppliedRate] = useState(null);
  const [bcvRate, setBcvRate] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(null);

  const [isAdmin, setIsAdmin] = useState(
    Boolean(localStorage.getItem("adminToken"))
  );

  const comprarPorWhatsApp = () => {
    const mensaje =
      "Hola, quiero hacer un pedido en Mini bodegOn. Quisiera información.";
    window.open(
      `https://wa.me/584142316762?text=${encodeURIComponent(mensaje)}`,
      "_blank"
    );
  };

  const addToCart = (product) => {
    setCarrito((prev) => [...prev, product]);
  };

  // 🔄 Obtener tasa (FUENTE DE VERDAD)
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

  // ✏️ Actualizar tasa usada
  const updateTasa = async () => {
    try {
      await axios.post(
        `${API_BASE}/api/tasa/manual`,
        { rate: Number(appliedRate) },
        {
          headers: {
            "x-admin-password": localStorage.getItem("adminToken"),
          },
        }
      );

      await fetchTasa();
      alert("Tasa actualizada correctamente");
    } catch (err) {
      console.error(err);
      alert("No se pudo actualizar la tasa");
    }
  };

  const logoutClient = async () => {
    localStorage.removeItem("adminToken");
    setIsAdmin(false);
    await fetchTasa();
  };

  useEffect(() => {
    fetchTasa();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6 relative">
      {appliedRate && bcvRate && (
        <div className="absolute top-4 right-4 bg-white p-3 rounded-xl shadow text-xs text-right">
          <p>
            <strong>Fecha:</strong>{" "}
            {new Date(lastUpdate).toLocaleDateString("es-VE")}
          </p>
          <p>
            <strong>Tasa BCV:</strong> {bcvRate} Bs/USD
          </p>
          <p>
            <strong>Tasa usada:</strong> {appliedRate} Bs/USD
          </p>
        </div>
      )}

      <header className="text-center mb-6 mt-6">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Mini <span className="text-emerald-600">bodegOn</span>
        </h1>
      </header>

      <div className="max-w-4xl mx-auto mb-6 bg-white rounded-xl shadow p-4 flex justify-between">
        <p>
          🛒 Carrito: <strong>{carrito.length}</strong>
        </p>
        <button
          onClick={comprarPorWhatsApp}
          className="bg-green-500 text-white px-4 py-2 rounded-full"
        >
          Comprar por WhatsApp
        </button>
      </div>

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
                onClick={() => setCategoriaActiva(cat)}
                className="mt-3 bg-white text-black px-4 py-2 rounded-full"
              >
                Ver productos
              </button>
            </div>
          ))}
        </section>
      )}

      {categoriaActiva && (
        <Catalog
          category={categoriaActiva}
          appliedRate={appliedRate}
          addToCart={addToCart}
        />
      )}

      <div className="mt-10">
        {isAdmin ? (
          <div className="max-w-4xl mx-auto bg-white p-4 rounded-xl shadow">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-bold">Actualizar tasa usada</h2>
              <button
                onClick={logoutClient}
                className="text-red-500 font-bold text-xl"
              >
                ✕
              </button>
            </div>

            <input
              type="number"
              value={appliedRate}
              onChange={(e) => setAppliedRate(e.target.value)}
              className="border p-2 rounded mr-2"
            />
            <button
              onClick={updateTasa}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Actualizar
            </button>
          </div>
        ) : (
          <ClientAccess onLogin={() => setIsAdmin(true)} />
        )}
      </div>
    </div>
  );
}

export default App;
