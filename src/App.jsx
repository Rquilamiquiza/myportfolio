import { useEffect } from 'react'
import MatrixRain from './components/MatrixRain.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import useScrollReveal from './hooks/useScrollReveal.js'

export default function App() {
  useScrollReveal()

  useEffect(() => {
    const handler = (e) => {
      const href = e.currentTarget.getAttribute('href')
      if (!href || !href.startsWith('#')) return
      const target = document.querySelector(href)
      if (!target) return
      e.preventDefault()
      window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' })
    }
    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((a) => a.addEventListener('click', handler))
    return () => links.forEach((a) => a.removeEventListener('click', handler))
  }, [])

  return (
    <>
      <MatrixRain />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
