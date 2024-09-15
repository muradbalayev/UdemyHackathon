function Category({ title, description, createdAt }) {
  const data = new Date(createdAt)
  console.log(data)
  return (
    <div>
      <img src="https://static.skillshare.com/assets/images/loh/marques_brownlee.webp" />
      <p className="font-extrabold">{title}</p>
      <span className="text-sm">{description}</span><br />
      <span className="text-sm">{`Created at:${data.getDate()}-${data.getMonth() + 1}-${data.getFullYear()}`}</span>
    </div>
  )
}

export default Category