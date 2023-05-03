import express from 'express'

const app = express() // manda llamar a ejecutar express para crear el server
app.use(express.json()) // Nos permite recibir informacion atravez de archivos JSON

export default app
