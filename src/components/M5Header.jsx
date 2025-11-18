import { Link } from 'react-router-dom'
import { Car, Images, Home } from 'lucide-react'

export default function M5Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur border-b border-white/10">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between text-white">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <Home size={18} />
          <span>Home</span>
        </Link>
        <nav className="flex items-center gap-6 text-white/80">
          <Link to="/m5" className="hover:text-white transition flex items-center gap-2"><Car size={18}/>M5</Link>
          <a href="#gallery" className="hover:text-white transition flex items-center gap-2"><Images size={18}/>Gallery</a>
        </nav>
      </div>
    </header>
  )
}
