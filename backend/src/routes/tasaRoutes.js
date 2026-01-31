import express from "express";
import {
  getTasa,
  updateTasa,
} from "../controllers/exchangeRate.controller.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

/**
 * ✅ OBTENER TASA (PÚBLICO)
 * GET /api/tasa
 */
router.get("/", getTasa);

/**
 * 🔒 ACTUALIZAR TASA (ADMIN)
 * PUT /api/tasa
 */
router.put("/", auth, updateTasa);

export default router;
