import { useState } from 'react'
import LandingPage from './components/page-ui/LandingPage'
import Navbar from './components/Navbar'
import Stars from './components/Stars'
import About from './components/page-ui/About'
import Experience from './components/page-ui/Experience'

function App() {
  return (
    <>
      <Stars />
      <Navbar />
      <LandingPage />
      <div className='relative absolute inset-0 bg-[radial-gradient(circle_650px_at_99%_800px,#4e3e3e,transparent)]'>
        <About />
        <Experience />
      </div>
    </>
  )
}

export default App
