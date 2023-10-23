import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard, Notification } from '@/pages'

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Dashboard />} />
				<Route path='/notification' element={<Notification />} />
			</Routes>
		</BrowserRouter>
	)
}
