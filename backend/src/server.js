import dotenv from "dotenv";
dotenv.config(); // SIEMPRE PRIMERO

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import tasaRoutes from "./routes/tasaRoutes.js";

const app = express();

/* ======================
   MIDDLEWARES
====================== */
app.use(cors({
  origin: "*", // luego se puede limitar a Vercel
}));

app.use(express.json());

/* ======================
   RUTAS
====================== */
app.use("/api/tasa", tasaRoutes);

// Health check para Render
app.get("/salud", (req, res) => {
  res.status(200).send("OK");
});

/* ======================
   SERVER + DB
====================== */
const PORT = process.env.PORT || 4000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB conectado");
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Error MongoDB:", err.message);
    process.exit(1);
  });



