// controllers/authController.ts

import { Request, Response } from 'express'
import User from '../models/user.js'
import { generateToken } from '../services/jwt.service.js'

export const login = async (req: Request, res: Response): Promise<void> => {
	const { username, password } = req.body

	try {
		const user = await User.findOne({ username })
		if (!user || user.password !== password) {
			res.status(401).json({ message: 'Invalid credentials' })
			return
		}

		const token = generateToken(user._id.toString())
		res.json({ token })
	} catch (err) {
		res.status(500).json({ message: 'Error during login' })
	}
}
