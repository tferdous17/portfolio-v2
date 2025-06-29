import { useState } from 'react'
import LandingPage from './components/page-ui/LandingPage'
import Navbar from './components/Navbar'
import Stars from './components/Stars'
import About from './components/page-ui/About'
import Experience from './components/page-ui/Experience'
import Projects from './components/page-ui/Projects'
import Footer from './components/page-ui/Footer'
import Contact from './components/page-ui/Contact'

function App() {
  return (
    <div className=''>
      <Stars />
      <Navbar />
      <LandingPage />
      <div className='relative absolute inset-0 bg-[radial-gradient(circle_650px_at_99%_800px,#4e3e3e,transparent),radial-gradient(circle_560px_at_29%_2160px,#2e3e4e,transparent)]'>
        <About />
        <Experience />
        <Projects />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default App
