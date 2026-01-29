import express from "express";
import {
  setManualRate,
  getActiveRate,
} from "../controllers/exchangeRate.controller.js";

const router = express.Router();

// Crear / actualizar tasa manual
router.post("/exchange-rate/manual", setManualRate);

// Obtener tasa activa (manual o BCV)
router.get("/exchange-rate/active", getActiveRate);

export default router;
