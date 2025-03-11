import csv from 'csv-parser'
import fs from 'fs'
import DataModel from '../models/data.js'

const processCSVFile = filePath => {
	return new Promise((resolve, reject) => {
		const results = []

		fs.createReadStream(filePath)
			.pipe(csv())
			.on('data', row => {
				results.push(row)
			})
			.on('end', () => {
				resolve(results)
			})
			.on('error', error => {
				reject(error)
			})
	})
}

const clearAndSaveData = async data => {
	try {
		await DataModel.deleteMany({})

		const dataToInsert = data.map(row => ({ data: row }))
		return await DataModel.insertMany(dataToInsert)
	} catch (error) {
		throw new Error('Error saving data to database')
	}
}

export { clearAndSaveData, processCSVFile }
