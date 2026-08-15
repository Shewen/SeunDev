import SEO from '../components/SEO'
import {
  FiGlobe,
  FiShoppingBag,
  FiCode,
  FiLayout,
  FiCheck,
  FiArrowUpRight,
} from 'react-icons/fi'

function Services() {
  <SEO
  title="Services | Seun Jeremiah"
  description="Frontend development, business websites, e-commerce websites, and React web applications."
/>
  const services = [
    {
      number: '01',
      icon: FiGlobe,
      title: 'Business Websites',
      description:
        'Professional websites designed to establish credibility, showcase your business, and make it easier for customers to find and contact you.',
      features: [
        'Responsive design',
        'Modern user interface',
        'Multiple pages',
        'Contact integration',
        'SEO-friendly structure',
      ],
    },
    {
      number: '02',
      icon: FiShoppingBag,
      title: 'E-commerce Websites',
      description:
        'Modern online stores designed to showcase products and give customers a smooth browsing and shopping experience.',
      features: [
        'Product catalogues',
        'Category filtering',
        'Product detail pages',
        'Shopping cart',
        'Responsive shopping experience',
      ],
    },
    {
      number: '03',
      icon: FiCode,
      title: 'React Web Applications',
      description:
        'Interactive web applications built with React and modern JavaScript for businesses that need more than a traditional website.',
      features: [
        'Reusable React components',
        'React Router',
        'Interactive interfaces',
        'API integration',
        'Scalable project structure',
      ],
    },
    {
      number: '04',
      icon: FiLayout,
      title: 'Frontend Development',
      description:
        'Turning designs and ideas into polished, responsive interfaces with attention to layout, usability, and performance.',
      features: [
        'Pixel-conscious implementation',
        'Responsive layouts',
        'Tailwind CSS',
        'Cross-device testing',
        'Clean component structure',
      ],
    },
  ]

  return (
    <main className="bg-white">

      {/* Header */}
      <section className="border-b border-slate-200 pt-32 pb-20 sm:pt-36 sm:pb-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Services
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-tight tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            Digital solutions built around your goals.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-500">
            I help businesses and individuals turn ideas into
            professional websites and modern web applications.
          </p>

        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <div className="grid gap-6 md:grid-cols-2">

            {services.map((service) => {
              const Icon = service.icon

              return (
                <article
                  key={service.number}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/50 sm:p-9"
                >

                  <div className="flex items-start justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                      <Icon size={22} />
                    </div>

                    <span className="font-mono text-sm text-slate-300">
                      {service.number}
                    </span>

                  </div>

                  <h2 className="mt-7 text-2xl font-bold text-slate-950">
                    {service.title}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {service.description}
                  </p>

                  <div className="mt-7 border-t border-slate-100 pt-6">

                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      What's included
                    </p>

                    <ul className="mt-4 space-y-3">

                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-sm text-slate-600"
                        >
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                            <FiCheck size={12} />
                          </span>

                          {feature}
                        </li>
                      ))}

                    </ul>

                  </div>

                </article>
              )
            })}

          </div>

        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-50 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <div className="max-w-2xl">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              My Process
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              From idea to launch.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-500 sm:text-lg">
              A straightforward process designed to keep projects
              clear, focused, and moving forward.
            </p>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-4">

            {[
              {
                number: '01',
                title: 'Discover',
                text: 'Understand your goals, audience, and project requirements.',
              },
              {
                number: '02',
                title: 'Plan',
                text: 'Define the structure, features, content, and overall direction.',
              },
              {
                number: '03',
                title: 'Build',
                text: 'Develop the website using modern, responsive technologies.',
              },
              {
                number: '04',
                title: 'Launch',
                text: 'Test, refine, and prepare the finished website for launch.',
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-3xl border border-slate-200 bg-white p-6"
              >
                <span className="font-mono text-sm font-semibold text-blue-600">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-bold text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {step.text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="rounded-3xl bg-slate-950 px-7 py-14 sm:px-12 sm:py-16 lg:px-16">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
              Start a Project
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Have a website idea?
              <span className="text-blue-400"> Let's talk.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
              Tell me what you need and I'll help you figure out
              the right approach for your project.
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

export default Services