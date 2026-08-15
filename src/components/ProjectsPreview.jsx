import { FiArrowUpRight } from 'react-icons/fi'
import anibSolesImage from '../assets/anib-soles.PNG'

function ProjectsPreview() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        {/* Section heading */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Selected Work
            </p>

            <h2 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Projects I've built.
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
              A selection of websites and digital experiences
              I've designed and developed.
            </p>
          </div>

          <a
            href="/projects"
            className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-slate-900 transition hover:text-blue-600"
          >
            View all projects

            <FiArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

        </div>

        {/* Featured project */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">

          {/* Project image */}
          <div className="overflow-hidden border-b border-slate-200 bg-slate-100">

            <img
              src={anibSolesImage}
              alt="Anib Soles e-commerce website"
              className="block h-auto w-full object-cover transition duration-700 hover:scale-[1.02]"
            />

          </div>

          {/* Project information */}
          <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end">

            <div>

              <div className="flex flex-wrap gap-2">

                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                  React
                </span>

                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  Tailwind CSS
                </span>

                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  E-commerce
                </span>

              </div>

              <h3 className="mt-5 text-3xl font-bold tracking-tight text-slate-950">
                Anib Soles
              </h3>

              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-500">
                A modern e-commerce website designed for a fashion
                brand selling handcrafted shoes and luxury bags.
                Built with React with a focus on responsive design,
                smooth navigation, and a premium shopping experience.
              </p>

            </div>

            <a
              href="https://anibsoles.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-blue-600"
            >
              View Live Site

              <FiArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

          </div>

        </div>

      </div>
    </section>
  )
}

export default ProjectsPreview