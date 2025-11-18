import { motion } from 'framer-motion'

export default function Hero({ onPrimary }) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#022a3a] via-[#063b58] to-[#02121a]">
      {/* Glossy overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,215,128,0.12),transparent_40%),_radial-gradient(circle_at_80%_20%,rgba(0,211,197,0.12),transparent_35%),_radial-gradient(circle_at_50%_80%,rgba(255,99,71,0.12),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.06),rgba(255,255,255,0)_30%,rgba(255,255,255,0)_70%,rgba(255,255,255,0.06))] mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-300 via-cyan-200 to-amber-200 text-transparent bg-clip-text drop-shadow-xl"
        >
          St. Martin International Film Festival
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-cyan-100/90 text-lg sm:text-xl max-w-3xl mx-auto"
        >
          Where Caribbean Luxury Meets Global Cinema
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-10 flex flex-wrap gap-4 justify-center"
        >
          <button onClick={() => onPrimary?.('submit')} className="px-6 py-3 rounded-full bg-amber-400/90 hover:bg-amber-300 text-slate-900 font-semibold shadow-xl shadow-amber-500/20 transition">
            Submit Your Film
          </button>
          <a href="#program" className="px-6 py-3 rounded-full bg-emerald-400/20 hover:bg-emerald-400/30 text-emerald-100 border border-emerald-300/20 font-semibold backdrop-blur-sm transition">
            Explore Program
          </a>
          <a href="#sponsors" className="px-6 py-3 rounded-full bg-cyan-400/20 hover:bg-cyan-400/30 text-cyan-100 border border-cyan-300/20 font-semibold backdrop-blur-sm transition">
            Become a Sponsor
          </a>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 opacity-80">
          {['Caribbean Spotlight','Gala Premieres','Industry Market','Workshops & Panels'].map((k) => (
            <div key={k} className="text-cyan-100/80 text-sm tracking-wide uppercase">
              {k}
            </div>
          ))}
        </div>
      </div>

      {/* Cinematic gradient stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-300 via-amber-300 to-coral-300" />
    </section>
  )
}
