import Nav from '../../../components/Nav'
import { Link } from 'react-router-dom'
import LearnFrom from './LearnFrom'
import WhyLowe from './WhyLowe'
import AskedQuest from './AskedQuest'
import Footer from './Footer'
import CreativeLearning from './CreativeLearning'

const HomePage = () => {
  return (
    <div>
      <Nav />
      <div className="p-8">
        <Link to='/create-course' className="font-bold btn px-4 py-2 bg-[#00FF84]"> Create Course</Link>
      </div>
      <div className="container mx-auto pt-8">
        < LearnFrom />
        <CreativeLearning />
        {/* <div className="text-center mt-8">
          <h2 className="text-2xl font-bold">Explore Inspiring Online Courses</h2>
        </div> */}
        <WhyLowe />
        <AskedQuest />
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
