function Footer() {
  return (
      <footer className="w-full bg-gray-900 text-gray-400 py-8">
        <div className="px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-bold mb-4">Company</h3>
              <ul>
                <li><a href="#" className="hover:text-gray-300">About</a></li>
                <li><a href="#" className="hover:text-gray-300">Careers</a></li>
                <li><a href="#" className="hover:text-gray-300">Press</a></li>
                <li><a href="#" className="hover:text-gray-300">Blog</a></li>
                <li><a href="#" className="hover:text-gray-300">Affiliate Program</a></li>
                <li><a href="#" className="hover:text-gray-300">Partnerships</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Community</h3>
              <ul>
                <li><a href="#" className="hover:text-gray-300">Terms</a></li>
                <li><a href="#" className="hover:text-gray-300">Gift Membership Cards</a></li>
                <li><a href="#" className="hover:text-gray-300">Corporate Gift Cards</a></li>
                <li><a href="#" className="hover:text-gray-300">Scholarships</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Teaching</h3>
              <ul>
                <li><a href="#" className="hover:text-gray-300">Become a Teacher</a></li>
                <li><a href="#" className="hover:text-gray-300">Teacher Help Center</a></li>
                <li><a href="#" className="hover:text-gray-300">Teacher Rules & Requirements</a></li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <ul className="flex space-x-2 mt-4">
              <li><a href="#" className="hover:text-gray-300">Help</a></li>
              <li><a href="#" className="hover:text-gray-300">Privacy</a></li>
              <li><a href="#" className="hover:text-gray-300">Terms</a></li>
              <li><a href="#" className="hover:text-gray-300">Your Privacy Choices</a></li>
              <li><a href="#" className="hover:text-gray-300">Notice to CA Residents</a></li>
            </ul>

          </div>
        </div>
      </footer>
  )
}

export default Footer;