// Configuración de JWT para autenticación: genera tokens firmados con el id y email del usuario.
// El token expira en 1 hora.

const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  const roles = user.Roles ? user.Roles.map(role => role.name) : [];
  return jwt.sign(
    { id: user.id, email: user.email, roles },
    process.env.JWT_SECRET || "tu_secreto_jwt",
    { expiresIn: "1h" }
  );
};

module.exports = { generateToken };
