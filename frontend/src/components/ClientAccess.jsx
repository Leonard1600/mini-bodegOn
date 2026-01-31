import { useState } from "react";
import axios from "axios";

const API_BASE =
  import.meta.env.VITE_API_URL ||
  "https://mini-bodegon-backend-leo.onrender.com";

function ClientAccess({ onLogin }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // 🔐 Endpoint protegido SOLO para validar contraseña
      await axios.put(
        `${API_BASE}/api/tasa/manual`,
        { rate: 1 }, // valor dummy, no afecta nada
        {
          headers: {
            "x-admin-password": password,
          },
        }
      );

      // ✅ Contraseña válida
      localStorage.setItem("adminToken", "CLIENT_AUTH_OK");
      onLogin();
    } catch (err) {
      setError("Contraseña incorrecta");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-white p-6 rounded-xl shadow mt-10">
      <h2 className="text-xl font-bold mb-4 text-center">
        Acceso Cliente
      </h2>

      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded-lg"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-emerald-600 text-white py-2 rounded-lg font-semibold hover:bg-emerald-700 transition"
        >
          {loading ? "Validando..." : "Entrar"}
        </button>
      </form>

      {error && (
        <p className="text-red-500 text-sm mt-3 text-center">
          {error}
        </p>
      )}
    </div>
  );
}

export default ClientAccess;

