import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import CreateCourse from "./CreateCourse";
import { clearTokens, setTokens } from "../../redux/slices/authSlice";
import { clearUser, setUser } from "../../redux/slices/userSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ProtectedRoute from "./ProtectedUserRoute";
import VideoPage from "./VideoPage/VideoPage";
import CategorySearchPage from "./CategorySearchPage/CategorySearchPage";

const Users = () => {
  return (
    <AuthInitializer>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<VideoPage />} path='/course/video' />
          <Route path="/create-course" element={<CreateCourse />} />
          <Route path='/category-search' element={<CategorySearchPage />} />
        </Route>
      </Routes>
    </AuthInitializer>
  );
};

function AuthInitializer({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      dispatch(setUser(storedUsername));
    }
  }, [dispatch]);

  useEffect(() => {
    const initializeAuth = async () => {
      const refreshToken = localStorage.getItem("refreshToken")

      if (refreshToken) {
        try {
          const response = await fetch(
            `http://192.168.8.119:3000/api/users/auth/refresh-token`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ token: refreshToken }),
            }
          );

          if (response.ok) {
            const data = await response.json();
            console.log(data)
            const { accessToken } = data;

            dispatch(setTokens({ accessToken, refreshToken }));
          } else {
            console.log("Token refresh failed:", response.statusText);
            dispatch(clearTokens());
            dispatch(clearUser());
            localStorage.removeItem("refreshToken");
            localStorage.removeItem("username");
            navigate("/"); // Redirect to login page
          }
        } catch (error) {
          console.log("Token refresh failed:", error);
          dispatch(clearTokens());
          dispatch(clearUser());
          localStorage.removeItem("refreshToken");
          localStorage.removeItem("username");
          navigate("/"); // Redirect to login page
        }
      } else {
        console.log("No refresh token found.");
        dispatch(clearTokens());
        dispatch(clearUser());
        navigate("/"); // Redirect to login page
      }

      setLoading(false);
    };

    initializeAuth();
  }, [dispatch, navigate]);

  if (loading) {
    return (
      <div className="loader-container w-full flex justify-center items-center min-h-screen gap-3">
        Loading...
      </div>
    );
  }

  return children;
}

export default Users;
