import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchCakes } from '../lib/api'
import { motion } from 'framer-motion'

export default function Menu() {
  const [cakes, setCakes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchCakes().then(setCakes).catch(e => setError(e.message)).finally(() => setLoading(false))
  }, [])

  if (loading) return <div className="container mx-auto px-6 py-24">Loading menu...</div>
  if (error) return <div className="container mx-auto px-6 py-24 text-rose-700">{error}</div>

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-rose-950 mb-8">The Menu</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cakes.map((cake, i) => (
          <motion.div
            key={cake.id}
            className="group bg-white rounded-2xl border border-rose-200 overflow-hidden shadow-sm hover:shadow-xl transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
          >
            <div className="relative">
              <img src={cake.image_url} alt={cake.name} className="w-full h-56 object-cover" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition grid place-items-center bg-rose-900/20">
                <Link to={`/cake/${cake.slug}`} className="px-4 py-2 rounded-full bg-rose-600 text-white text-sm font-medium">View Cake in 3D</Link>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-rose-950">{cake.name}</h3>
                <span className="text-rose-700 font-medium">${cake.base_price.toFixed(2)}</span>
              </div>
              <p className="text-rose-800/70 text-sm mt-1">{cake.tagline}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
