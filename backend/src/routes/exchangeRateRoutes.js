import express from "express";
import { getCurrentRate } from "../controllers/exchangeRate.controller.js";

const router = express.Router();

router.get("/", getCurrentRate);

export default router;

