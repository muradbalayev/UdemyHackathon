import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCreateCourseMutation } from '../../redux/services/courseApi';

const CreateCourse = () => {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    language: 'az', // Default to Azerbaijan
    keys: '',
    photo: null, // Add image field for course image
  });

  const [createCourse, { isLoading }] = useCreateCourseMutation(); // Use mutation hook
  const [error, setError] = useState(null); // State to track error

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      photo: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
  
    // Prepare FormData to send including the image file
    const courseData = new FormData();
    courseData.append('title', formData.title);
    courseData.append('price', formData.price);
    courseData.append('description', formData.description);
    courseData.append('language', formData.language);
  
    const keysArray = formData.keys.split(',').map((key) => key.trim()).filter(Boolean);
    courseData.append('keys', JSON.stringify(keysArray));
  
    if (formData.photo) {
      courseData.append('photo', formData.photo); // Ensure the field name matches what the backend expects
    }
  
    // Log FormData contents for debugging
    for (let [key, value] of courseData.entries()) {
      console.log(`${key}:`, value);
    }
  
    try {
      await createCourse(courseData).unwrap();
      console.log('Course created successfully');
      setFormData({
        title: '',
        price: '',
        description: '',
        language: 'az',
        keys: '',
        photo: null,
      });
    } catch (err) {
      setError(err.data?.message || 'Failed to create course');
      console.error(err);
    }
  };


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-md p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Course Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Price */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Language Selection */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="language">Language</label>
            <select
              id="language"
              name="language"
              value={formData.language}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="az">az</option>
              <option value="en">en</option>
            </select>
          </div>

          {/* Keys */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="keys">Keys</label>
            <input
              type="text"
              id="keys"
              name="keys"
              value={formData.keys}
              onChange={handleInputChange}
              placeholder="Enter keys, e.g., frontend, backend"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* photo Upload */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2" htmlFor="photo">Course photo</label>
            <input
              type="file"
              id="photo"
              name="photo"
              accept="photo/*"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>

          {/* Error Message */}
          {error && <div className="text-red-500 mb-4">{error}</div>}

          {/* Loading Indicator */}
          {isLoading ? (
            <div className="text-center text-blue-500">Submitting...</div>
          ) : (
            <div className="text-center flex justify-between">
                <Link to={'/'}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-md transition-colors"
                >
                Cancel
                </Link>
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-md transition-colors"
              >
                Submit
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreateCourse;
