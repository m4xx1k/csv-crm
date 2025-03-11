import express from 'express'
import { getData, uploadCSV } from '../controllers/data.controller.js'
import upload from '../middlewares/upload.js'

const router = express.Router()

router.post('/', upload.single('csvFile'), uploadCSV)

router.get('/', getData)

export default router
