require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./src/config/database'); 

const app = express();
app.use(express.json());
app.use(cors());

// Rutas
const authRoutes = require('./src/routes/authRoutes');
app.use('/auth', authRoutes);

// Ruta raíz de prueba
app.get('/', (req, res) => {
  res.send('Servidor backend funcionando 🚀');
});

// Sincronizar base de datos
const PORT = process.env.PORT || 5000;
sequelize.sync().then(() => {
  console.log('Base de datos sincronizada');
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('Error al sincronizar la base de datos:', err);
});
