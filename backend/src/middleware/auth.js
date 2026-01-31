// src/middleware/auth.js
import User from '../models/User.js'; // El modelo de usuario

export const isAdminWithPassword = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Buscar el usuario por email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ msg: 'Usuario no encontrado' });
    }

    // Verificar si el usuario es admin
    if (user.role !== 'admin') {
      return res.status(403).json({ msg: 'Acceso denegado, no eres admin' });
    }

    // Verificar la contraseña (asegurate de que tu modelo User tenga un método `comparePassword`)
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ msg: 'Contraseña incorrecta' });
    }

    next(); // Si todo está bien, continuar con la ruta
  } catch (error) {
    console.error('Error en la autenticación:', error);
    res.status(500).json({ msg: 'Error interno del servidor' });
  }
};
