import React, { useState } from "react";

function ClientAccess({ rate, onRateUpdated }) {
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [newRate, setNewRate] = useState(rate);

  // 🔐 NUEVA CONTRASEÑA
  const correctPassword = "Angelina.1600";

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

    alert("Tasa actualizada");

    // 🔒 CERRAR ACCESO AUTOMÁTICAMENTE
    setAuthorized(false);
    setPassword("");
  };

  return (
    <div className="max-w-4xl mx-auto mb-6 bg-white rounded-xl shadow p-4">
      {!authorized ? (
        <div className="flex gap-3 items-center">
          <input
            type="password"
            placeholder="Clave de acceso"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border px-3 py-2 rounded"
          />
          <button
            onClick={handleAccess}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Entrar
          </button>
        </div>
      ) : (
        <div className="flex gap-3 items-center">
          <input
            type="number"
            value={newRate}
            onChange={(e) => setNewRate(e.target.value)}
            className="border px-3 py-2 rounded"
          />
          <button
            onClick={updateRate}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            Actualizar tasa
          </button>
        </div>
      )}
    </div>
  );
}

export default ClientAccess;

