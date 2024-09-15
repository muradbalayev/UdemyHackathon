import { useState } from 'react';
import { useGetInstructorQuery } from "../../../redux/services/instructorApi";
import image from '../../../assets/images.png';
import { useSelector } from "react-redux";

// Modal Component
const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
            aria-label="Close"
          >
            &times;
          </button>
          <h2 className="text-2xl font-bold mb-4">Upload Video</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="videoTitle">Video Title</label>
              <input
                type="text"
                id="videoTitle"
                name="videoTitle"
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="videoFile">Video File</label>
              <input
                type="file"
                id="videoFile"
                name="videoFile"
                accept="video/*"
                className="w-full"
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
function InstructorPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data } = useGetInstructorQuery(undefined, {
    pollingInterval: 10000, // Re-fetch every 10 seconds
  });

  const { user } = useSelector(state => state.user);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
          <h1 className="text-2xl font-bold mb-2">{user?.firstname + ' ' + user?.secondname}</h1>
          <h2 className="text-xl text-red-500 mb-4">UI Designer</h2>
          <p className="text-gray-600 mb-4 text-center">
            Im looking for a site that will simplify the planning of my business trips.
          </p>
        </div>
        <div className="flex flex-col items-center">
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
        {data && data?.instructor.courses.map((course) => (
          <div key={course._id} className="bg-white p-6 rounded-lg shadow-md max-h-96">
            <div className="flex w-full justify-between items-center mb-3 pb-3 border-b">
              <h2 className="text-xl font-bold mb-2">Course</h2>
              <button
                onClick={handleOpenModal}
                className="btn px-3 py-2 border bg-blue-600 text-white rounded-lg"
              >
                Create Video
              </button>
            </div>

            <img src={image} alt="Course" />
            <p className="mt-2 flex items-center gap-2">
              <span className="font-medium text-lg">Title:</span> {course.title}
            </p>
            <p className="mt-2 flex items-center gap-2">
              <span className="font-medium text-lg">Language:</span> {course.language}
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default InstructorPage;
