import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import About from './sections/About'

function App() {
  return (
    <>
    <main className="bg-neutral-50 min-h-screen scroll-smooth">
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </main>
    </>
  )
}

export default App
