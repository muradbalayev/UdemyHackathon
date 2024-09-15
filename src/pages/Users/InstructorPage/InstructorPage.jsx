// import { useEffect } from 'react'

import { useGetInstructorQuery } from "../../../redux/services/instructorApi";
import image from '../../../assets/images.png'

// import { useSelector } from 'react-redux';
function InstructorPage() {

    const { data, isLoading, isError, isSuccess, error } = useGetInstructorQuery(undefined, {
        pollingInterval: 10000, // ReFetch every 5 seconds
      });
      console.log(data)


    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 p-6">
        {/* Left Side */}
        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md mb-6 md:mb-0">

          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="rounded-full w-32 h-32 mb-4"
            />
            <h1 className="text-2xl font-bold mb-2">Jill Anderson</h1>
            <h2 className="text-xl text-red-500 mb-4">UI Designer</h2>
            <p className="text-gray-600 mb-4 text-center">
              Im looking for a site that will simplify the planning of my business trips.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-gray-600">
              <strong>Age:</strong> 26
            </p>
            <p className="text-gray-600">
              <strong>Status:</strong> Single
            </p>
            <p className="text-gray-600">
              <strong>Location:</strong> Brooklyn
            </p>
            <p className="text-gray-600">
              <strong>Archetype:</strong> Frequent Flyer
            </p>
          </div>
          <div className="flex justify-around mt-4">
            <span className="bg-red-100 text-red-500 text-xs px-3 py-1 rounded">Organized</span>
            <span className="bg-red-100 text-red-500 text-xs px-3 py-1 rounded">Practical</span>
            <span className="bg-red-100 text-red-500 text-xs px-3 py-1 rounded">Hardworking</span>
          </div>
        </div>
  
        {/* Right Side */}
        <div className="md:w-2/3 grid px-8 grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Bio Card */}
          {data.map((data) => (
          <div key={data._id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">Course</h2>
            <img src={image}/>
            <p className="text-gray-600 mt-2">
              Jill is a Regional Director who travels 4-8 times each month for work. She has a specific region in which she
              travels.
            </p>
          </div>
              
          ))}
          </div>
      </div>
    )
}

export default InstructorPage