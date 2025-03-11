import { useRef } from 'react'
import api from '../../api/instanse'
import styles from './styles.module.css'
export const UploadCSV = () => {
	const inputRef = useRef<HTMLInputElement>(null)

	const handleOpenFileExplorer = () => {
		inputRef.current?.click()
	}

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const csvFile = event.target.files?.[0]
		if (!csvFile) return
		const formData = new FormData()
		formData.append('csvFile', csvFile)
		api.post('data', formData).then(() => {
			alert('Файл завантажено успішно')
			window.location.reload()
		})
	}

	return (
		<button
			type='button'
			onClick={handleOpenFileExplorer}
			className={styles.uploadBtn}
		>
			<input
				ref={inputRef}
				className={styles.uploadInput}
				type='file'
				accept='.csv'
				onChange={handleFileChange}
			/>
			Завантажити CSV
		</button>
	)
}
