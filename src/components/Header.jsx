import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/60 border-b border-rose-200/60">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold text-rose-900 tracking-tight">atelier gâteau</Link>
        <nav className="hidden md:flex items-center gap-6 text-rose-900/80">
          <Link to="/" className="hover:text-rose-900 transition">Home</Link>
          <Link to="/menu" className="hover:text-rose-900 transition">Cakes</Link>
          <a href="#custom" className="hover:text-rose-900 transition">Custom Orders</a>
          <a href="#about" className="hover:text-rose-900 transition">About Us</a>
          <a href="#contact" className="hover:text-rose-900 transition">Contact</a>
        </nav>
        <button className="relative p-2 rounded-full hover:bg-rose-100 text-rose-900">
          <ShoppingCart size={22} />
          <span className="absolute -top-1 -right-1 text-[10px] bg-rose-600 text-white w-4 h-4 rounded-full grid place-items-center">0</span>
        </button>
      </div>
    </header>
  )
}
