import { Router } from "express";
import { getLatestRate } from "../controllers/exchangeRate.controller.js";

const router = Router();

router.get("/", getLatestRate);

export default router;
