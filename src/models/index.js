// Importa los modelos y define las asociaciones entre ellos.
//Definir asociaciones en un solo lugar facilita la consulta de relaciones (por ejemplo, al verificar permisos de un usuario)

const User = require('./User');
const Role = require('./Role');
const Permission = require('./Permission');

// Relación muchos a muchos entre User y Role (tabla intermedia: UserRoles)
User.belongsToMany(Role, { through: 'UserRoles', foreignKey: 'userId' });
Role.belongsToMany(User, { through: 'UserRoles', foreignKey: 'roleId' });

// Relación muchos a muchos entre Role y Permission (tabla intermedia: RolePermissions)
Role.belongsToMany(Permission, { through: 'RolePermissions', foreignKey: 'roleId' });
Permission.belongsToMany(Role, { through: 'RolePermissions', foreignKey: 'permissionId' });

module.exports = { User, Role, Permission };
