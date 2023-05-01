import { DataTypes, sequelize } from '../config/config.js'
import { AdminUser } from './AdminUser.js'

export const Role = sequelize.define('role', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'role',
  schema: 'public',
  timestamps: true,
  indexes: [
    {
      name: 'role_pkey',
      unique: true,
      fields: [
        { name: 'id' }
      ]
    }
  ]
})

Role.hasMany(AdminUser, {
  foreignKey: 'id_role',
  sourceKey: 'id'
})

AdminUser.belongsTo(Role, {
  foreignKey: 'id_role',
  targetId: 'id'
})
