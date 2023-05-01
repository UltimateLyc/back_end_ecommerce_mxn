/* eslint-disable camelcase */
import { AdminUser } from '../config/models.config.js'

// const asyncHandler = require('express-async-handler')
import asyncHandler from 'express-async-handler'

export const setAdmin = asyncHandler(async (req, res) => {
  try {
    const { username, password, email, id_role } = req.body

    const createNewAdminUser = await AdminUser.create({
      username,
      password,
      email,
      id_role
    })
    res.status(200).json(createNewAdminUser)
  } catch (Error) {
    res.status(400)
    throw new Error('Missing information')
  }
})
