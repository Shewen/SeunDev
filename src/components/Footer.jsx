import {
  FiGithub,
  FiLinkedin,
  FiArrowUpRight,
} from 'react-icons/fi'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-white">

      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10">

        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">

          {/* Logo */}
          <div>
            <a
              href="/"
              className="text-2xl font-bold tracking-tight text-slate-950"
            >
              Seun<span className="text-blue-600">.</span>
            </a>

            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
              Frontend developer building modern websites and
              digital experiences.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">

            <a
              href="/about"
              className="text-sm font-medium text-slate-500 transition hover:text-slate-950"
            >
              About
            </a>

            <a
              href="/projects"
              className="text-sm font-medium text-slate-500 transition hover:text-slate-950"
            >
              Projects
            </a>

            <a
              href="/services"
              className="text-sm font-medium text-slate-500 transition hover:text-slate-950"
            >
              Services
            </a>

            <a
              href="/contact"
              className="group flex items-center gap-1 text-sm font-medium text-slate-500 transition hover:text-blue-600"
            >
              Contact
              <FiArrowUpRight size={14} />
            </a>

          </div>

        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-sm text-slate-400">
            © {year} Seun Jeremiah. All rights reserved.
          </p>

          <div className="flex items-center gap-4">

            <a
              href="https://github.com/Shewen"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-400 transition hover:text-slate-950"
            >
              <FiGithub size={19} />
            </a>

            <a
              href="https://www.linkedin.com/in/oguntide-seun-3a55b0143/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 transition hover:text-blue-600"
            >
              <FiLinkedin size={19} />
            </a>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer