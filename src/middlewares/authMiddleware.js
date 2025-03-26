//Este middleware es el encargado de verificar si el token JWT enviado en las solicitudes es válido

const jwt = require("jsonwebtoken");

const authenticateUser = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ error: "Acceso no autorizado - Token no proporcionado" });
  }
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "tu_secreto_jwt"
    );

    if (!decoded.id) {
      return res
        .status(403)
        .json({ error: "Token inválido - No contiene user_id" });
    }
    req.user = decoded; // Asigna el usuario al request

    next();
  } catch (error) {
    console.error("Error en autenticación:", error);
    res.status(403).json({ error: "Token inválido" });
  }
};

module.exports = { authenticateUser };
