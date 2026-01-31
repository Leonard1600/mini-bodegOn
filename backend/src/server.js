// src/server.js
import dotenv from "dotenv";
dotenv.config(); // DEBE ir primero

import express from "express";
import mongoose from "mongoose";
import tasaRoutes from "./routes/tasaRoutes.js";

const app = express();

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


