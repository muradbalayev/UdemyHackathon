import { useState } from "react"

function AskedQuest() {
  const [activeQuest, setActiveQuest] = useState('');

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>

        <ul className="space-y-4">
          <li className="flex items-center justify-between">
            <a href="#" className="text-lg font-medium">What is Skillshare?</a>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </li>
          <li className="flex items-center justify-between">
            <a href="#" className="text-lg font-medium">What is included in my Skillshare membership?</a>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </li>
          <li className="flex items-center justify-between">
            <a href="#" className="text-lg font-medium">What can I learn from Skillshare?</a>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </li>
          <li className="flex items-center justify-between">
            <a href="#" className="text-lg font-medium">What happens after my trial is over?</a>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </li>
          <li className="flex items-center justify-between">
            <a href="#" className="text-lg font-medium">Can I teach on Skillshare?</a>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </li>
        </ul>
      </div>
    </>
  )
}

export default AskedQuest