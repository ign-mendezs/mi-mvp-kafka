//Este archivo maneja las rutas de autenticación, como el registro y login de usuarios
//authController: Se invoca el controlador de autenticación que contiene la lógica real para registrar e iniciar sesión (ver siguiente archivo).
//module.exports: Exporta las rutas para que puedan ser utilizadas en app.js.

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');  // Importa el controlador de autenticación

// Ruta para el registro
router.post('/register', authController.register);
// Ruta para el login
router.post('/login', authController.login);

module.exports = router;
