import express from "express";
import {
  getActiveRate,
  setManualRate,
} from "../controllers/exchangeRate.controller.js";

const router = express.Router();

// Obtener tasa activa (manual o BCV)
router.get("/exchange-rate/active", getActiveRate);

// Definir tasa manual
router.post("/exchange-rate/manual", setManualRate);

export default router;
