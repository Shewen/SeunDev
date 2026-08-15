import { useEffect } from 'react'

function SEO({
  title = 'Seun Jeremiah | Frontend React Developer',
  description = 'Frontend developer specializing in React, JavaScript, responsive websites, and modern web applications.',
}) {
  useEffect(() => {
    document.title = title

    const setMeta = (name, content) => {
      let element = document.querySelector(`meta[name="${name}"]`)

      if (!element) {
        element = document.createElement('meta')
        element.setAttribute('name', name)
        document.head.appendChild(element)
      }

      element.setAttribute('content', content)
    }

    setMeta('description', description)
  }, [title, description])

  return null
}

export default SEO