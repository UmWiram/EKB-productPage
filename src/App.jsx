import React, { useState } from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Gallery from './components/gallery'
import Footer from './components/footer'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
