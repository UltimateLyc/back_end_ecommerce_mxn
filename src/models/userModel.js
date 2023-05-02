import { DataTypes, sequelize } from '../config/config.js'
import { DataUser } from './dataUserModel.js'

export const User = sequelize.define('user', {
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
  tableName: 'user',
  schema: 'public',
  timestamps: true,
  indexes: [
    {
      name: 'user_pkey',
      unique: true,
      fields: [
        { name: 'id' }
      ]
    }
  ]
})

User.hasOne(DataUser, {
  foreignKey: 'id_user',
  sourceKey: 'id'
})

DataUser.belongsTo(User, {
  foreignKey: 'id_user',
  targetId: 'id'
})
