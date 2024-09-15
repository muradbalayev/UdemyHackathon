import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { accessToken } = useSelector(state => state.auth);
  const sessionToken = localStorage.getItem("refreshToken");

  // Check if there is a valid token
  return accessToken || sessionToken ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
