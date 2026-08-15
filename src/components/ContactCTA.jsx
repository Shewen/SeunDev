import { FiArrowUpRight, FiMail } from 'react-icons/fi'

function ContactCTA() {
  return (
    <section className="bg-white px-6 py-24 sm:px-8 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-3xl bg-slate-950 px-7 py-14 sm:px-12 sm:py-16 lg:px-16">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
              Have a project in mind?
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let's build something
              <span className="text-blue-400"> great together.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Whether you need a business website, e-commerce store,
              or a custom web application, I'd love to hear about
              your project.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-blue-500 hover:text-white"
              >
                Start a Project

                <FiArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="mailto:oluwaseun1607@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white"
              >
                <FiMail size={17} />
                Email Me
              </a>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactCTA