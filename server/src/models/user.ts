import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

// Create the User model
const User = mongoose.model('User', userSchema)

export default User
