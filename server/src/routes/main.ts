import express, { Router } from 'express'

import { authMiddleware } from '../middlewares/auth.middleware.js'
import authRouter from './auth.js'
import dataRouter from './data.js'
import userRouter from './user.js'

const router: Router = express.Router()

router.use('/auth', authRouter)
router.use('/user', userRouter)
router.use('/data', authMiddleware, dataRouter)

export default router
