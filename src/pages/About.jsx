import SEO from '../components/SEO'
import {
  FiArrowUpRight,
  FiCheck,
  FiCode,
  FiMonitor,
  FiLayers,
} from 'react-icons/fi'

function About() {
  <SEO
  title="About | Seun Jeremiah"
  description="Learn more about Seun Jeremiah, a frontend developer focused on React, JavaScript, and modern responsive web experiences."
/>
  const strengths = [
    {
      icon: FiCode,
      title: 'Frontend Development',
      description:
        'Building modern interfaces with React, JavaScript, and reusable components.',
    },
    {
      icon: FiMonitor,
      title: 'Responsive Design',
      description:
        'Creating experiences that work smoothly across desktop, tablet, and mobile.',
    },
    {
      icon: FiLayers,
      title: 'Clean Architecture',
      description:
        'Organizing projects into maintainable components and scalable structures.',
    },
  ]

  return (
    <main className="bg-white">

      {/* Intro */}
      <section className="border-b border-slate-200 pt-32 pb-20 sm:pt-36 sm:pb-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            About Me
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-tight tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            Developer focused on building
            <span className="text-blue-600"> useful digital experiences.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-500">
            I'm a frontend developer who enjoys turning ideas into
            responsive, functional, and visually polished websites
            and web applications.
          </p>

        </div>
      </section>

      {/* Story */}
      <section className="py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24 lg:px-10">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              My Story
            </p>
          </div>

          <div className="max-w-3xl">

            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              From building websites to building digital products.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              My journey in technology started with web design and
              gradually developed into a deeper interest in frontend
              development. Over time, I've worked with different
              web technologies and learned how design, functionality,
              and user experience come together.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-500">
              Today, my main focus is React development. I enjoy
              taking an idea or design and turning it into a real
              website that people can actually use. Projects like
              Anib Soles have given me the opportunity to work with
              responsive layouts, reusable components, routing,
              product interfaces, and e-commerce functionality.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-500">
              I'm continuously improving my skills by building real
              projects, learning modern development practices, and
              exploring better ways to create useful digital
              experiences.
            </p>

          </div>

        </div>
      </section>

      {/* Strengths */}
      <section className="bg-slate-50 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <div className="max-w-2xl">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              What I Do
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              How I approach development.
            </h2>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">

            {strengths.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>
                </div>
              )
            })}

          </div>

        </div>
      </section>

      {/* Principles */}
      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                My Approach
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                Simple, thoughtful, and focused on results.
              </h2>
            </div>

            <div className="space-y-5">

              {[
                'Understand the goal before writing the code.',
                'Keep interfaces simple and easy to navigate.',
                'Build responsive experiences from the start.',
                'Use reusable components instead of unnecessary complexity.',
                'Continuously test, improve, and refine the final product.',
              ].map((principle) => (
                <div
                  key={principle}
                  className="flex items-start gap-4 border-b border-slate-200 pb-5"
                >
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <FiCheck size={14} />
                  </div>

                  <p className="text-base leading-7 text-slate-600">
                    {principle}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 sm:px-8 sm:pb-28 lg:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="rounded-3xl bg-slate-950 px-7 py-14 sm:px-12 sm:py-16 lg:px-16">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
              Let's Work Together
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Have an idea you'd like to turn into a website?
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
              Tell me what you're working on and let's discuss how
              I can help bring it to life.
            </p>

            <a
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-blue-600 hover:text-white"
            >
              Get in Touch

              <FiArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

          </div>

        </div>
      </section>

    </main>
  )
}

export default About