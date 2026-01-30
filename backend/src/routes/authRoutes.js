const express = require('express');
const { login } = require('../auth'); // Importamos la función login desde auth.js

const router = express.Router();

// Ruta para el login de usuarios
router.post('/login', login);

module.exports = router;
