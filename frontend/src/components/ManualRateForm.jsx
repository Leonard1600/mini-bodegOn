import { useState } from "react";
import { setManualExchangeRate } from "../services/exchangeRate.service";

function ManualRateForm({ onRateUpdated }) {
  const [rate, setRate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Validación básica
    if (!rate || Number(rate) <= 0) {
      setError("Ingrese una tasa válida");
      return;
    }

    try {
      setLoading(true);

      // 👉 Llamada al SERVICE (no a axios directo)
      await setManualExchangeRate(rate);

      setRate("");

      // Avisar al componente padre
      if (onRateUpdated) {
        onRateUpdated();
      }
    } catch (err) {
      console.error(err);
      setError("Error al guardar la tasa manual");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-6 p-4 border rounded">
      <h2 className="text-lg font-semibold mb-2">
        Definir tasa manual
      </h2>

      <form onSubmit={handleSubmit} className="flex gap-2 items-center">
        <input
          type="number"
          step="0.01"
          placeholder="Bs/USD"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          className="border px-2 py-1 rounded w-32"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-3 py-1 rounded disabled:opacity-50"
        >
          {loading ? "Guardando..." : "Guardar"}
        </button>
      </form>

      {error && (
        <p className="text-red-600 mt-2 text-sm">
          {error}
        </p>
      )}
    </div>
  );
}

export default ManualRateForm;
