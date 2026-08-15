import {
  FiGlobe,
  FiShoppingBag,
  FiCode,
  FiLayout,
  FiArrowUpRight,
} from 'react-icons/fi'

function ServicesPreview() {
  const services = [
    {
      number: '01',
      icon: FiGlobe,
      title: 'Business Websites',
      description:
        'Professional, responsive websites that help businesses establish credibility and attract more customers online.',
    },
    {
      number: '02',
      icon: FiShoppingBag,
      title: 'E-commerce Websites',
      description:
        'Modern online stores with intuitive product browsing, responsive layouts, and a smooth shopping experience.',
    },
    {
      number: '03',
      icon: FiCode,
      title: 'React Web Applications',
      description:
        'Interactive web applications built with React and modern JavaScript, using reusable and maintainable components.',
    },
    {
      number: '04',
      icon: FiLayout,
      title: 'Frontend Development',
      description:
        'Pixel-conscious frontend implementation focused on responsive design, usability, performance, and clean interfaces.',
    },
  ]

  return (
    <section className="bg-slate-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Services
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            How I can help your business.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-500 sm:text-lg">
            From business websites to complete web applications,
            I build digital experiences around your goals and your
            audience.
          </p>
        </div>

        {/* Services */}
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 md:grid-cols-2">

          {services.map((service) => {
            const Icon = service.icon

            return (
              <article
                key={service.number}
                className="group bg-white p-7 transition-all duration-300 hover:bg-slate-950 sm:p-9"
              >

                <div className="flex items-start justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={22} />
                  </div>

                  <span className="font-mono text-sm text-slate-300 transition-colors group-hover:text-slate-600">
                    {service.number}
                  </span>

                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-950 transition-colors group-hover:text-white">
                  {service.title}
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-slate-500 transition-colors group-hover:text-slate-400">
                  {service.description}
                </p>

                <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-slate-950 transition-colors group-hover:text-white">
                  Learn more
                  <FiArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>

              </article>
            )
          })}

        </div>

      </div>
    </section>
  )
}

export default ServicesPreview