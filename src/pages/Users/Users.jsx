
import { Route, Routes } from "react-router-dom"
import HomePage from "./HomePage/HomePage"
import CreateCourse from "./CreateCourse"

const Users = () => {

    return (
        <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<CreateCourse />} path='/create-course' />
        </Routes>
    )
}

export default Users
