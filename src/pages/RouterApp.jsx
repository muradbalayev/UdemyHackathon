import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminPage from './Admin/AdminPage'
import Users from './Users/Users'
import { Toaster } from 'react-hot-toast'
import VideoPage from './Users/VideoPage/VideoPage'

const RouterApp = () => {
    return (
        <div className='h-screen max-w-[1920px] mx-auto'>
            <Toaster
                containerClassName="toast"
                position="top-center"
                toastOptions={{
                    duration: 3000,
                    className: "custom-toast",
                    style: {
                        backgroundColor: "#fd0",
                        fontWeight: "600",
                        padding: "16px",
                        color: "#214440",
                    },
                }}
            />
            <BrowserRouter>
                <Routes>
                    <Route element={<Users />} path="/*" />
                    <Route element={<AdminPage />} path='/admin' />
                    <Route element={<VideoPage/>} path='/course/video'/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default RouterApp
