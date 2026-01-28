import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Test route (OBLIGATORIA para debug)
app.get("/", (req, res) => {
  res.send("Mini bodegOn API running");
});

// DB
connectDB();

// PORT OBLIGATORIO PARA RENDER
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
