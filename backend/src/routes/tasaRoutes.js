import express from "express";
import {
  getExchangeRate,
  updateExchangeRate,
} from "../controllers/exchangeRate.controller.js";
import auth from "../middleware/auth.js";

const router = express.Router();

/**
 * ✅ OBTENER TASA (PÚBLICO)
 * GET /api/tasa
 */
router.get("/", getExchangeRate);

/**
 * 🔒 ACTUALIZAR TASA (ADMIN)
 * PUT /api/tasa
 */
router.put("/", auth, updateExchangeRate);

export default router;

