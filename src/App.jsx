import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Analytics from './components/Analytics'
import { Newletter } from './components/Newletter'


function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Analytics />
      <Newletter />
    </>
  )
}

export default App
