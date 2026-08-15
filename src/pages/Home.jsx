import Hero from '../components/Hero'
import ProjectsPreview from '../components/ProjectsPreview'
import AboutPreview from '../components/AboutPreview'
import SkillsPreview from '../components/SkillsPreview'
import ServicesPreview from '../components/ServicesPreview'
import ContactCTA from '../components/ContactCTA'
import SEO from '../components/SEO'
function Home() {
  
  return (
    <>
    <SEO
  title="Seun Jeremiah | Frontend React Developer"
  description="I'm Seun Jeremiah, a frontend developer specializing in React, JavaScript, responsive websites, and modern web applications."
/>
    <main>
      <Hero />
      <ProjectsPreview />
      <AboutPreview />
      <SkillsPreview />
      <ServicesPreview />
      <ContactCTA />
      
    </main>
    </>
  )
}

export default Home