import express from "express";
import {
  getActiveRate,
  getBCVRate,
  setManualRate,
} from "../controllers/exchangeRate.controller.js";

const router = express.Router();

/**
 * Obtener tasa activa
 * Prioridad:
 * 1) MANUAL activa
 * 2) BCV
 */
router.get("/active", getActiveRate);

/**
 * Obtener tasa BCV (referencia oficial)
 */
router.get("/bcv", getBCVRate);

/**
 * Definir tasa manual
 */
router.post("/manual", setManualRate);

export default router;

