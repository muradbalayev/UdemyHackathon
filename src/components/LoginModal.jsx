import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import toast from "react-hot-toast";
import { useState } from "react";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import { useLoginMutation } from "../redux/services/loginApi"; // Import the hook
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/userSlice";
import { setTokens } from "../redux/slices/authSlice";

const LoginModal = ({ isOpen, onClose }) => {
    const [forgotPassModalShow, setForgotPassModalShow] = useState(false);
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [login, { isLoading }] = useLoginMutation(); // Use the login mutation hook

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
            // Send data to the backend using the login mutation hook
            const data = await login(formData).unwrap();
            // Save full name in local storage
            const { refreshToken, accessToken, user } = data;

            localStorage.setItem('refreshToken', refreshToken);
            localStorage.setItem('user', user);
            dispatch(setUser(user));
            dispatch(setTokens({ accessToken, refreshToken }));
            console.log(user);
            

            toast.success("Thanks for signing in!");
            setFormData({ email: "", password: "" }); // Clear the input fields
            onClose(); // Close modal on success
        } catch (err) {
            // Handle request error
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
                        <h1 className="text-3xl font-bold">Sign In</h1>
                        <div className="mt-8">
                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col items-center md:gap-4"
                            >
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="p-3 rounded text-sm border border-gray-300 focus:outline-none focus:border-green-400 mb-4 md:mb-0 md:mr-4 w-72"
                                />
                                <input
                                    type="password"
                                    name="password"
                                    required
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="p-3 rounded text-sm border border-gray-300 focus:outline-none focus:border-green-400 mb-4 md:mb-0 md:mr-4 w-72"
                                />
                                <div className="flex justify-start w-full ps-2">
                                    <p onClick={() => setForgotPassModalShow(true)} className="text-sm cursor-pointer hover:text-blue-600">Forgot password?</p>
                                </div>
                                <button
                                    type="submit"
                                    className={`px-4 py-2 bg-[#00FF84] font-bold rounded hover:bg-[#45ed7a] transition-all md:w-40 sm:w-36 w-32 ${isLoading ? 'bg-gray-400 cursor-not-allowed' : ''}`}
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Signing In...' : 'Sign In'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </Modal>

            <ForgotPassword isOpen={forgotPassModalShow} onClose={() => setForgotPassModalShow(false)} />
        </>
    );
};

export default LoginModal;
