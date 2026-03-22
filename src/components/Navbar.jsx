import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Courses', path: '/courses' },
  { label: 'News', path: '/news' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
  { label: 'Partners', path: '/partners' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="bg-blue-950 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo / Institute Name */}
        <Link to="/" className="text-xl font-bold tracking-wide text-white">
          Kitgum Institute of Health Sciences 
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-amber-400 ${
                  location.pathname === link.path ? 'text-amber-400 border-b-2 border-amber-400 pb-1' : 'text-gray-200'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Apply Button — desktop */}
        <Link
          to="/apply"
          className="hidden md:inline-block bg-amber-500 hover:bg-amber-400 text-blue-950 font-semibold text-sm px-5 py-2 rounded-md transition-colors"
        >
          Apply Now
        </Link>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-900 px-6 pb-6 flex flex-col gap-4">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium transition-colors hover:text-amber-400 ${
                location.pathname === link.path ? 'text-amber-400' : 'text-gray-200'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/apply"
            onClick={() => setMenuOpen(false)}
            className="bg-amber-500 hover:bg-amber-400 text-blue-950 font-semibold text-sm px-5 py-2 rounded-md text-center transition-colors"
          >
            Apply Now
          </Link>
        </div>
      )}
    </nav>
  )
}
