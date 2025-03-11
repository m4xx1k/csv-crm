import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import connectDB from './db.js'
import mainRouter from './routes/main.js'

dotenv.config()

function bootstrap() {
	const app = express()
	const port: number = process.env.PORT ? parseInt(process.env.PORT) : 5000

	app.use(cors())

	app.use(express.json())
	app.use(express.urlencoded({ extended: false }))

	connectDB()

	app.use('/', mainRouter)

	app.listen(port, () => {
		console.log(`Server running on port ${port}`)
	})
}
bootstrap()
