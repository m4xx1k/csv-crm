import { useNavigate } from 'react-router-dom'
import api from '../../api/instanse'
import styles from './styles.module.css'
const Login = () => {
	const navigate = useNavigate()
	const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		e.stopPropagation()
		//get login and password by name
		const username = e.currentTarget.username.value
		const password = e.currentTarget.password.value
		const res = await api.post<{ token: string }>('/auth/login', {
			username,
			password,
		})
		if (res.status === 200) {
			localStorage.setItem('token', res.data.token)
			navigate('/')
		}
	}
	return (
		<form onSubmit={handleSignIn} className={styles.form}>
			<h2 className={styles.title}>Sign In</h2>
			<input
				className={styles.input}
				type='text'
				name='username'
				placeholder='Enter username...'
			/>
			<input
				className={styles.input}
				type='text'
				name='password'
				placeholder='Enter password...'
			/>
			<button className={styles.button} type='submit'>
				Submit
			</button>
		</form>
	)
}

export default Login
