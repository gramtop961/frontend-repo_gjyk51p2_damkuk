import { motion } from 'framer-motion'

export function Experience(){
  const items = [
    { title:'Resorts & Venues', desc:'Five-star beachfront resorts and world-class screening venues set the stage for an unforgettable festival.'},
    { title:'Cuisine & Nightlife', desc:'From French-Dutch fusion dining to yacht parties at sunset — St. Martin is pure indulgence.'},
    { title:'Island Adventures', desc:'Emerald waters, coral reefs, and hidden coves: extend your stay and explore the best of the Caribbean.'}
  ]
  return (
    <section id="experience" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_40%_at_50%_0%,rgba(16,185,129,0.05),transparent)]" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} className="text-4xl font-bold text-emerald-200">Experience St. Martin</motion.h2>
        <p className="text-cyan-200/80 mt-2 max-w-2xl">Luxury travel, culture, and adventure around the festival.</p>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((c) => (
            <motion.div key={c.title} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="rounded-2xl p-6 bg-slate-800/40 border border-white/10">
              <h3 className="text-xl font-semibold text-white">{c.title}</h3>
              <p className="text-cyan-100/70 mt-2">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Sponsors(){
  const tiers = ['Title Partner', 'Presenting', 'Gold', 'Silver']
  return (
    <section id="sponsors" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-amber-200">Sponsors & Partners</h2>
        <p className="text-cyan-200/80 mt-2">Premium brand collaborations that elevate the festival.</p>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {tiers.map(t => (
            <div key={t} className="h-24 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70">
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function News(){
  const items = [
    { k:'Press', t:'Festival Announces Caribbean Spotlight Lineup' },
    { k:'Update', t:'Industry Market Opens Submissions' },
    { k:'Press', t:'Gala Premiere Night Revealed' },
  ]
  return (
    <section id="news" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-emerald-200">News & Press</h2>
        <p className="text-cyan-200/80 mt-2">Official announcements and media highlights.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((n, i) => (
            <article key={i} className="rounded-2xl p-6 bg-white/5 border border-white/10">
              <div className="text-amber-200 text-xs uppercase">{n.k}</div>
              <h3 className="text-lg font-semibold mt-1 text-white">{n.t}</h3>
              <p className="text-cyan-100/70 mt-2">Stay tuned for full story and media kit.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
