import React, { useState } from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Gallery from './components/gallery'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Gallery />
    </div>
  )
}

export default App
