import { useEffect, useState } from "react"
import Category from "./Category"
import { useSelector } from "react-redux";

function CategoryList() {
  const [courses, setCourses] = useState([]);
  const { accessToken } = useSelector(state => state.auth);
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`http://192.168.8.119:3000/api/users/courses/`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${accessToken}`
          }
        })
        const data = await response.json();
        setCourses(data.courses);
        console.log(data);
      } catch (error) {
        console.log(error);
        setCourses([]);
      }
    }
    fetchCourses();
  }, [])

  return (
    <div className="grid grid-cols-4 gap-4 w-4/5 left-1/2 relative -translate-x-1/2">
      {
        courses.map(category =>
          <Category title={category.title} description={category.description} key={category.id} createdAt={category.createdAt} />
        )
      }
    </div>
  )
}

export default CategoryList