function CreativeLearning() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-8">Creative Learning Made Easy</h1>

      <ul className="list-disc space-y-4 flex flex-col items-center mb-20 mt-10">
        <li className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span className="ml-2">Taught by creative pros and industry icons</span>
        </li>
        <li className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span className="ml-2">Learning Paths to help you achieve your goals</span>
        </li>
        <li className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span className="ml-2">Certificates to celebrate your accomplishments</span>
        </li>
      </ul>

      <div className="grid grid-cols-4 gap-4 mt-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold">25K+</h2>
          <p>Classes</p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold">600K+</h2>
          <p>Members</p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold">8K+</h2>
          <p>Teachers</p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold">4.8 ★★★★★</h2>
          <p>App Store Rating</p>
        </div>
      </div>
    </>
  )
}

export default CreativeLearning