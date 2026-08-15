import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'
import SEO from '../components/SEO'
import projects from '../data/projects'

function Projects() {
  <SEO
  title="Projects | Seun Jeremiah"
  description="Explore selected web development projects built with React, JavaScript, Tailwind CSS, and modern frontend technologies."
/>
  return (
    
    <main className="bg-white">

      {/* Header */}
      <section className="border-b border-slate-200 pt-32 pb-20 sm:pt-36 sm:pb-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Selected Work
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-tight tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            Projects I've built.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-500">
            A selection of websites and web applications built with
            modern frontend technologies.
          </p>

        </div>
      </section>

      {/* Projects */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid gap-8 md:grid-cols-2">

            {projects.map((project) => (
              <article
                key={project.id}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50"
              >

                {/* Preview */}
                <div className="flex min-h-[280px] items-center justify-center bg-slate-100 sm:min-h-[360px]">

                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="text-center">

                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                        {project.category}
                      </p>

                      <h2 className="mt-3 text-3xl font-bold text-slate-900">
                        {project.title}
                      </h2>

                    </div>
                  )}

                </div>

                {/* Content */}
                <div className="p-7 sm:p-8">

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                    {project.category}
                  </p>

                  <h2 className="mt-3 text-2xl font-bold text-slate-950">
                    {project.title}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">

                    {project.technologies.slice(0, 4).map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                      >
                        {technology}
                      </span>
                    ))}

                  </div>

                  <Link
                    to={`/projects/${project.id}`}
                    className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-950"
                  >
                    View Case Study

                    <FiArrowUpRight
                      size={17}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

    </main>
  )
}

export default Projects