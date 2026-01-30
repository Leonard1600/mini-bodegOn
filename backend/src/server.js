import './cronJobs.js'; // Importar el cron job

import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js"; // Importar las rutas de autenticación
import tasaRoutes from "./routes/tasaRoutes.js"; // Importar las rutas para manejar la tasa

// Cargar variables de entorno
dotenv.config();

// Conectar a la base de datos
connectDB();

// Crear una instancia de la aplicación Express
const app = express();

// Middleware para parsear el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Usar las rutas de autenticación y tasa
app.use("/api/auth", authRoutes); // Rutas de autenticación
app.use("/api/tasa", tasaRoutes); // Rutas para manejar la tasa manual y del BCV

// Ruta base / health check (IMPORTANTE PARA RENDER)
app.get("/", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "mini-bodegon-backend",
    environment: process.env.NODE_ENV || "production",
  });
});

// Puerto obligatorio para Render
const PORT = process.env.PORT || 3000;

// Levantar el servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


