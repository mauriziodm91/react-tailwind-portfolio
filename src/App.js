import Card from './components/card/card.component'
import About from './components/about/about.component'
import SkillsContainer from './components/skills/skills-container.component'
import Contact from './components/contact/contact.component'
import Footer from './components/footer/footer.component'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    })
  })

  return (
    <div className='min-h-screen py-10 px-3 sm:px-5 bg-gray-100'>
      <div data-aos='fade-down' data-aos-duration='800'>
        <Card />
      </div>
      <div data-aos='fade-up' data-aos-duration='800' data-aos-delay='400'>
        <About />
      </div>
      <SkillsContainer />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
