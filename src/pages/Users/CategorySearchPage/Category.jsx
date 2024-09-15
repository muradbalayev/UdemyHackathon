function Category({ category: { title, description, createDate, photo, keys } }) {
  // console.log
  const data = new Date(createDate)

  return (
    <div>
      <img src={`http://192.168.8.119:3000/${photo}`} />
      <p className="font-extrabold text-xl">{title}</p>
      <p className="text-xs">{description}</p>
      <p className="text-xs">{`Created at:${data.getDate()}-${data.getMonth() + 1}-${data.getFullYear()}`}</p>
      <p className="text-xs">{keys?.toString()}</p>
    </div>
  )
}

export default Category