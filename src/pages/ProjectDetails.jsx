import { useParams, Link } from 'react-router-dom'
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiGithub,
  FiExternalLink,
  FiCheck,
} from 'react-icons/fi'

import projects from '../data/projects'

function ProjectDetails() {
  const { slug } = useParams()

  const project = projects.find((item) => item.id === slug)

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center px-5">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-950">
            Project Not Found
          </h1>

          <Link
            to="/projects"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white"
          >
            <FiArrowLeft size={16} />
            Back to Projects
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="border-b border-slate-200 pt-32 pb-16 sm:pt-36 sm:pb-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-blue-600"
          >
            <FiArrowLeft size={16} />
            Back to Projects
          </Link>

          <p className="mt-10 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            {project.category}
          </p>

          <div className="mt-4 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">

            <div className="max-w-4xl">

              <h1 className="text-5xl font-bold leading-tight tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                {project.title}
              </h1>

              <p className="mt-4 text-xl font-medium text-slate-500 sm:text-2xl">
                {project.subtitle}
              </p>

            </div>

            <div className="flex flex-wrap gap-3">

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
              >
                Live Website
                <FiExternalLink size={16} />
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-950"
              >
                <FiGithub size={16} />
                GitHub
              </a>

            </div>

          </div>

        </div>
      </section>

     
      
{/* Preview */}
<section className="py-12 sm:py-16">
  <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">

    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">

      <div className="flex h-10 items-center gap-2 border-b border-slate-200 bg-white px-4">
        <span className="h-3 w-3 rounded-full bg-slate-300" />
        <span className="h-3 w-3 rounded-full bg-slate-300" />
        <span className="h-3 w-3 rounded-full bg-slate-300" />
      </div>

      <div className="overflow-hidden bg-white">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            className="block h-auto w-full max-w-full object-contain"
          />
        ) : (
          <div className="flex min-h-[320px] items-center justify-center sm:min-h-[500px]">
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-wider text-slate-400">
                Project Preview
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                {project.title}
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                {project.category}
              </p>
            </div>
          </div>
        )}
      </div>

    </div>

  </div>
</section>

      {/* Overview */}
      <section className="border-t border-slate-200 py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24 lg:px-10">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Overview
            </p>
          </div>

          <div className="max-w-3xl">

            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              {project.subtitle}
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              {project.description}
            </p>

          </div>

        </div>
      </section>

      {/* Challenge / Solution */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-5 sm:px-8 md:grid-cols-2 lg:px-10">

          <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              The Challenge
            </p>

            <h2 className="mt-5 text-2xl font-bold text-slate-950">
              The problem
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              {project.challenge}
            </p>

          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              The Solution
            </p>

            <h2 className="mt-5 text-2xl font-bold text-slate-950">
              The approach
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              {project.solution}
            </p>

          </div>

        </div>
      </section>

      {/* Features */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Key Features
          </p>

          <h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Built around the user experience.
          </h2>

          <div className="mt-12 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">

            {project.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 border-b border-slate-200 pb-5"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <FiCheck size={13} />
                </span>

                <p className="text-sm leading-6 text-slate-600">
                  {feature}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Technology */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24 lg:px-10">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Technology
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Tools used.
            </h2>

          </div>

          <div className="flex flex-wrap content-start gap-3">

            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700"
              >
                {technology}
              </span>
            ))}

          </div>

        </div>
      </section>

      {/* Development */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24 lg:px-10">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Development
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              How it was built.
            </h2>

          </div>

          <div className="max-w-3xl">

            <p className="text-base leading-8 text-slate-600">
              {project.development}
            </p>

          </div>

        </div>
      </section>

      {/* Result */}
      <section className="bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
            Result
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            {project.result}
          </h2>

          <div className="mt-9 flex flex-wrap gap-4">

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-blue-600 hover:text-white"
            >
              View Live Project
              <FiArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white"
            >
              <FiGithub size={17} />
              View Source
            </a>

          </div>

        </div>
      </section>

    </main>
  )
}

export default ProjectDetails