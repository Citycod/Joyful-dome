import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const { user, logout } = useAuth()
  const location = useLocation()

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/browse-services', label: 'Services' },
    { to: '/categories', label: 'Categories' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen)

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link to="/" className="flex items-center gap-3">
          <img src="/assets/images/joydome.png" alt="JoyDome Logo" className="h-10 w-10 rounded-full object-cover" />
          <span className="text-lg font-extrabold text-gray-900">
            Joy<span className="text-primary-blue">Dome</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-base font-semibold text-gray-800">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`hover:text-primary-blue transition ${location.pathname === link.to ? 'text-primary-blue' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-5">
          {user ? (
            <>
              <span className="text-sm font-semibold">{user.name}</span>
              <Link to="/dashboard" className="btn btn-ghost">Dashboard</Link>
              <button onClick={logout} className="btn btn-primary">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-primary">Sign in</Link>
              <Link to="/signup" className="border-2 border-primary-blue text-primary-blue px-5 py-2 rounded-full text-sm font-bold hover:bg-primary-blue hover:text-white transition">
                Join
              </Link>
            </>
          )}
        </div>

        <button onClick={toggleMobileMenu} className="md:hidden p-2 rounded-md hover:bg-gray-100" aria-label="Toggle menu">
          {isMobileOpen ? <FaTimes className="h-6 w-6 text-gray-800" /> : <FaBars className="h-6 w-6 text-gray-800" />}
        </button>
      </div>

      {isMobileOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="container mx-auto py-3 grid gap-3 text-base font-semibold text-gray-800">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className="py-2 hover:text-primary-blue transition" onClick={toggleMobileMenu}>
                {link.label}
              </Link>
            ))}
            <div className="relative mt-3">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 w-full focus:outline-none focus:ring-2 focus:ring-primary-blue"
              />
              <i className="fas fa-search absolute left-3 top-2.5 h-4 w-4 text-gray-500"></i>
            </div>
            <div className="flex gap-3 pt-4">
              {user ? (
                <>
                  <Link to="/dashboard" className="flex-1 text-center bg-primary-blue text-white py-2 rounded-full font-bold text-sm hover:bg-primary-dark transition" onClick={toggleMobileMenu}>
                    Dashboard
                  </Link>
                  <button onClick={() => { logout(); toggleMobileMenu(); }} className="flex-1 text-center bg-red-600 text-white py-2 rounded-full font-bold text-sm hover:bg-red-700 transition">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="flex-1 text-center bg-primary-blue text-white py-2 rounded-full font-bold text-sm hover:bg-primary-dark transition" onClick={toggleMobileMenu}>
                    Sign in
                  </Link>
                  <Link to="/signup" className="flex-1 text-center border-2 border-primary-blue text-primary-blue py-2 rounded-full font-bold text-sm hover:bg-primary-blue hover:text-white transition" onClick={toggleMobileMenu}>
                    Join
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header