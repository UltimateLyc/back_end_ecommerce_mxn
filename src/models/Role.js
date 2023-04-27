import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'
import { Adminuser } from './AdminUser.js'

export const Role = sequelize.define('roles', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  role_type: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

Role.hasMany(Adminuser, {
  foreignKey: 'role_Id',
  sourceKey: 'id'
})

Adminuser.belongsTo(Role, {
  foreignKey: 'role_Id',
  targetId: 'id'
})
