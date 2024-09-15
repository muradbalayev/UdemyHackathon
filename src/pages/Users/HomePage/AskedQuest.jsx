import { useState } from "react";

function AskedQuest() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    { question: "What is Skillshare?", answer: "Skillshare is an online learning community with thousands of classes for creative and curious people." },
    { question: "What is included in my Skillshare membership?", answer: "A Skillshare membership gives you unlimited access to all of our classes." },
    { question: "What can I learn from Skillshare?", answer: "You can learn creative skills, business skills, and much more." },
    { question: "What happens after my trial is over?", answer: "After your trial, you can continue learning by purchasing a membership." },
    { question: "Can I teach on Skillshare?", answer: "Yes! You can apply to teach classes on Skillshare and share your expertise." },
  ];

  return (
    <>
      <div className="mx-auto px-4 py-8 mt-16">
        <h1 className="text-3xl font-bold text-center mb-8 text-white">Frequently Asked Questions</h1>

        <ul className="space-y-4">
          {questions.map((item, index) => (
            <li key={index} className=" border-gray-700 pb-4">
              <button
                onClick={() => toggleDropdown(index)}
                className="flex items-center justify-between w-full text-lg font-medium focus:outline-none text-left text-white bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors"
              >
                {item.question}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 text-white transition-transform ${openIndex === index ? "transform rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openIndex === index && (
                <p className="mt-4 text-gray-300 bg-gray-900 p-4 rounded-b-lg">
                  {item.answer}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default AskedQuest;
