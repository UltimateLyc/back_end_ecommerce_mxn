/* eslint-disable camelcase */
import { AdminUser } from '../config/models.config.js'
import asyncHandler from 'express-async-handler'
// import jwt from 'jsonwebtoken'
import bcryptjs from 'bcryptjs'

export const setUser = asyncHandler(async (req, res) => {
  const { username, password, email, id_role } = req.body

  if (!username || !password || !email || !id_role) {
    res.status(400)
    throw new Error('Favor de ingresar los datos completos')
  }

  /* User exist
  const userExist = await AdminUser.findOne({ username })
  const emailExist = await AdminUser.findOne({ email })

  if (emailExist) {
    res.status(400)
    throw new Error('Ya existe el usuario o correo')
  }
  */

  // Hash Password
  const salt = await bcryptjs.genSalt(10)
  const hashedPassword = await bcryptjs.hash(password, salt)

  // Create new user
  const newUser = await AdminUser.create({
    username,
    password: hashedPassword,
    email,
    id_role
  })

  // Validate new user
  if (newUser) {
    res.status(201).json({
      id: newUser.id,
      username: newUser.username,
      email: newUser.email
    })
  } else {
    res.status(400)
    throw new Error('No se pudo generar el usuario')
  }
})
