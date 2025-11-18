import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Program() {
  const [films, setFilms] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${API}/api/films`)
        const data = await res.json()
        setFilms(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="program" className="py-16 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-emerald-200">Festival Program</h2>
        <p className="text-cyan-200/80 mt-2">A curated selection from the Caribbean and the world</p>

        {loading ? (
          <p className="mt-8 text-cyan-100/70">Loading program…</p>
        ) : (
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {films.map((f) => (
              <div key={f.id} className="rounded-xl bg-slate-800/40 border border-cyan-300/10 p-5 hover:bg-slate-800/60 transition">
                <div className="text-amber-200 text-xs tracking-wider uppercase">{f.category || 'Selection'}</div>
                <h3 className="text-xl font-semibold text-white mt-1">{f.title}</h3>
                <p className="text-cyan-100/70 text-sm mt-2 line-clamp-3">{f.synopsis || '—'}</p>
                <div className="mt-4 text-emerald-200/80 text-sm">{f.director} • {f.country || '—'}</div>
              </div>
            ))}
            {films.length === 0 && (
              <div className="text-cyan-100/70 mt-6">Program will be announced soon.</div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
