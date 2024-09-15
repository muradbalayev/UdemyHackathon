import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import toast from "react-hot-toast";
import { useState } from "react";
import { useVerifyOtpMutation } from "../redux/services/verifyOtpApi";

const VerifyOtp = ({ isOpen, onClose, email, phone }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    secondname: "",
    birthDate: "",
    password: "",
    otp: "",
  });

  const [verifyOtp, { isLoading }] = useVerifyOtpMutation(); // Use the hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Combine OTP with email and phone data for verification
      const dataToSend = { ...formData, email, phone };
      console.log(dataToSend)
      await verifyOtp(dataToSend).unwrap();

      toast.success("OTP verified successfully!");
      onClose(); // Close modal on success

    } catch (err) {
      console.error("Request error:", err);
      if ('data' in err) {
        toast.error(err.data.message);
      } else {
        toast.error('Error verifying OTP');
      }
    }
  };

  return (
    <Modal open={isOpen} onClose={onClose} center>
      <div className="md:p-12 sm:p-8 p-4 bg-gradient-to-br from-[#f3f4f50f] to-[#54be9539]">
        <div className="text-center my-6 md:mb-0">
          <h1 className="text-3xl font-bold">Verify OTP</h1>
          <div className="mt-8">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center md:gap-4"
            >
              <input
                type="text"
                name="firstname"
                required
                placeholder="First Name"
                value={formData.firstname}
                onChange={handleChange}
                className="p-3 rounded text-sm border border-gray-300 focus:outline-none focus:border-green-400 mb-4 md:mb-0 md:mr-4 w-72"
              />
              <input
                type="text"
                name="secondname"
                required
                placeholder="Second Name"
                value={formData.secondname}
                onChange={handleChange}
                className="p-3 rounded text-sm border border-gray-300 focus:outline-none focus:border-green-400 mb-4 md:mb-0 md:mr-4 w-72"
              />
              <input
                type="date"
                name="birthDate"
                required
                placeholder="Birth Date"
                value={formData.birthDate}
                onChange={handleChange}
                className="p-3 rounded text-sm border border-gray-300 focus:outline-none focus:border-green-400 mb-4 md:mb-0 md:mr-4 w-72"
              />
              <select
                value={formData.gender || "Select Gender"}
                onChange={handleChange}
                name="gender"
                className="py-3 rounded text-sm px-2 border border-gray-300 focus:border-green-400 outline-none mb-4 md:mb-0 md:mr-4 w-72"
              >
                <option disabled>Select Gender</option>
                <option value={'man'}>Male</option>
                <option value={'woman'}>Female</option>
              </select>
              <input
                type="password"
                name="password"
                required
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="p-3 rounded text-sm border border-gray-300 focus:outline-none focus:border-green-400 mb-4 md:mb-0 md:mr-4 w-72"
              />
              <input
                type="text"
                name="otp"
                required
                placeholder="OTP"
                value={formData.otp}
                onChange={handleChange}
                className="p-3 rounded text-sm border border-gray-300 focus:outline-none focus:border-green-400 mb-4 md:mb-0 md:mr-4 w-72"
              />
              <button
                type="submit"
                className={`px-4 py-2 font-bold rounded md:w-40 sm:w-36 w-32 ${isLoading ? 'bg-gray-400' : 'bg-[#00FF84] hover:bg-[#45ed7a] transition-all'}`}
                disabled={isLoading}
              >
                {isLoading ? 'Verifying...' : 'Verify OTP'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default VerifyOtp;
