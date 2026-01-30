import express from 'express';
import { isAdminWithPassword } from '../middleware/auth.js'; // Middleware para verificar el admin y la contraseña
import Tasa from '../models/Tasa.js'; // Modelo de tasa

const router = express.Router();

// Ruta para obtener la tasa actual
router.get('/', async (req, res) => {
  try {
    const tasa = await Tasa.findOne().sort({ fecha: -1 }); // Obtener la tasa más reciente
    if (!tasa) {
      return res.status(404).json({ msg: 'No se encontró tasa en la base de datos' });
    }
    res.json(tasa); // Enviamos la tasa actual
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Error al obtener la tasa' });
  }
});

// Ruta para actualizar la tasa manual (solo admin con contraseña correcta)
router.put('/', isAdminWithPassword, async (req, res) => {
  const { tasa } = req.body; // Nueva tasa

  if (!tasa || tasa <= 0) {
    return res.status(400).json({ msg: 'Se requiere una tasa válida mayor que 0' });
  }

  try {
    // Crear un nuevo registro de tasa (sin borrar los anteriores)
    const updatedTasa = new Tasa({ tasa });
    await updatedTasa.save(); // Guardar la tasa actualizada en la base de datos

    res.json(updatedTasa); // Enviamos la tasa actualizada
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Error al actualizar la tasa' });
  }
});

export default router;
