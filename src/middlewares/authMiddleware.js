// Middleware de autenticación: verifica el token JWT y asigna el usuario a la solicitud.
const jwt = require("jsonwebtoken");

const authenticateUser = (req, res, next) => {
  // Obtiene el header de autorización
  const authHeader = req.headers.authorization;

  // Valida que el header exista y tenga el formato "Bearer token"
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ error: "Acceso no autorizado - Token no proporcionado" });
  }
  
  // Extrae el token del header
  const token = authHeader.split(" ")[1];

  try {
    // Verifica y decodifica el token usando el secreto configurado
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "tu_secreto_jwt"
    );

    // Verifica que el token contenga un id de usuario
    if (!decoded.id) {
      return res
        .status(403)
        .json({ error: "Token inválido - No contiene user_id" });
    }
    
    // Asigna el usuario decodificado a la solicitud para acceso en rutas protegidas
    req.user = decoded;

    next();
  } catch (error) {
    console.error("Error en autenticación:", error);
    res.status(403).json({ error: "Token inválido" });
  }
};

module.exports = { authenticateUser };
