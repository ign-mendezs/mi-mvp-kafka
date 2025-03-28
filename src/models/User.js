// Define el modelo "User" para gestionar la información de usuarios en la base de datos.
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define el modelo User con campos: name, email y password.
const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Exporta el modelo para usarlo en la aplicación.
module.exports = User;
