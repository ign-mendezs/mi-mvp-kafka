// Modelo para la tabla 'Permission': define las acciones permitidas para cada rol.

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Permission = sequelize.define('Permission', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  description: DataTypes.STRING
});

module.exports = Permission;
