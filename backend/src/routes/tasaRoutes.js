// src/routes/tasaRoutes.js
import express from 'express';
import { isAdminWithPassword } from '../middleware/auth.js'; // Middleware de autenticación y autorización
import Tasa from '../models/Tasa.js'; // El modelo Tasa
import { actualizarPrecios } from '../utils/actualizarPrecios.js'; // Función para actualizar los precios

const router = express.Router();

// Endpoint para que el cliente admin actualice la tasa de cambio
router.put('/actualizar-tasa', isAdminWithPassword, async (req, res) => {
  const { tasaNueva } = req.body;

  if (!tasaNueva) {
    return res.status(400).json({ msg: 'Tasa nueva requerida' });
  }

  try {
    // Guardamos la nueva tasa
    const nuevaTasa = new Tasa({
      tasa: tasaNueva,
      fecha: new Date(),
    });

    await nuevaTasa.save(); // Guardamos la nueva tasa en la base de datos

    // Actualizamos los precios de los productos
    await actualizarPrecios(); // Actualizamos los precios en bolívares

    res.status(200).json({ msg: 'Tasa actualizada correctamente' });
  } catch (error) {
    console.error('Error al actualizar la tasa:', error);
    res.status(500).json({ msg: 'Error al actualizar la tasa' });
  }
});

export default router;

