// Conexión a la base de datos usando Sequelize y SQLite.
// Exporta la instancia de conexión para usarla en otros módulos.

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite' // Archivo donde se guardarán los datos
});

module.exports = sequelize;
