import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'
import { DataAdminuser } from './DataAdminuser.js'

export const Adminuser = sequelize.define('adminusers', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }

})

Adminuser.hasOne(DataAdminuser, {
  foreignKey: 'useradmin_Id',
  sourceKey: 'id'
})

DataAdminuser.belongsTo(Adminuser, {
  foreignKey: 'useradmin_Id',
  targetId: 'id'
})
