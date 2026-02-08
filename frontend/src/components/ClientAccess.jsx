import React, { useState, useEffect } from "react";
import { doc, setDoc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

function ClientAccess({ rate }) {
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(false);

  // Tasa global
  const [newRate, setNewRate] = useState(rate);

  // Tasa motos
  const [motoRate, setMotoRate] = useState(null);
  const [newMotoRate, setNewMotoRate] = useState("");

  // 🔐 CONTRASEÑA DEL PANEL
  const correctPassword = "Angelina.1600";

  // Mantener sincronizado el input cuando cambia la tasa global
  useEffect(() => {
    setNewRate(rate);
  }, [rate]);

  // Cargar tasa de motos desde Firestore
  useEffect(() => {
    const ref = doc(db, "config", "tasa_motos");

    const unsub = onSnapshot(ref, (snap) => {
      if (snap.exists()) {
        setMotoRate(snap.data().valor);
        setNewMotoRate(snap.data().valor);
      }
    });

    return () => unsub();
  }, []);

  const handleAccess = () => {
    if (password === correctPassword) {
      setAuthorized(true);
    } else {
      alert("Clave incorrecta");
    }
  };

  const updateRate = async () => {
    if (!newRate || isNaN(newRate)) return;

    try {
      await setDoc(doc(db, "config", "tasa"), {
        valor: Number(newRate),
        secret: correctPassword,
      });

      alert("Tasa global actualizada correctamente");

      setAuthorized(false);
      setPassword("");
    } catch (err) {
      console.error("Error actualizando tasa:", err);
      alert("Error actualizando la tasa");
    }
  };

  const updateMotoRate = async () => {
    if (!newMotoRate || isNaN(newMotoRate)) return;

    try {
      await setDoc(doc(db, "config", "tasa_motos"), {
        valor: Number(newMotoRate),
        secret: correctPassword,
      });

      alert("Tasa de motos actualizada correctamente");

      setAuthorized(false);
      setPassword("");
    } catch (err) {
      console.error("Error actualizando tasa motos:", err);
      alert("Error actualizando la tasa de motos");
    }
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
          <div className="flex flex-col items-center gap-4 animate-fadeIn">

            {/* TASA GLOBAL */}
            <div className="w-full">
              <label className="text-sm font-semibold text-green-700">
                Tasa Global (Alimentos)
              </label>
              <input
                type="number"
                value={newRate}
                onChange={(e) => setNewRate(e.target.value)}
                className="w-full border border-green-300 px-4 py-2 rounded-full focus:ring-2 focus:ring-green-400 outline-none mt-1"
              />

              <button
                onClick={updateRate}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-full transition mt-2"
              >
                Actualizar tasa global
              </button>
            </div>

            {/* TASA MOTOS */}
            <div className="w-full">
              <label className="text-sm font-semibold text-blue-700">
                Tasa Repuestos de Moto
              </label>
              <input
                type="number"
                value={newMotoRate}
                onChange={(e) => setNewMotoRate(e.target.value)}
                className="w-full border border-blue-300 px-4 py-2 rounded-full focus:ring-2 focus:ring-blue-400 outline-none mt-1"
              />

              <button
                onClick={updateMotoRate}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full transition mt-2"
              >
                Actualizar tasa motos
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

export default ClientAccess;