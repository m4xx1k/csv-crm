import { useEffect, useState } from 'react'
import api from '../../api/instanse'
import { DataTable } from '../../components/dynamic-table'
import { DataColumn } from '../../components/dynamic-table/types'
import { UploadCSV } from './upload-csv'
type DataResponse = { _id: string; data: DataColumn }[]

const MainPage = () => {
	const [data, setData] = useState<DataColumn[]>([])

	useEffect(() => {
		api<DataResponse>('/data')
			.then(result => {
				console.log(result)
				setData(result.data.map(item => item.data).filter(Boolean))
			})
			.catch(err => console.error('Error fetching data:', err))
	}, [])
	console.log('data', data)
	return (
		<div>
			<UploadCSV />
			{data.length > 0 && <DataTable data={data} />}
		</div>
	)
}

export default MainPage
