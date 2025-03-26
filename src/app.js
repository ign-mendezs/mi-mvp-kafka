const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");

// Cargar variables de entorno
dotenv.config();

const app = express();

// Middleware
app.use(cors()); // Permitir peticiones desde otro dominio
app.use(express.json()); // Soporte para JSON en requests

// Rutas
app.use("/api/auth", authRoutes);

module.exports = app;
