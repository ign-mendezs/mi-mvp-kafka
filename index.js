// index.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Montar las rutas de autenticación
const authRoutes = require('./src/routes/authRoutes');
app.use('/auth', authRoutes); // Esto hará que las rutas sean accesibles en /auth/login y /auth/register

app.get("/", (req, res) => {
  res.send("Servidor backend funcionando 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
