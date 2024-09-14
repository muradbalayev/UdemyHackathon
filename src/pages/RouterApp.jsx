import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Home/HomePage'
import AdminPage from './Admin/AdminPage'

const RouterApp = () => {
    return (
        <div className='h-screen w-full'>
            <BrowserRouter>
                <Routes>
                    <Route element={<HomePage />} path="/" />
                    <Route element={<AdminPage/>} path='/admin' />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default RouterApp
