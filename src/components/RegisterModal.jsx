import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
// import translations from "../translations.json";
// import { LanguageContext } from "../context/languageContext";
// import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useState } from "react";

const RegisterModal = ({ isOpen, onClose }) => {
//   const { language } = useContext(LanguageContext);

  const [formData, setFormData] = useState({
    email: "",
    wantsMessages: false,
  });

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
      // Send data to backend
      const response = await fetch("http://localhost:5000/api/subscribers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        // toast.success(translations[language]["thanks"]);
        toast.success("Thanks for signing up!");
        onClose(); // Close modal on success
      } else {
        toast.error(data.error || 
            'error'
            // translations[language]["errorSubmittingForm"]
        );
      }
    } catch (err) {
      // Handle request error
      console.error("Request error:", err);
    //   toast.error(translations[language]["errorSubmittingForm"]);
    }
  };

  return (
    <Modal open={isOpen} onClose={onClose} center>
      <div className="md:p-12 sm:p-8 p-4 bg-gradient-to-br from-[#f3f4f50f] to-[#54be9539]">
        <div className="text-center my-6 md:mb-0">
            <h1 className="text-3xl font-bold">Sign Up</h1>
          <div className="mt-8">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center md:gap-4"
            >
              <input
                type="email"
                name="email"
                required
                // placeholder={translations[language]["email"]}
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="p-3 rounded text-sm border border-gray-300 focus:outline-none focus:border-green-400 mb-4 md:mb-0 md:mr-4 w-72"
              />
              <div className="flex justify-start w-full gap-2 items-center mb-5 ps-2">
                <input
                  type="checkbox"
                  name="wantsMessages"
                  checked={formData.wantsMessages}
                  onChange={handleChange}
                />
                <p className="text-gray text-xs">
                Want to be notified of notifications?
                  {/* {translations[language]["notification"]} */}
                </p>
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-[#00FF84] font-bold rounded hover:bg-[#45ed7a] transition-all md:w-40 sm:w-36 w-32"
              >
                Sign Up
                {/* {translations[language]["subscribe"]} */}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default RegisterModal;
