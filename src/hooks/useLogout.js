import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { clearTokens } from "../redux/slices/authSlice";
import { clearUser } from "../redux/slices/userSlice";

const useLogout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const logout = async (e) => {
    e.preventDefault()
    dispatch(clearTokens());
    localStorage.removeItem("refreshToken");
    toast.success(`${user.firstname} logged out successfully.`);
    localStorage.removeItem("username");
    dispatch(clearUser());
    navigate("/");
  };


  return logout;
};

export default useLogout;