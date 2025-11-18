export default function Footer(){
  return (
    <footer className="bg-slate-950 py-10 border-t border-cyan-300/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row gap-6 sm:items-center justify-between">
        <div>
          <div className="text-cyan-100/90 font-semibold">St. Martin International Film Festival</div>
          <div className="text-cyan-100/60 text-sm">© {new Date().getFullYear()} All rights reserved.</div>
        </div>
        <div className="text-cyan-100/60 text-sm flex gap-4">
          <a href="#" className="hover:text-emerald-200">Instagram</a>
          <a href="#" className="hover:text-emerald-200">Facebook</a>
          <a href="#" className="hover:text-emerald-200">X</a>
        </div>
      </div>
    </footer>
  )
}
