import { Router } from 'express'
import { setRole } from '../controllers/role.Controller.js'

const router = Router()

router.post('/api/role', setRole)

export default router
