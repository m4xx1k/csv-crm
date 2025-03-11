import express, { Router } from 'express'
import {
	createUser,
	deleteUserById,
	getAllUsers,
	getUserById,
	updateUserById,
} from '../controllers/user.controller.js'
import { authMiddleware } from '../middlewares/auth.middleware.js'

const router: Router = express.Router()

router.post('/', createUser)

router.get('/', authMiddleware, getAllUsers)

router.get('/:id', getUserById)

router.patch('/:id', updateUserById)

router.delete('/:id', deleteUserById)

export default router
