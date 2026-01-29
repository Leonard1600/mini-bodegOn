import ExchangeRate from "../models/exchangeRate.js";

/**
 * Obtener la tasa activa
 * - Si existe una tasa MANUAL activa, se usa esa
 * - Siempre se obtiene la tasa BCV más reciente como referencia
 */
export const getActiveRate = async (req, res) => {
  try {
    // 1️⃣ Buscar tasa manual activa (prioritaria)
    const manualRate = await ExchangeRate.findOne({
      source: "MANUAL",
      active: true,
    }).sort({ createdAt: -1 });

    // 2️⃣ Buscar siempre la tasa BCV más reciente (referencia)
    const bcvRate = await ExchangeRate.findOne({
      source: "BCV",
    }).sort({ date: -1 });

    if (!manualRate && !bcvRate) {
      return res.status(404).json({
        message: "No hay tasa disponible",
      });
    }

    return res.status(200).json({
      appliedRate: manualRate || bcvRate, // tasa usada para cálculos
      manualRate: manualRate || null,     // puede ser null
      bcvRate: bcvRate || null,            // referencia oficial
    });
  } catch (error) {
    console.error("Error getActiveRate:", error);
    return res.status(500).json({
      message: "Error al obtener la tasa activa",
    });
  }
};

/**
 * Definir una tasa manual
 * - Desactiva cualquier tasa MANUAL previa
 * - Guarda la nueva como activa
 */
export const setManualRate = async (req, res) => {
  try {
    const { rate } = req.body;

    // 1️⃣ Validación estricta
    if (rate === undefined || isNaN(rate) || Number(rate) <= 0) {
      return res.status(400).json({
        message: "La tasa debe ser un número mayor a 0",
      });
    }

    // 2️⃣ Desactivar tasas manuales anteriores
    await ExchangeRate.updateMany(
      { source: "MANUAL", active: true },
      { active: false }
    );

    // 3️⃣ Crear nueva tasa manual activa
    const manualRate = await ExchangeRate.create({
      source: "MANUAL",
      rate: Number(rate),
      active: true,
      date: new Date(),
    });

    return res.status(201).json(manualRate);
  } catch (error) {
    console.error("Error setManualRate:", error);
    return res.status(500).json({
      message: "Error al guardar la tasa manual",
    });
  }
};
/**
 * Obtener la tasa BCV más reciente (referencia)
 */
export const getBCVRate = async (req, res) => {
  try {
    const bcvRate = await ExchangeRate.findOne({
      source: "BCV",
    }).sort({ date: -1 });

    if (!bcvRate) {
      return res.status(404).json({
        message: "No hay tasa BCV disponible",
      });
    }

    return res.status(200).json(bcvRate);
  } catch (error) {
    console.error("Error getBCVRate:", error);
    return res.status(500).json({
      message: "Error al obtener la tasa BCV",
    });
  }
};
