import { Router } from 'express'
import { getRoles, setRole } from '../controllers/role.Controller.js'

const router = Router()

// router.post('/api/role', setRole)
router.route('/api/role').post(setRole).get(getRoles)

export default router
