import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/assets/images/joydome.png" alt="JoyDome Logo" className="h-10 w-10 rounded-xl" />
              <span className="text-sm font-semibold text-white">
                Joy <span className="text-primary-blue">Dome</span>
              </span>
            </div>
            <p className="text-sm">Connecting Nigerians with trusted services like catering, plumbing, and more.</p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition">
                <i className="fab fa-facebook-f h-4 w-4 text-white"></i>
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition">
                <i className="fab fa-instagram h-4 w-4 text-white"></i>
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition">
                <i className="fab fa-twitter h-4 w-4 text-white"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/browse-services" className="hover:text-white transition">Services</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/help-center" className="hover:text-white transition">Help Center</Link></li>
              <li><Link to="/faq" className="hover:text-white transition">FAQs</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: oluwayinkaogunbodebiz@gmail.com</li>
              <li>Phone: +234 8140728174</li>
              <li>Lagos, Nigeria</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 Joy <span className="text-primary-blue">Dome</span>. All rights reserved.</p>
          <span className="flex">
            Made By <a href="https://www.instagram.com/uplixdev/p/DLj99gysL7g/" target="_blank" rel="noopener noreferrer" className="text-primary-blue">Uplix</a>
          </span>
          <div className="flex gap-6 mt-4 md:mt-0 text-sm">
            <Link to="/terms" className="hover:text-white">Terms</Link>
            <Link to="/privacy-policy" className="hover:text-white">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer