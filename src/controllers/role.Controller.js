/* eslint-disable camelcase */
import { Role } from '../config/models.config.js'
import asyncHandler from 'express-async-handler'

export const setRole = asyncHandler(async (req, res) => {
  const { role } = req.body

  if (!role) {
    res.status(400)
    throw new Error('Favor de ingresar un role')
  }

  const setRole = await Role.create({
    role
  })

  res.status(200).json(setRole)
})
