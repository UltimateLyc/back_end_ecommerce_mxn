import express from 'express'
import { roleRoutes, userRoutes } from './config/routes.config.js'

const app = express() // manda llamar a ejecutar express para crear el server
app.use(express.urlencoded({ extends: false })) // Para resibir informacion por body urlencoded
app.use(express.json()) // Nos permite recibir informacion atravez de archivos JSON

app.use(roleRoutes)
app.use(userRoutes)

export default app
