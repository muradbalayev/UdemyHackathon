import Category from "./Category"

function CategoryList() {
  const data = [
    {
      "id": "60d0fe4f5311236168a109cb",
      "title": "Introduction to Programming",
      "description": "A comprehensive course on programming basics.",
      "createdAt": "2024-09-01T12:00:00Z",
      "updatedAt": "2024-09-10T15:30:00Z"
    }, {
      "id": "60d0fe4f5311236168a109ca",
      "title": "Introduction to Programming",
      "description": "A comprehensive course on programming basics.",
      "createdAt": "2024-09-01T12:00:00Z",
      "updatedAt": "2024-09-10T15:30:00Z"
    }]
  return (
    <div className="grid grid-cols-4 gap-4 w-4/5 left-1/2 relative -translate-x-1/2">
      {
        data.map(category =>
          <Category title={category.title} description={category.description} key={category.id} createdAt={category.createdAt} />
        )
      }
    </div>
  )
}

export default CategoryList