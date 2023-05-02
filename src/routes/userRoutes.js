import { Router } from 'express'
import { dataUser, loginUser, setUser } from '../controllers/adminController.js'
import protect from '../middleware/authMiddleware.js'

const router = Router()

router.route('/api/user').post(setUser)
router.route('/api/user/login').post(loginUser)
router.route('/api/user/data').post(protect, dataUser)

export default router
