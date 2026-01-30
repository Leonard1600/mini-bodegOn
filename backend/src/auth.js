import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from './models/User'; // Importamos el modelo de usuario

// Middleware para verificar si el usuario es admin y tiene la contraseña secreta correcta
const isAdminWithPassword = (req, res, next) => {
  const { token, password } = req.body; // Obtenemos el token y la contraseña

  if (!token || !password) {
    return res.status(400).json({ msg: 'Token y contraseña requeridos' });
  }

  try {
    const decoded = jwt.verify(token, 'secreto'); // Verificamos el token

    if (decoded.role !== 'admin') {
      return res.status(403).json({ msg: 'Acceso denegado, se requiere rol de admin' });
    }

    // Verificamos la contraseña secreta para el admin (esto es una simple comparación de contraseñas)
    const adminPassword = process.env.ADMIN_PASSWORD || 'supersecreto'; // Contraseña secreta para el admin
    if (password !== adminPassword) {
      return res.status(403).json({ msg: 'Contraseña incorrecta' });
    }

    next(); // Si todo está bien, continuamos al siguiente middleware o ruta
  } catch (error) {
    return res.status(401).json({ msg: 'Token inválido' });
  }
};

export { isAdminWithPassword };

