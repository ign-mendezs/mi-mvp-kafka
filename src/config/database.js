//Este archivo se conecta a la base de datos 
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite' // Archivo donde se guardarán los datos
});

module.exports = sequelize;
