import styles from './styles.module.css'
import { DataColumn } from './types'
export const DataTable = ({ data }: { data: DataColumn[] }) => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Дані</h2>
			<div className={styles.tableWrapper}>
				<table className={styles.table}>
					<thead>
						<tr>
							{data.length > 0 &&
								Object.keys(data[0]).map(key => <th key={key}>{key}</th>)}
						</tr>
					</thead>
					<tbody>
						{data.map(item => (
							<tr key={item._id}>
								{Object.values(item).map((value, index) => (
									<td key={index}>{value}</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
