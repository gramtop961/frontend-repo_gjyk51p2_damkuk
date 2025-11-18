import { useState, useEffect } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar(){
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-slate-950/70 border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-300 via-cyan-300 to-amber-200 shadow-md" />
          <span className="text-white/90 font-semibold tracking-wider">St. Martin International Film Festival</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-white/80">
          <a href="#program" className="hover:text-white">Program</a>
          <a href="#experience" className="hover:text-white">Experience</a>
          <a href="#sponsors" className="hover:text-white">Sponsors</a>
          <a href="#news" className="hover:text-white">News</a>
          <a href="#newsletter" className="px-4 py-2 rounded-full bg-amber-400 text-slate-900 font-semibold hover:bg-amber-300">Buy Pass</a>
        </nav>
        <button className="md:hidden p-2 text-white/90">
          <Menu />
        </button>
      </div>
    </header>
  )
}
