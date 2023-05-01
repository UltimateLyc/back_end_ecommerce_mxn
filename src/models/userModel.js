import { DataTypes, sequelize } from '../config/config.js'
import { DataAdminUser } from './dataUserModel.js'

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
    required: [true, 'Please entre the user'],
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    required: [true, 'Please entre the password']
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    required: [true, 'Please entre the email'],
    unique: true
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
  foreignKey: 'id_admin_user',
  sourceKey: 'id'
})

DataAdminUser.belongsTo(AdminUser, {
  foreignKey: 'id_admin_user',
  targetId: 'id'
})
