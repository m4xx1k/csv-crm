import DataModel from '../models/data.js'
import { clearAndSaveData, processCSVFile } from '../services/data.service.js'

const uploadCSV = async (req, res) => {
	if (!req.file) {
		return res.status(400).json({ message: 'No file uploaded.' })
	}

	try {
		const data = await processCSVFile(req.file.path)

		const savedData = await clearAndSaveData(data)

		res
			.status(200)
			.json({ message: 'File processed and data saved!', data: savedData })
	} catch (error) {
		res.status(500).json({ message: 'Error processing file.', error })
	}
}

const getData = async (req, res) => {
	try {
		const data = await DataModel.find({})
		res.status(200).json(data)
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving data.' })
	}
}

export { getData, uploadCSV }
