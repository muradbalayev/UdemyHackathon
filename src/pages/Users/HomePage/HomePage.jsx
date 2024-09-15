import { Link } from 'react-router-dom'
import AskedQuest from './AskedQuest'
import Footer from './Footer'
import CreativeLearning from './CreativeLearning'
import LearnFrom from './LearnFrom/LearnFrom'

const HomePage = () => {
  return (
    <div>
      
      <div className="mx-auto pt-8 bg-[#000] text-white">
      <div className="p-8">
        <Link to='/create-course' className="font-bold btn px-4 py-2 bg-[#00FF84]"> Create Course</Link>
      </div>
        <CreativeLearning />
        < LearnFrom />
        {/* <div className="text-center mt-8">
          <h2 className="text-2xl font-bold">Explore Inspiring Online Courses</h2>
        </div> */}
        <AskedQuest />
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
