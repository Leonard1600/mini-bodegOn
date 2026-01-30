const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('./models/User'); // Importamos el modelo de usuario

// Función para iniciar sesión
const login = async (req, res) => {
  const { email, password } = req.body; // Obtenemos los datos del login

  try {
    // Buscamos al usuario por el correo electrónico
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Usuario no encontrado" });
    }

    // Comparamos la contraseña ingresada con la almacenada
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Contraseña incorrecta" });
    }

    // Si el usuario y la contraseña son correctos, generamos el JWT
    const payload = { userId: user._id, role: user.role };
    const token = jwt.sign(payload, 'secreto', { expiresIn: '1h' }); // El token expira en 1 hora

    res.json({ token }); // Enviamos el token al cliente
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error en el servidor" });
  }
};

// Middleware para verificar si el usuario tiene rol de admin
const isAdmin = (req, res, next) => {
  const token = req.header('x-auth-token'); // Obtenemos el token del encabezado

  if (!token) {
    return res.status(401).json({ msg: 'No autorizado' });
  }

  try {
    // Verificamos el token
    const decoded = jwt.verify(token, 'secreto'); // Verificamos el token con la clave secreta

    if (decoded.role !== 'admin') {
      return res.status(403).json({ msg: 'Acceso denegado, se requiere rol de admin' });
    }

    // Si el usuario es admin, continuamos con la siguiente función (next)
    next();
  } catch (error) {
    return res.status(401).json({ msg: 'Token inválido' });
  }
};

module.exports = { login, isAdmin };
