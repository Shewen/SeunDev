import { FiArrowUpRight, FiCheck } from 'react-icons/fi'

function AboutPreview() {
  return (
    <section className="bg-slate-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

          {/* LEFT */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              About Me
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Building websites with purpose.
            </h2>
          </div>

          {/* RIGHT */}
          <div>

            <p className="text-xl leading-9 text-slate-700 sm:text-2xl">
              I'm a frontend developer focused on building modern,
              responsive, and user-friendly websites that help
              businesses create a stronger presence online.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500">
              I work primarily with React and JavaScript, turning ideas
              and designs into functional digital experiences. I care
              about clean interfaces, responsive layouts, performance,
              and making sure every website feels intuitive to use.
            </p>

            {/* Highlights */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <FiCheck size={15} />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-950">
                    Responsive Development
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Websites that work beautifully across desktop,
                    tablet, and mobile.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <FiCheck size={15} />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-950">
                    Modern UI
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Clean interfaces designed around usability and
                    strong visual hierarchy.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <FiCheck size={15} />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-950">
                    React Development
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Component-based applications built with React
                    and modern JavaScript.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <FiCheck size={15} />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-950">
                    Business Focused
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Websites built to communicate your brand and
                    support your business goals.
                  </p>
                </div>
              </div>

            </div>

            {/* CTA */}
            <div className="mt-9">
              <a
                href="/about"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition hover:text-blue-600"
              >
                More about me

                <FiArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default AboutPreview