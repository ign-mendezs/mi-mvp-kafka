// Configuración de JWT para autenticación: genera tokens firmados con el id y email del usuario.
// El token expira en 1 hora.

const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

module.exports = { generateToken };
