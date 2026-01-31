import express from "express";
import auth from "../middleware/auth.js";
import { getTasa, updateTasa } from "../controllers/exchangeRate.controller.js";

const router = express.Router();

router.get("/", getTasa);
router.put("/", auth, updateTasa);

export default router;
