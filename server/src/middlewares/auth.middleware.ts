// middleware/authMiddleware.ts

import { NextFunction, Request, Response } from 'express'
import * as jwtService from '../services/jwt.service.js'

export const authMiddleware = (
	req: Request | any,
	res: Response,
	next: NextFunction
): void => {
	const token = req.header('Authorization')?.replace('Bearer ', '')

	if (!token) {
		res.status(401).json({ message: 'Authorization token missing' })
		return
	}

	try {
		const decoded = jwtService.verifyToken(token)
		req.user = decoded
		next()
	} catch (err) {
		res.status(401).json({ message: 'Invalid or expired token' })
	}
}
