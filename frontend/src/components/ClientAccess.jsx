import React, { useState, useEffect } from "react";

function ClientAccess({ rate, onRateUpdated }) {
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [newRate, setNewRate] = useState(rate);

  // 🔐 CONTRASEÑA
  const correctPassword = "Angelina.1600";

  // Mantener sincronizado el input cuando cambia la tasa desde afuera
  useEffect(() => {
    setNewRate(rate);
  }, [rate]);

  const handleAccess = () => {
    if (password === correctPassword) {
      setAuthorized(true);
    } else {
      alert("Clave incorrecta");
    }
  };

  const updateRate = () => {
    if (!newRate || isNaN(newRate)) return;

    onRateUpdated(Number(newRate));

    // Cerrar panel y limpiar
    setAuthorized(false);
    setPassword("");
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="bg-green-50 border border-green-200 rounded-2xl shadow-md p-6 text-center">

        <h3 className="text-lg font-semibold text-green-700 mb-4">
          Acceso de Administrador
        </h3>

        {!authorized ? (
          <div className="flex flex-col items-center gap-3">

            <input
              type="password"
              placeholder="Clave de acceso"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-green-300 px-4 py-2 rounded-full focus:ring-2 focus:ring-green-400 outline-none"
            />

            <button
              onClick={handleAccess}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-full transition"
            >
              Entrar
            </button>

          </div>
        ) : (
          <div className="flex flex-col items-center gap-3 animate-fadeIn">

            <input
              type="number"
              value={newRate}
              onChange={(e) => setNewRate(e.target.value)}
              className="w-full border border-green-300 px-4 py-2 rounded-full focus:ring-2 focus:ring-green-400 outline-none"
            />

            <button
              onClick={updateRate}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-full transition"
            >
              Actualizar tasa
            </button>

          </div>
        )}
      </div>
    </div>
  );
}

export default ClientAccess;