import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/programs', label: 'Programs' },
  { to: '/blog', label: 'Blog' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[color:rgb(27,27,27,0.7)] bg-[color:rgb(27,27,27,0.75)] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg" style={{ background: 'linear-gradient(135deg, #CBB26A, #C7AE6A)' }} />
          <span className="text-[color:var(--text)] font-semibold tracking-tight group-hover:text-[color:var(--brand-gold)] transition-colors">Enabler Consultancy</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-[color:var(--brand-gold)]' : 'text-slate-200 hover:text-white'}`}
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="ml-2 inline-flex items-center px-4 py-2 rounded-lg text-slate-900 font-semibold shadow hover:shadow-lg transition-all"
            style={{ background: 'linear-gradient(90deg, #CBB26A, #C7AE6A)' }}
          >
            Book a Call
          </Link>
        </nav>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10" style={{ background: 'rgba(27,27,27,0.95)' }}>
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `block px-3 py-2 rounded-lg ${isActive ? 'bg-white/10 text-[color:var(--brand-gold)]' : 'text-slate-200 hover:bg-white/5'}`}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block mt-2 px-3 py-2 rounded-lg text-slate-900 font-semibold text-center"
              style={{ background: 'linear-gradient(90deg, #CBB26A, #C7AE6A)' }}
            >
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
