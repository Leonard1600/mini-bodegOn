import ExchangeRate from "../models/Tasa.js";

/**
 * ✅ Obtener tasa actual (público)
 * GET /api/tasa
 */
export const getTasa = async (req, res) => {
  try {
    const tasa = await ExchangeRate.findOne().sort({ updatedAt: -1 });

    if (!tasa) {
      return res.status(404).json({
        message: "No hay tasa registrada",
      });
    }

    res.json({
      tasa: tasa.tasa,
      updatedAt: tasa.updatedAt,
    });
  } catch (error) {
    console.error("Error obteniendo tasa:", error);
    res.status(500).json({
      message: "Error al obtener la tasa",
    });
  }
};

/**
 * 🔒 Actualizar tasa (solo admin)
 * PUT /api/tasa
 */
export const updateTasa = async (req, res) => {
  try {
    const { tasa } = req.body;

    if (!tasa || tasa <= 0) {
      return res.status(400).json({
        message: "La tasa debe ser un número válido",
      });
    }

    const nuevaTasa = await ExchangeRate.create({ tasa });

    res.json({
      tasa: nuevaTasa.tasa,
      updatedAt: nuevaTasa.updatedAt,
    });
  } catch (error) {
    console.error("Error actualizando tasa:", error);
    res.status(500).json({
      message: "Error al actualizar la tasa",
    });
  }
};
