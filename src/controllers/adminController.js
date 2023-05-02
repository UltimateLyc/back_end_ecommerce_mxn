/* eslint-disable camelcase */
import { User } from '../config/models.config.js'
import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import bcryptjs from 'bcryptjs'

// Create new user
export const setUser = asyncHandler(async (req, res) => {
  const { username, password, email, id_role } = req.body

  if (!username || !password || !email || !id_role) {
    res.status(400)
    throw new Error('Favor de ingresar los datos completos')
  }

  /* User exist
  const userExist = await User.findOne({ username })
  const emailExist = await User.findOne({ email })

  if (emailExist) {
    res.status(400)
    throw new Error('Ya existe el usuario o correo')
  }
  */

  // Hash Password
  const salt = await bcryptjs.genSalt(10)
  const hashedPassword = await bcryptjs.hash(password, salt)

  // Create new user
  const newUser = await User.create({
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

// Generate token
const genereteToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  })
}

// Login User
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })

  if (user && (await bcryptjs.compare(password, user.password))) {
    res.json({
      id: user.id,
      username: user.username,
      email: user.email,
      token: genereteToken(user.id),
      meesage: 'Login Exitoso'
    })
  } else {
    res.status(400)
    throw new Error('Credenciales incorrectas')
  }
})

export const dataUser = asyncHandler(async (req, res) => {
  const { id, username, email, id_role } = req.user

  res.status(200).json({
    id,
    username,
    email,
    id_role
  })
})
