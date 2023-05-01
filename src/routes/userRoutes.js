import { Router } from 'express'
import { setUser } from '../controllers/adminController.js'

const router = Router()

router.route('/api/user').post(setUser)

export default router
