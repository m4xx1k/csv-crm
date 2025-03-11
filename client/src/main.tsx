import 'bootstrap/dist/css/bootstrap.min.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './global.css'
import Login from './pages/login/'
import MainPage from './pages/main'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/login' element={<Login />} />
				<Route path='*' element={<MainPage />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
)
