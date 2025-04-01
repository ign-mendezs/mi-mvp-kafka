// Función que verifica si un usuario tiene un permiso específico.
// Se usa la asociación de User con Role y Permission para realizar la consulta.

const { User, Role, Permission } = require('./index');

const userHasPermission = async (userId, permissionName) => {
  const user = await User.findByPk(userId, {
    include: {
      model: Role,
      include: Permission
    }
  });
  if (!user) return false;
  // Recorre cada rol del usuario y verifica si alguno tiene el permiso requerido
  for (const role of user.Roles) {
    if (role.Permissions.some(permission => permission.name === permissionName)) {
      return true;
    }
  }
  return false;
};

module.exports = { userHasPermission };
