import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi'
import resume from "../assets/resume/Oguntide_Seun_Jeremiah_Resume.pdf";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-[9999] w-full bg-white/95 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* Logo */}
        <NavLink
          to="/"
          onClick={() => setIsOpen(false)}
          className="relative z-[10000] text-2xl font-bold tracking-tight text-slate-950"
        >
          SeunDev<span className="text-blue-600">.</span>
        </NavLink>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">

          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-blue-600'
                    : 'text-slate-600 hover:text-slate-950'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            Hire Me
            <FiArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </NavLink>
          <a
  href={resume}
  download="Oguntide_Seun_Jeremiah_Resume.pdf"
  className="text-sm font-semibold text-slate-600 transition hover:text-blue-600"
>
  Resume
</a>
        </div>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="relative z-[10000] flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-950 md:hidden"
        >
          {isOpen ? <FiX size={21} /> : <FiMenu size={21} />}
        </button>

      </nav>

      {/* Mobile menu */}
      <div
        className={`absolute left-0 top-20 w-full border-t border-slate-200 bg-white shadow-lg transition-all duration-300 md:hidden ${
          isOpen
            ? 'visible translate-y-0 opacity-100'
            : 'invisible -translate-y-3 opacity-0'
        }`}
      >
        <div className="px-5 py-5 sm:px-8">

          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block border-b border-slate-100 py-4 text-base font-medium ${
                  isActive
                    ? 'text-blue-600'
                    : 'text-slate-700'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-5 flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white"
          >
            Hire Me
            <FiArrowUpRight size={17} />
          </NavLink>
           <a
  href={resume}
  download="Oguntide_Seun_Jeremiah_Resume.pdf"
  onClick={() => setIsOpen(false)}
  className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:border-slate-950 hover:bg-slate-950 hover:text-white"
>
  Download Resume
  <FiArrowUpRight size={17} />
</a>
        </div>
      </div>

    </header>
  )
}

export default Navbar