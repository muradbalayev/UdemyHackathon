import { Link } from "react-router-dom";

function DropDown() {
  return (
    <div className="h-full w-full bg-white py-8">
      <Link to={'/course-search'} className="nav_btn flex items-center px-3 py-4">Courses</Link>
    </div>
  )
}

export default DropDown