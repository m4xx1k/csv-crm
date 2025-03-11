import User from '../models/user.js'

export const createUser = async (userData: {
	username: string
	password: string
}) => {
	try {
		const user = await User.create(userData)
		return user
	} catch (err) {
		throw new Error('Error creating user')
	}
}

export const getAllUsers = async () => {
	try {
		const users = await User.find()
		return users
	} catch (err) {
		throw new Error('Error fetching users')
	}
}

export const getUserById = async (id: string) => {
	try {
		const user = await User.findById(id)
		return user
	} catch (err) {
		throw new Error('Error fetching user')
	}
}

export const updateUserById = async (
	id: string,
	updateData: { username?: string; password?: string }
) => {
	try {
		const user = await User.findById(id)
		if (!user) return null

		if (updateData.password != null) user.password = updateData.password
		if (updateData.username != null) user.username = updateData.username

		const updatedUser = await user.save()
		return updatedUser
	} catch (err) {
		throw new Error('Error updating user')
	}
}

export const deleteUserById = async (id: string) => {
	try {
		const user = await User.findByIdAndDelete(id)
		if (!user) return null
		return user
	} catch (err) {
		throw new Error('Error deleting user')
	}
}
