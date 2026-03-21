import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { COLORS, TYPOGRAPHY, BUTTONS, LAYOUT } from '../constants'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Courses', path: '/courses' },
  { label: 'News', path: '/news' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className={`${COLORS.primaryDarkBg} ${COLORS.textInverted} shadow-md sticky top-0 z-50`}>
      <div className={`${LAYOUT.container} px-6 py-4 flex items-center justify-between`}>

        {/* Logo / Institute Name */}
        <Link to="/" className={`text-xl font-bold tracking-wide ${COLORS.textInverted}`}>
          Kitgum Institute of Health Sciences
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`${TYPOGRAPHY.label} transition-colors hover:text-accent ${
                  location.pathname === link.path
                    ? 'text-accent border-b-2 border-accent pb-1'
                    : 'text-gray-200'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Apply Button — desktop */}
        <Link to="/apply" className={`hidden md:inline-block ${BUTTONS.primary}`}>
          Apply Now
        </Link>

        {/* Mobile menu toggle */}
        <button
          className={`md:hidden ${COLORS.textInverted}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`md:hidden ${COLORS.primaryBg} px-6 pb-6 flex flex-col gap-4`}>
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`${TYPOGRAPHY.label} transition-colors hover:text-accent ${
                location.pathname === link.path ? 'text-accent' : 'text-gray-200'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/apply"
            onClick={() => setMenuOpen(false)}
            className={`${BUTTONS.primary} text-center`}
          >
            Apply Now
          </Link>
        </div>
      )}
    </nav>
  )
}
```

Check your browser and let me know if it looks right now!

---
```
git add .
git commit -m "fix: update constants and Navbar to use Tailwind v4 theme utility classes"