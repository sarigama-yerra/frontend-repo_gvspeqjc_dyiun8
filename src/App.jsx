import { useNavigate, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Menu from './pages/Menu'
import Product from './pages/Product'

function Home() {
  const navigate = useNavigate()
  return (
    <>
      <Hero onExplore={() => navigate('/menu')} />
      <Categories />
      <section className="container mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 bg-white/70 backdrop-blur rounded-2xl border border-rose-200 p-8">
          <h3 className="text-xl font-semibold text-rose-950">Our Philosophy</h3>
          <p className="mt-3 text-rose-900/80 leading-relaxed">We believe celebration deserves craftsmanship. Every layer is measured, every flourish intentional. From sourcing pristine ingredients to sculpting details by hand, our atelier builds cakes that taste as exquisite as they look.</p>
        </div>
        <div className="bg-white/70 backdrop-blur rounded-2xl border border-rose-200 p-8">
          <h3 className="text-xl font-semibold text-rose-950">Reviews</h3>
          <p className="mt-3 text-rose-900/80">“The wedding cake was a showstopper. Guests still talk about it.” — Celine</p>
          <p className="mt-3 text-rose-900/80">“Flavors were layered like music. Truly bespoke.” — Marcus</p>
        </div>
      </section>
    </>
  )
}

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-rose-100 text-rose-900">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cake/:slug" element={<Product />} />
      </Routes>
    </div>
  )
}

export default App
