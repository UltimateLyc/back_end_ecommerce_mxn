import { DataTypes, sequelize } from '../config/config.js'

export const DataAdminUser = sequelize.define('data_admin_user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address_line1: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address_line2: {
    type: DataTypes.STRING,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false
  },
  zip_code: {
    type: DataTypes.STRING,
    allowNull: false
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telephone: {
    type: DataTypes.STRING,
    allowNull: false
  }

}, {
  sequelize,
  tableName: 'data_admin_user',
  schema: 'public',
  timestamps: false,
  indexes: [
    {
      name: 'data_admin_user_pkey',
      unique: true,
      fields: [
        { name: 'id' }
      ]
    }
  ]
})
