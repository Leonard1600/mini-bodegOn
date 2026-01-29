import { createContext, useContext, useEffect, useState } from "react";
import {
  getActiveExchangeRate,
  setManualExchangeRate,
} from "../services/exchangeRate.service";

// Crear contexto
const ExchangeRateContext = createContext(null);

// Provider
export function ExchangeRateProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [activeRate, setActiveRate] = useState(null);
  const [bcvRate, setBcvRate] = useState(null);
  const [manualRate, setManualRate] = useState(null);

  // 🔹 Cargar tasa activa desde backend
  const loadExchangeRate = async () => {
    try {
      setLoading(true);
      setError(null);

      const rate = await getActiveExchangeRate();

      setActiveRate(rate);

      if (rate.source === "MANUAL") {
        setManualRate(rate);
      }

      if (rate.source === "BCV") {
        setBcvRate(rate);
      }
    } catch (err) {
      console.error("Error loading exchange rate:", err);
      setError("No se pudo cargar la tasa de cambio");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Definir tasa manual y recargar
  const defineManualRate = async (rate) => {
    await setManualExchangeRate(rate);
    await loadExchangeRate();
  };

  // Cargar al iniciar la app
  useEffect(() => {
    loadExchangeRate();
  }, []);

  return (
    <ExchangeRateContext.Provider
      value={{
        loading,
        error,
        activeRate,
        appliedRate: activeRate?.rate || null,
        bcvRate,
        manualRate,
        reloadRate: loadExchangeRate,
        setManualRate: defineManualRate,
      }}
    >
      {children}
    </ExchangeRateContext.Provider>
  );
}

// Hook seguro
export function useExchangeRate() {
  const context = useContext(ExchangeRateContext);
  if (!context) {
    throw new Error(
      "useExchangeRate debe usarse dentro de ExchangeRateProvider"
    );
  }
  return context;
}
