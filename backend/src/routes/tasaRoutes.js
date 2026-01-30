import express from 'express';
import { isAdminWithPassword } from '../auth.js'; // Middleware para verificar el admin y la contraseña
import Tasa from '../models/Tasa.js'; // Modelo de tasa

const router = express.Router();

// Ruta para obtener la tasa actual
router.get('/tasa', async (req, res) => {
  try {
    const tasa = await Tasa.findOne(); // Obtener la tasa actual de la base de datos
    res.json(tasa); // Enviamos la tasa actual
  } catch (error) {
    res.status(500).json({ msg: 'Error al obtener la tasa' });
  }
});

// Ruta para actualizar la tasa manual (solo admin con contraseña correcta)
router.put('/tasa', isAdminWithPassword, async (req, res) => {
  const { tasa } = req.body; // Nueva tasa

  if (!tasa) {
    return res.status(400).json({ msg: 'Se requiere una tasa válida' });
  }

  try {
    const updatedTasa = await Tasa.findOneAndUpdate({}, { tasa }, { new: true }); // Actualizar la tasa
    res.json(updatedTasa); // Enviamos la tasa actualizada
  } catch (error) {
    res.status(500).json({ msg: 'Error al actualizar la tasa' });
  }
});

export default router;
