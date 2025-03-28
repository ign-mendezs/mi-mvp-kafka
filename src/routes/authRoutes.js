// Rutas de autenticación: registra e inicia sesión de usuarios.
// Importa el controlador de autenticación y exporta las rutas para usar en app.js.

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');  // Importa el controlador de autenticación

// Ruta para el registro
router.post('/register', authController.register);
// Ruta para el login
router.post('/login', authController.login);

module.exports = router;
