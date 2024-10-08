import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import toast from "react-hot-toast";
import { useState } from "react";
import VerifyOtp from "./VerifyOtp";
import { useSendOtpMutation } from "../redux/services/registerApi";

const RegisterModal = ({ isOpen, onClose }) => {
  const [verifyModalShow, setVerifyModalShow] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    wantsMessages: false,
  });

  const [sendOtp, { isLoading }] = useSendOtpMutation(); // Use the hook

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Use the mutation hook to send OTP
      await sendOtp(formData).unwrap();
  
      toast.success("Thanks for signing up!");
      onClose(); // Close RegisterModal
      setTimeout(() => {
        setVerifyModalShow(true); // Open VerifyOtp modal after RegisterModal closes
      }, 300); // Optional small delay for smooth transition
  
    } catch (err) {
      console.error("Request error:", err);if ('data' in err) {
        toast.error(err.data.message);
      } else {
        toast.error('Error verifying OTP');
      }
    }
  };

  return (
    <>
      <Modal open={isOpen} onClose={onClose} center>
        <div className="md:p-12 sm:p-8 p-4 bg-gradient-to-br from-[#f3f4f50f] to-[#54be9539]">
          <div className="text-center my-6 md:mb-0">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <div className="mt-8">
              <form onSubmit={handleSubmit} className="flex flex-col items-center md:gap-4">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-3 rounded text-sm border border-gray-300 focus:outline-none focus:border-green-400 mb-4 w-72"
                />
                <input
                  type="text"
                  name="phone"
                  required
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="p-3 rounded text-sm border border-gray-300 focus:outline-none focus:border-green-400 mb-4 w-72"
                />
                <div className="flex justify-start w-full gap-2 items-center mb-5 ps-2">
                  <input
                    type="checkbox"
                    name="wantsMessages"
                    checked={formData.wantsMessages}
                    onChange={handleChange}
                  />
                  <p className="text-gray text-xs">Want to be notified of notifications?</p>
                </div>
                <button 
                  type="submit" 
                  className={`px-4 py-2 font-bold rounded md:w-40 ${isLoading ? 'bg-gray-400' : 'bg-[#00FF84] hover:bg-[#45ed7a] transition-all'}`}
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing Up...' : 'Sign Up'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </Modal>

      {/* VerifyOtp Modal */}
      <VerifyOtp 
        isOpen={verifyModalShow} 
        onClose={() => setVerifyModalShow(false)} 
        email={formData.email} 
        phone={formData.phone} 
      />
    </>
  );
};

export default RegisterModal;
