import ExchangeRate from "../models/exchangeRate.js";

// Obtener la tasa activa (manual tiene prioridad, si no BCV)
export const getActiveRate = async (req, res) => {
  try {
    const manualRate = await ExchangeRate.findOne({
      source: "MANUAL",
      active: true,
    }).sort({ createdAt: -1 });

    if (manualRate) {
      return res.json(manualRate);
    }

    const bcvRate = await ExchangeRate.findOne({
      source: "BCV",
    }).sort({ date: -1 });

    if (!bcvRate) {
      return res.status(404).json({ message: "No hay tasa disponible" });
    }

    res.json(bcvRate);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la tasa activa" });
  }
};

// Definir tasa manual
export const setManualRate = async (req, res) => {
  try {
    const { rate } = req.body;

    if (!rate) {
      return res.status(400).json({ message: "La tasa es obligatoria" });
    }

    await ExchangeRate.updateMany(
      { source: "MANUAL" },
      { active: false }
    );

    const manualRate = await ExchangeRate.create({
      source: "MANUAL",
      rate,
      active: true,
    });

    res.status(201).json(manualRate);
  } catch (error) {
    res.status(500).json({ message: "Error al guardar la tasa manual" });
  }
};


