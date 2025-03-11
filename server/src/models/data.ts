import mongoose from 'mongoose'

const dataSchema = new mongoose.Schema(
	{
		data: { type: mongoose.Schema.Types.Mixed },
	},
	{ timestamps: true, strict: false }
)

const DataModel = mongoose.model('Data', dataSchema)
export default DataModel
