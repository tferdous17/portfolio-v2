import { useState } from 'react'
import LandingPage from './components/page-ui/LandingPage'
import Navbar from './components/Navbar'
import Stars from './components/Stars'
import About from './components/page-ui/About'

function App() {
  return (
    <>
      <Stars />
      <Navbar />
      <LandingPage />
      <About />
    </>
  )
}

export default App
