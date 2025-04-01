// Modelo para la tabla 'Role': almacena roles (ej. admin, user) y su descripción.

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Role = sequelize.define('Role', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  description: DataTypes.STRING
});

module.exports = Role;
