import api from "./api";

/**
 * Obtiene la tasa activa desde el backend.
 * Devuelve un objeto normalizado para el frontend:
 * {
 *   appliedRate,
 *   bcvRate
 * }
 */
export const getActiveExchangeRate = async () => {
  try {
    const response = await api.get("/exchange-rate/active");

    const { appliedRate, bcvRate } = response.data;

    return {
      appliedRate,
      bcvRate,
    };
  } catch (error) {
    console.error("Error obteniendo tasa activa:", error);
    throw error;
  }
};

/**
 * Define una nueva tasa manual.
 * El backend desactiva las anteriores automáticamente.
 */
export const setManualExchangeRate = async (rate) => {
  try {
    const response = await api.post("/exchange-rate/manual", {
      rate: Number(rate),
    });
    return response.data;
  } catch (error) {
    console.error("Error guardando tasa manual:", error);
    throw error;
  }
};

