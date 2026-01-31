import express from "express";
import {
  getActiveRate,
  setManualRate,
  getBCVRate,
} from "../controllers/exchangeRate.controller.js";

import auth from "../middleware/auth.js";

const router = express.Router();

// Obtener tasa activa (la que usa el sistema)
router.get("/", getActiveRate);

// Obtener tasa BCV (solo referencia)
router.get("/bcv", getBCVRate);

// Definir tasa manual (solo admin)
router.post("/manual", auth, setManualRate);

export default router;

