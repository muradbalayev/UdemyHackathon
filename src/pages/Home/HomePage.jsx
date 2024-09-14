import Nav from "../../components/Nav"
import AskedQuest from "./AskedQuest"
import CreativeLearning from "./CreativeLearning"
import Footer from "./Footer"
import LearnFrom from "./LearnFrom"
import WhyLowe from "./WhyLowe"

const HomePage = () => {
  return (
    <div className="w-full h-full">
      <Nav /><div className="container mx-auto pt-8">
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
