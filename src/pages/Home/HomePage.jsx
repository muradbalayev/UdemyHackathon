import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <div>
            HomePage
            <Link to={'/create-course'} className="btn px-4 py-2 bg-[#3722d3]"> Create Course</Link>
        </div>
    )
}

export default HomePage
