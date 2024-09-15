import { FaCheck } from "react-icons/fa6";

function CreativeLearning() {
  return (
    <div className="w-full mt-16 flex flex-col items-center">
      <div className="w-full flex md:flex-row flex-col mx-auto justify-around">
      <h1 className="text-6xl font-bold mb-8 md:max-w-72 w-full md:text-left text-center">Creative Learning Made Easy</h1>
      <ul className="list-disc gap-4 flex flex-col px-4 items-start mb-20 mt-10">
        <li className="flex items-center">
         <FaCheck size={32} color="black" className="bg-[#00FF84] rounded-full p-2"/>
          <span className="ml-2 md:text-2xl text-xl">Taught by creative pros and industry icons</span>
        </li>
        <li className="flex items-center">
        <FaCheck size={32} color="black" className="bg-[#00FF84] rounded-full p-2"/>
          <span className="ml-2 md:text-2xl text-xl">Learning Paths to help you achieve your goals</span>
        </li>
        <li className="flex items-center">
        <FaCheck size={32} color="black" className="bg-[#00FF84] rounded-full p-2"/>
          <span className="ml-2 md:text-2xl text-xl">Certificates to celebrate your accomplishments</span>
        </li>
      </ul>
      </div>

      <div className="grid w-full lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 mt-8 px-16">
        <div className="text-center bg-[#232424] rounded py-4 px-6">
          <h2 className="text-4xl font-bold text-[#00FF84]">25K+</h2>
          <p className="text-2xl">Classes</p>
        </div>
        <div className="text-center bg-[#232424] rounded py-4 px-6">
          <h2 className="text-4xl font-bold text-[#00FF84]">600K+</h2>
          <p className="text-2xl">Members</p>
        </div>
        <div className="text-center bg-[#232424] rounded py-4 px-6">
          <h2 className="text-4xl font-bold text-[#00FF84]">8K+</h2>
          <p className="text-2xl">Teachers</p>
        </div>
        <div className="text-center bg-[#232424] rounded py-4 px-6 flex items-center flex-col">
          <h2 className="text-4xl font-bold text-[#00FF84] flex items-center gap-2">4.8 
            <span className="text-2xl">
            ★★★★★
            </span>
            </h2>
          <p className="text-2xl">App Store Rating</p>
        </div>
      </div>
    </div>
  )
}

export default CreativeLearning