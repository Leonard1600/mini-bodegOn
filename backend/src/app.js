import express from "express";
import cors from "cors";

import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import exchangeRateRoutes from "./routes/exchangeRateRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/exchange-rate", exchangeRateRoutes);

export default app;
