import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Program from './components/Program'
import { Experience, Sponsors, News } from './components/Sections'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  const [view, setView] = useState('home')

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main>
        <Hero onPrimary={setView} />
        <Program />
        <Experience />
        <Sponsors />
        <News />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App
