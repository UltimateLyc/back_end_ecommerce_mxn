import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import { User } from '../models/userModel.js'

const protect = asyncHandler(async (req, res, next) => {
  let token

  // ver si nos lo mandaron
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Obtenemos el token
      token = req.headers.authorization.split(' ')[1]
      // console.log('**************   split', req.headers.authorization.split(' ')[1], '**************')

      // Verificamos el token
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      // console.log('**************  decoded', decoded, '**************')

      // Obtenemos los datos del usuario del mismo token
      req.user = await User.findByPk(decoded.id).catch('-password')
      // console.log('**************    findByid', await User.findByPk(decoded.id).catch('-password'), '**************')

      next()
    } catch (error) {
      console.log(error)
      res.status(401)
      throw new Error('token Incorrecto')
    }
  }
  if (!token) {
    res.status(401)
    throw new Error('Sin token')
  }
})

export default protect
