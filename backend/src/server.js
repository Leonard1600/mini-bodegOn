// src/server.js
import dotenv from "dotenv";
dotenv.config(); // DEBE ir primero

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import tasaRoutes from "./routes/tasaRoutes.js";

const app = express();

/**
 * ✅ CORS CONFIGURADO CORRECTAMENTE
 * - Permite frontend en Vercel
 * - Permite desarrollo local
 */
app.use(
  cors({
    origin: [
      "https://mini-bodeg-on.vercel.app",
      "http://localhost:5173",
      "http://localhost:3000",
    ],
    methods: ["GET", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middlewares
app.use(express.json());

// Rutas
app.use("/api/tasa", tasaRoutes);

// Puerto
const PORT = process.env.PORT || 4000;

// Conexión a MongoDB y arranque del servidor
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB conectado");
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Error al conectar MongoDB:", err.message);
    process.exit(1);
  });


