import { DataTypes, sequelize } from '../config/config.js'
import { DataAdminUser } from './DataAdminUser.js'

export const AdminUser = sequelize.define('admin_user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    required: [true, 'Please entre the user']
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    required: [true, 'Please entre the password']
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    required: [true, 'Please entre the email']
  }

}, {
  sequelize,
  tableName: 'admin_user',
  schema: 'public',
  timestamps: true,
  indexes: [
    {
      name: 'admin_user_pkey',
      unique: true,
      fields: [
        { name: 'id' }
      ]
    }
  ]
})

AdminUser.hasOne(DataAdminUser, {
  foreignKey: 'useradmin_Id',
  sourceKey: 'id'
})

DataAdminUser.belongsTo(AdminUser, {
  foreignKey: 'useradmin_Id',
  targetId: 'id'
})
