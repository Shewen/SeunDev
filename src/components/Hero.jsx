import { FiArrowUpRight, FiGithub, FiLinkedin } from 'react-icons/fi'
import anibSolesImage from '../assets/anib-soles.PNG'

function Hero() {
  return (
    <section className="min-h-screen bg-white pt-20">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-6 py-16 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-20">

        {/* LEFT */}
        <div className="max-w-2xl">

          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Frontend / React Developer
          </p>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            I build modern
            <br />
            <span className="text-blue-600">
              digital experiences.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
            I create responsive websites and web applications
            that help businesses establish a strong digital presence.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">

            <a
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-600"
            >
              View My Work
              <FiArrowUpRight size={17} />
            </a>

            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-7 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-slate-950 hover:bg-slate-950 hover:text-white"
            >
              Let's Talk
            </a>

          </div>

          <div className="mt-10 flex items-center gap-5">
            <span className="text-sm text-slate-400">
              Find me on
            </span>

            <a
              href="#"
              className="text-slate-500 transition hover:text-slate-950"
            >
              <FiGithub size={20} />
            </a>

            <a
              href="#"
              className="text-slate-500 transition hover:text-blue-600"
            >
              <FiLinkedin size={20} />
            </a>
          </div>

        </div>

        {/* RIGHT — ANIB SOLES */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/60">

  {/* Browser bar */}
  <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4">
    <div className="flex gap-2">
      <span className="h-3 w-3 rounded-full bg-red-400" />
      <span className="h-3 w-3 rounded-full bg-yellow-400" />
      <span className="h-3 w-3 rounded-full bg-green-400" />
    </div>

    <span className="text-xs text-slate-400">
      anibsoles.netlify.app
    </span>
  </div>

  {/* Real website screenshot */}
  <div className="overflow-hidden">
    <img
      src={anibSolesImage}
      alt="Anib Soles e-commerce website"
      className="block w-full object-cover object-top"
    />
  </div>

</div>

      </div>
    </section>
  )
}

export default Hero