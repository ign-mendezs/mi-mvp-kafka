//Este archivo contiene la lógica para manejar las operaciones de autenticación, como registrar un usuario e iniciar sesión, y generar el token JWT

const bcrypt = require("bcrypt");
const User = require("../models/User");
const { generateToken } = require("../config/jwt");
const db = require("../config/db");
const jwt = require("jsonwebtoken");

// Función de registro
const register = (req, res) => {
  const { name, email, password } = req.body;

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) return res.status(500).json({ error: "Error en el hash de contraseña" });

    User.create({ name, email, password: hashedPassword }, (error, results) => {
      if (error) return res.status(500).json({ error: "Error al registrar usuario" });

      res.status(201).json({ message: "Usuario registrado correctamente" });
    });
  });
};

// Función de login
const login = (req, res) => {
  const { email, password } = req.body;

  User.findByEmail(email, (error, results) => {
    if (error || results.length === 0) return res.status(401).json({ error: "Usuario no encontrado" });

    const user = results[0];

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (!isMatch) return res.status(401).json({ error: "Contraseña incorrecta" });

      const token = generateToken(user);
      res.json({ token });
    });
  });
};

module.exports = { register, login };
