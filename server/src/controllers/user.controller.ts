import { Request, Response } from 'express'
import * as userService from '../services/user.service.js'

export const createUser = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const user = await userService.createUser(req.body)
		res.status(201).json(user)
	} catch (err: unknown) {
		handleError(err, res)
	}
}

export const getAllUsers = async (
	_req: Request,
	res: Response
): Promise<void> => {
	try {
		const users = await userService.getAllUsers()
		res.json(users)
	} catch (err: unknown) {
		handleError(err, res)
	}
}

export const getUserById = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const user = await userService.getUserById(req.params.id)
		if (!user) {
			res.status(404).json({ message: 'User not found' })
			return
		}
		res.json(user)
	} catch (err: unknown) {
		handleError(err, res)
	}
}

export const updateUserById = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const updatedUser = await userService.updateUserById(
			req.params.id,
			req.body
		)
		if (!updatedUser) {
			res.status(404).json({ message: 'User not found!' })
			return
		}
		res.json(updatedUser)
	} catch (err: unknown) {
		handleError(err, res)
	}
}

export const deleteUserById = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const result = await userService.deleteUserById(req.params.id)
		if (!result) {
			res.status(404).json({ message: 'User not found' })
			return
		}
		res.json({ message: 'User deleted' })
	} catch (err: unknown) {
		handleError(err, res)
	}
}

const handleError = (err: unknown, res: Response) => {
	if (err instanceof Error) {
		res.status(500).json({ message: err.message })
	} else {
		res.status(500).json({ message: 'Unknown error occurred' })
	}
}
