import Nav from '../../../components/Nav'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div>
            <Nav />
            <div className="p-8">
                <Link to='/create-course' className="font-bold btn px-4 py-2 bg-[#00FF84]"> Create Course</Link>
            </div>

        </div>
    )
}

export default HomePage
