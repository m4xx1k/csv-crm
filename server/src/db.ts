import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const connectDB = async () => {
	const mongoURI: string = process.env.MY_MONGO_DB_DATABASE_URL || ''
	try {
		await mongoose.connect(mongoURI, {
			ssl: true,
		})
		console.log('MongoDB connected')
	} catch (err) {
		console.error('Error connecting to MongoDB:', err)
		process.exit(1)
	}
}

export default connectDB
