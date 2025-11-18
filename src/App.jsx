import { useState } from 'react'
import Hero from './components/Hero'
import Program from './components/Program'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  const [view, setView] = useState('home')

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Top nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 bg-slate-950/40 border-b border-cyan-300/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-bold tracking-tight text-emerald-200">SMIFF</a>
          <nav className="hidden sm:flex gap-6 text-cyan-100/80">
            <a href="#program" className="hover:text-emerald-200">Program</a>
            <a href="#experience" className="hover:text-emerald-200">Experience</a>
            <a href="#sponsors" className="hover:text-emerald-200">Sponsors</a>
            <a href="#news" className="hover:text-emerald-200">News</a>
          </nav>
          <button className="px-4 py-2 rounded-full bg-amber-400/90 text-slate-900 font-semibold">Buy Pass</button>
        </div>
      </header>

      <main>
        <Hero onPrimary={setView} />
        <Program />
        {/* Experience section (static for now) */}
        <section id="experience" className="py-16 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            {[{
              title:'Resorts & Venues', desc:'Five-star beachfront resorts and world-class screening venues set the stage for an unforgettable festival.'
            },{
              title:'Cuisine & Nightlife', desc:'From French-Dutch fusion dining to yacht parties at sunset — St. Martin is pure indulgence.'
            },{
              title:'Island Adventures', desc:'Emerald waters, coral reefs, and hidden coves: extend your stay and explore the best of the Caribbean.'
            }].map((c) => (
              <div key={c.title} className="rounded-2xl p-6 bg-slate-800/40 border border-cyan-300/10">
                <h3 className="text-xl font-semibold text-emerald-200">{c.title}</h3>
                <p className="text-cyan-100/70 mt-2">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sponsors */}
        <section id="sponsors" className="py-16 bg-slate-950">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-200">Sponsors & Partners</h2>
            <p className="text-cyan-200/80 mt-2">High-end Caribbean luxury brands and cultural partners</p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {['Air Caraïbes','Belmond','Moët & Chandon','Saint Martin Tourism'].map((s)=>(
                <div key={s} className="h-20 rounded-xl bg-slate-800/40 border border-cyan-300/10 flex items-center justify-center text-cyan-100/70">
                  {s}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* News (placeholder consuming API when available) */}
        <section id="news" className="py-16 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-200">News & Press</h2>
            <p className="text-cyan-200/80 mt-2">Press releases, photo stories, and more</p>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1,2,3].map(i => (
                <article key={i} className="rounded-2xl p-6 bg-slate-800/40 border border-cyan-300/10">
                  <div className="text-amber-200 text-xs uppercase">Press</div>
                  <h3 className="text-xl font-semibold mt-1">Festival update #{i}</h3>
                  <p className="text-cyan-100/70 mt-2">Official announcements and highlights from St. Martin International Film Festival.</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Newsletter />
      </main>

      <Footer />
    </div>
  )
}

export default App
