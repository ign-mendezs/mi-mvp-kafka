//Este es el archivo principal de configuración del servidor Express. Aquí es donde se configura el servidor y las rutas principales, además de los middlewares

// Importación de dependencias
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');  // Importa las rutas de autenticación
const authMiddleware = require('./middlewares/authMiddleware'); // Importa el middleware de autenticación

// Configuración de dotenv para las variables de entorno
dotenv.config();
const app = express();

// Middleware para manejar las solicitudes JSON
app.use(express.json());
// Middleware CORS para permitir solicitudes desde otros dominios (especialmente para el frontend)
app.use(cors());

app.get("/api", (req, res) => {
    res.sendStatus(200); // Solo devuelve un "OK" sin contenido
  });

  app.use((req, res, next) => {
    console.log(`Solicitud recibida: ${req.method} ${req.url}`);
    next();
  });

// Configuración de rutas
app.use('/api', authRoutes);  // Aquí se usa authRoutes

// Ruta protegida por el middleware de autenticación
app.get('/api/protected', authMiddleware, (req, res) => {
    res.json({ message: "Acceso autorizado" });
});

// Configuración del puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
