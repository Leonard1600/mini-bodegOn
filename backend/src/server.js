import dotenv from "dotenv";
import connectDB from "./config/db.js";
import app from "./app.js";

// Cargar variables de entorno
dotenv.config();

// Conectar a la base de datos
connectDB();

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

// Levantar servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
