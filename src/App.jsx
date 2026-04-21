import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import BottomNav from './components/BottomNav'
import AnnouncementBar from './components/AnnouncementBar'

function App() {
  return (
    <div className="app-container">
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        <AboutUs />
        <ContactUs />
      </main>
      <Footer />
      <BottomNav />
    </div>
  )
}

export default App
