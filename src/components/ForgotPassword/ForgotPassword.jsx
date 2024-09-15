import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
// import translations from "../translations.json";
// import { LanguageContext } from "../context/languageContext";
// import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useState } from "react";
import OtpForgotPassword from "./OtpForgetPassword";

const ForgotPassword = ({ isOpen, onClose }) => {
  //   const { language } = useContext(LanguageContext);
  const [otpForgetPassModalShow, setOtpForgetPassModalShow] = useState(false);


  const [formData, setFormData] = useState({
    email: "",
  });

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
      // Send data to backend
      const response = await fetch("http://192.168.8.119:3000/api/users/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        // toast.success(translations[language]["thanks"]);
        onClose();
        setTimeout(() => {
          setOtpForgetPassModalShow(true);
        }, 300); // Close modal on success
      } else {
        toast.error(data.error ||
          'error'
          // translations[language]["errorSubmittingForm"]
        );
      }
    } catch (err) {
      // Handle request error
      console.error("Request error:", err);
      if ('data' in err) {
        toast.error(err.data.message);
      } else {
        toast.error('Error verifying OTP');
      }
      //   toast.error(translations[language]["errorSubmittingForm"]);
    }
  };

  return (
    <>
      <Modal open={isOpen} onClose={onClose} center>
        <div className="md:p-12 sm:p-8 p-4 bg-gradient-to-br from-[#f3f4f50f] to-[#54be9539]">
          <div className="text-center my-6 md:mb-0">
            <h1 className="text-3xl font-bold">Forgot Password</h1>
            <div className="mt-8">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center md:gap-4"
              >
                <input
                  type="email"
                  name="email"
                  required
                  // placeholder={translations[language]["password"]}
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-3 rounded text-sm border border-gray-300 focus:outline-none focus:border-green-400 mb-4 md:mb-0 md:mr-4 w-72"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#00FF84] font-bold rounded hover:bg-[#45ed7a] transition-all md:w-40 sm:w-36 w-32"
                >
                  Send OTP
                  {/* {translations[language]["subscribe"]} */}
                </button>
              </form>
            </div>
          </div>
        </div>
      </Modal>
      <OtpForgotPassword isOpen={otpForgetPassModalShow} onClose={() => setOtpForgetPassModalShow(false)} />

    </>
  );
};

export default ForgotPassword;
