import { Router } from 'express'
import { loginUser, setUser } from '../controllers/adminController.js'
import protect from '../middleware/authMiddleware.js'

const router = Router()

router.route('/api/user').post(setUser)
router.route('/api/user/login').post(protect, loginUser)

export default router
