import { useState } from 'react';
import { Link } from 'react-router-dom';

const CreateCourse = () => {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    language: 'Azerbaijan', // Default to Azerbaijan
    keys: '',
    image: null, // Add image field for course image
  });

  const [loading, setLoading] = useState(false); // State to track loading
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
      image: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading state
    setError(null); // Clear any previous errors

    // Prepare FormData to send including the image file
    const courseData = new FormData();
    courseData.append('title', formData.title);
    courseData.append('price', formData.price);
    courseData.append('description', formData.description);
    courseData.append('language', formData.language);
    
    // Convert keys from string to array (split by comma) upon form submission
    const keysArray = formData.keys.split(',').map((key) => key.trim()).filter(Boolean);
    courseData.append('keys', JSON.stringify(keysArray)); // Convert array to string
    if (formData.image) {
      courseData.append('image', formData.image);
    }

    try {
      const response = await fetch('http://192.168.8.119:3000/api/create-course', {
        method: 'POST',
        body: courseData, // FormData object
      });

      if (!response.ok) {
        throw new Error('Failed to create course');
      }

      const result = await response.json();
      console.log('Course created successfully:', result);
      // Handle success (e.g., show success message, reset form)
      setFormData({
        title: '',
        price: '',
        description: '',
        language: 'Azerbaijan',
        keys: '',
        image: null,
      });
    } catch (err) {
      setError(err.message); // Set error message
      console.error(err);
    } finally {
      setLoading(false); // End loading state
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
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="English">English</option>
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

          {/* Image Upload */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2" htmlFor="image">Course Image</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>

          {/* Error Message */}
          {error && <div className="text-red-500 mb-4">{error}</div>}

          {/* Loading Indicator */}
          {loading ? (
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
