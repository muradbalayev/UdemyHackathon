import { useState } from "react";

function CategorySearch() {
  const [formData, setFormData] = useState({
    coureseName: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    //   e.preventDefault();

    //   try {
    //     // Combine OTP with email and phone data for verification
    //     const dataToSend = { ...formData, email, phone };
    //     console.log(dataToSend)
    //     await verifyOtp(dataToSend).unwrap();

    //     toast.success("OTP verified successfully!");
    //     onClose(); // Close modal on success

    //   } catch (err) {
    //     console.error("Request error:", err);
    //     toast.error('Error verifying OTP');
    //   }
  };

  return (
    <div className="mb-8 w-4/5 relative left-1/2 -translate-x-1/2 bg-gradient-to-br ">
      <div className="my-6">
        <div className="mt-8">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:gap-4"
          >
            {/* <select
              value={formData.gender || "Select Gender"}
              onChange={handleChange}
              name="gender"
              className="py-3 rounded text-sm px-2 border border-gray-300 focus:border-green-400 outline-none mb-4 md:mb-0 md:mr-4 w-72"
            >
              <option disabled>Select Gender</option>
              <option value={'man'}>Male</option>
              <option value={'woman'}>Female</option>
            </select> */}
            <input
              type="text"
              name="coureseName"
              required
              placeholder="Course name"
              value={formData.coureseName}
              onChange={handleChange}
              className="p-3 rounded text-sm border border-gray-300 focus:outline-none focus:border-green-400 mb-4 md:mb-0 md:mr-4 w-72"
            />
            {/* <button
              type="submit"
              className={`px-4 py-2 font-bold rounded md:w-40 sm:w-36 w-32 ${isLoading ? 'bg-gray-400' : 'bg-[#00FF84] hover:bg-[#45ed7a] transition-all'}`}
              disabled={isLoading}
            >
              {isLoading ? 'Verifying...' : 'Verify OTP'}
            </button> */}
          </form>
        </div>
      </div>
    </div>
  )
}

export default CategorySearch