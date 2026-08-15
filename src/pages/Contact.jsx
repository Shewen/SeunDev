import SEO from '../components/SEO'
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiArrowUpRight,
} from 'react-icons/fi'
import { useState } from 'react'

function Contact() {
  <SEO
  title="Contact | Seun Jeremiah"
  description="Get in touch with Seun Jeremiah about websites, e-commerce projects, React applications, and frontend development."
/>
  const [formData, setFormData] = useState({
  name: '',
  email: '',
  projectType: '',
  message: '',
})

const [status, setStatus] = useState('idle')

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
  event.preventDefault()

  setStatus('sending')

  try {
    const response = await fetch('https://formspree.io/f/xqpzlonl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      setStatus('success')

      setFormData({
        name: '',
        email: '',
        projectType: '',
        message: '',
      })
    } else {
      setStatus('error')
    }
  } catch (error) {
    console.error(error)
    setStatus('error')
  }
}

  return (
    <main className="bg-white">

      {/* Header */}
      <section className="border-b border-slate-200 pt-28 pb-16 sm:pt-32 sm:pb-20">
  <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">

    <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
      Contact
    </p>

    <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
      Let's talk about your
      <span className="text-blue-600"> next project.</span>
    </h1>

    <p className="mt-6 w-full max-w-2xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
      Have a website idea, business project, or web application
      in mind? Send me a message and let's discuss how I can help.
    </p>

  </div>
</section>

      {/* Contact area */}
      <section className="py-16 sm:py-20 lg:py-24">
  <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:px-10">
          {/* Contact information */}
          <div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Get In Touch
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
              Start a conversation.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-500">
              Tell me a little about what you're trying to build,
              and I'll get back to you as soon as possible.
            </p>

            {/* Email */}
            <a
              href="mailto:oluwaseun1607@gmail.com"
              className="group mt-8 flex items-center gap-4"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <FiMail size={21} />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Email
                </p>

                <p className="mt-1 text-sm font-semibold text-slate-900 transition group-hover:text-blue-600">
                  oluwaseun1607@gmail.com
                </p>
              </div>
            </a>

            {/* Social */}
            <div className="mt-8">

              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Connect
              </p>

              <div className="mt-4 flex gap-3">

                <a
                  href="https://github.com/Shewen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-slate-950 hover:bg-slate-950 hover:text-white"
                  aria-label="GitHub"
                >
                  <FiGithub size={19} />
                </a>

                <a
                  href="https://www.linkedin.com/in/oguntide-seun-3a55b0143/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={19} />
                </a>

              </div>

            </div>

          </div>

          {/* Form */}
          <div className="w-full min-w-0 rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-8 lg:p-10">

            <form onSubmit={handleSubmit}>

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-slate-900"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Email */}
              <div className="mt-5">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-slate-900"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Project type */}
              <div className="mt-5">
                <label
                  htmlFor="projectType"
                  className="text-sm font-semibold text-slate-900"
                >
                  What do you need?
                </label>

                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="">
                    Select a service
                  </option>

                  <option value="business-website">
                    Business Website
                  </option>

                  <option value="ecommerce">
                    E-commerce Website
                  </option>

                  <option value="react-app">
                    React Web Application
                  </option>

                  <option value="frontend">
                    Frontend Development
                  </option>

                  <option value="other">
                    Something Else
                  </option>
                </select>
              </div>

              {/* Message */}
              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-slate-900"
                >
                  Tell me about your project
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, goals, timeline, or anything else that would be helpful..."
                  required
                  className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Submit */}
              <button
  type="submit"
  disabled={status === 'sending'}
  className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
>
  {status === 'sending' ? 'Sending...' : 'Send Message'}

  {status !== 'sending' && (
    <FiArrowUpRight
      size={17}
      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    />
  )}
      </button>

      {status === 'success' && (
  <p className="mt-4 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
    Thanks! Your message has been sent successfully. I'll get back to you soon.
  </p>
)}

{status === 'error' && (
  <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
    Something went wrong. Please try again or email me directly.
  </p>
)}

            </form>

          </div>

        </div>
      </section>

    </main>
  )
}

export default Contact