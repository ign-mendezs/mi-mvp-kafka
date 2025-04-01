//Este es el archivo principal de configuración del servidor Express. Aquí es donde se configura el servidor y las rutas principales, además de los middlewares

// src/app.js
// Configuración principal del servidor Express: middlewares, rutas y logging.

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const { authenticateUser } = require('./middlewares/authMiddleware');
const protectedRoutes = require('./routes/protectedRoutes');

dotenv.config();
const app = express();

app.use(express.json());   // Para parsear JSON en las solicitudes
app.use(cors());           // Habilita CORS para solicitudes desde otros dominios

// Rutas base y log de solicitudes
app.get("/api", (req, res) => {
    res.sendStatus(200);
});

app.use((req, res, next) => {
    console.log(`Solicitud recibida: ${req.method} ${req.url}`);
    next();
});

// Rutas de autenticación (registro, login)
app.use('/api', authRoutes);

// Ruta protegida de ejemplo que requiere autenticación
app.get('/api/protected', authenticateUser, (req, res) => {
    res.json({ message: "Acceso autorizado" });
});

// Rutas protegidas que requieren permisos específicos (ver protectedRoutes.js)
app.use('/api', protectedRoutes);

module.exports = app;
