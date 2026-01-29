import api from "./api";

/**
 * Obtiene la tasa activa desde el backend.
 * Prioridad definida en backend:
 * 1) MANUAL activa
 * 2) BCV activa
 */
export const getActiveExchangeRate = async () => {
  try {
    const response = await api.get("/exchange-rate/active");
    return response.data;
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
