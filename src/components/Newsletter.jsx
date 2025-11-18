import { useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  async function subscribe(e) {
    e.preventDefault()
    setStatus('')
    try {
      const res = await fetch(`${API}/api/newsletter`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('Thanks for joining the list!')
      setEmail('')
    } catch {
      setStatus('Could not subscribe right now.')
    }
  }

  return (
    <section className="py-16 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-200 via-emerald-200 to-cyan-200 bg-clip-text text-transparent">Stay in the loop</h2>
        <p className="text-cyan-200/80 mt-2">News, premieres, industry events — straight to your inbox.</p>
        <form onSubmit={subscribe} className="mt-6 flex max-w-xl mx-auto gap-3">
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" required placeholder="you@example.com" className="flex-1 px-4 py-3 rounded-xl bg-slate-800/60 border border-cyan-300/20 text-cyan-50 placeholder:text-cyan-200/50 focus:outline-none focus:ring-2 focus:ring-emerald-300/40" />
          <button className="px-5 py-3 rounded-xl bg-amber-400/90 hover:bg-amber-300 text-slate-900 font-semibold shadow-lg shadow-amber-500/20">Subscribe</button>
        </form>
        {status && <div className="mt-3 text-emerald-200">{status}</div>}
      </div>
    </section>
  )
}
