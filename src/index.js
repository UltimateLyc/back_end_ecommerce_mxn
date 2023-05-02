
import app from './app.js'
import dotenv from 'dotenv'
import { sequelize } from './database/database.js'
import colors from 'colors' // eslint-disable-line no-unused-vars

// importamos los modelos
/* eslint-disable no-unused-vars */
import { User, Role, DataUser } from './config/models.config.js'

async function main () {
  try {
    dotenv.config({ path: '.env' }) // Configuramos el .env con dotenv
    await sequelize.sync({ force: process.env.FORCE }) // Sincroniza el codigo con lo que hara en la base de datos // force:false sirve para que no se modifique la tabla ya creada
    await sequelize.authenticate() // Verifica que nos podamos conectar a la bd
    console.log('Connection with the server successful')
    app.listen(process.env.PORT) // Decimos que app escuche el puerto seleccionado
    console.log(`Server connection on port ${process.env.PORT}`.cyan.underline)
  } catch (error) {
    console.log(error.red.underline)
  }
}

main()
