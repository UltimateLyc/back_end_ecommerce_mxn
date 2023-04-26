
import app from './app.js'
// import dotenv from 'dotenv'

async function main () {
  try {
    // dotenv.config({ path: '.env' }) // Configuramos el .env con dotenv
    app.listen(process.env.PORT) // Decimos que app escuche el puerto seleccionado
    console.log('Server ON')
  } catch (error) {
    console.log(error)
  }
}

main()
