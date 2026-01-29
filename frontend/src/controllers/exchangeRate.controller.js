import ExchangeRate from "../models/exchangeRate.js";

export const setManualRate = async (req, res) => {
  try {
    const { rate } = req.body;

    if (rate === undefined || rate === null || isNaN(rate)) {
      return res
        .status(400)
        .json({ message: "La tasa es obligatoria y debe ser numérica" });
    }

    // Desactivar cualquier tasa manual previa
    await ExchangeRate.updateMany(
      { source: "MANUAL" },
      { active: false }
    );

    // Crear nueva tasa manual activa
    const manualRate = await ExchangeRate.create({
      source: "MANUAL",
      rate: Number(rate),
      active: true,
      date: new Date(),
    });

    res.status(201).json(manualRate);
  } catch (error) {
    console.error("Error setManualRate:", error);
    res.status(500).json({ message: "Error al guardar la tasa manual" });
  }
};

