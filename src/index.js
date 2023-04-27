
import app from './app.js'
import dotenv from 'dotenv'
import { sequelize } from './database/database.js'

// importamos los modelos
import './models/AdminUser.js'
import './models/Role.js'
import './models/DataAdminuser.js'

async function main () {
  try {
    dotenv.config({ path: '.env' }) // Configuramos el .env con dotenv
    await sequelize.sync({ force: process.env.FORCE }) // Sincroniza el codigo con lo que hara en la base de datos // force:false sirve para que no se modifique la tabla ya creada
    await sequelize.authenticate() // Verifica que nos podamos conectar a la bd
    console.log('Connection with the server successful')
    app.listen(process.env.PORT) // Decimos que app escuche el puerto seleccionado
    console.log(`Server connection on port ${process.env.PORT}`)
  } catch (error) {
    console.log(error)
  }
}

main()
