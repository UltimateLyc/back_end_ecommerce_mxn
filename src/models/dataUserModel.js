import { DataTypes, sequelize } from '../config/config.js'

export const DataUser = sequelize.define('data_user', {
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
  tableName: 'data_user',
  schema: 'public',
  timestamps: true,
  indexes: [
    {
      name: 'data_user_pkey',
      unique: true,
      fields: [
        { name: 'id' }
      ]
    }
  ]
})
