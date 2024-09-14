import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Home/HomePage'

const RouterApp = () => {
  return (
    <div className='h-screen w-full'>
 <BrowserRouter>
<Routes>
    <Route element={<HomePage/>} path="/" />
</Routes>
 </BrowserRouter>
    </div>
  )
}

export default RouterApp
