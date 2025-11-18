import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchCake } from '../lib/api'
import { motion } from 'framer-motion'

// Simple placeholder 3D area (swap with proper GLTFviewer or Spline later)
function ThreeDPlaceholder() {
  return (
    <div className="relative w-full aspect-square rounded-2xl bg-white border border-rose-200 shadow-inner overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(255,182,193,.35),transparent_60%),radial-gradient(circle_at_40%_60%,rgba(255,192,203,.35),transparent_60%)]" />
      <div className="absolute inset-0 grid place-items-center">
        <div className="w-56 h-56 rounded-full bg-rose-300/60 border border-rose-200 animate-pulse" />
      </div>
    </div>
  )
}

export default function Product() {
  const { slug } = useParams()
  const [cake, setCake] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const [selected, setSelected] = useState({})

  useEffect(() => {
    setLoading(true)
    fetchCake(slug).then(setCake).catch(e => setError(e.message)).finally(() => setLoading(false))
  }, [slug])

  const price = useMemo(() => {
    if (!cake) return 0
    let p = cake.base_price
    if (cake.options) {
      for (const opt of cake.options) {
        const choice = selected[opt.name]
        if (!choice) continue
        const found = opt.values.find(v => v.label === choice)
        if (found) p += found.amount
      }
    }
    return p
  }, [cake, selected])

  if (loading) return <div className="container mx-auto px-6 py-24">Loading...</div>
  if (error || !cake) return <div className="container mx-auto px-6 py-24 text-rose-700">{error || 'Not found'}</div>

  return (
    <div className="container mx-auto px-6 py-10 grid lg:grid-cols-2 gap-10">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ThreeDPlaceholder />
        <p className="text-sm text-rose-700/70 mt-3">Rotate and zoom the 3D model to explore details.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl border border-rose-200 p-6 shadow-sm"
      >
        <h1 className="text-2xl font-bold text-rose-950">{cake.name}</h1>
        {cake.tagline && <p className="text-rose-800/80 mt-1">{cake.tagline}</p>}
        {cake.description && <p className="text-rose-900/70 mt-4 leading-relaxed">{cake.description}</p>}

        <div className="mt-6 space-y-4">
          {cake.options?.map(opt => (
            <div key={opt.name}>
              <label className="block text-sm font-medium text-rose-900 mb-1">{opt.name}</label>
              <select
                className="w-full border border-rose-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
                value={selected[opt.name] || ''}
                onChange={e => setSelected(s => ({ ...s, [opt.name]: e.target.value }))}
              >
                <option value="">Select {opt.name}</option>
                {opt.values.map(v => (
                  <option key={v.label} value={v.label}>
                    {v.label} {v.amount ? `(+${v.amount.toFixed(2)})` : ''}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="text-2xl font-semibold text-rose-900">${price.toFixed(2)}</div>
          <div className="flex gap-3">
            <button className="px-5 py-3 rounded-full bg-rose-600 text-white font-medium shadow-lg shadow-rose-600/30 hover:bg-rose-700 transition">Add to Cart</button>
            <button className="px-5 py-3 rounded-full bg-rose-50 text-rose-900 font-medium border border-rose-200 hover:bg-rose-100 transition">Request Custom Quote</button>
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          {cake.ingredients && (
            <div>
              <h3 className="font-semibold text-rose-900 mb-2">Ingredients</h3>
              <ul className="text-rose-800/80 text-sm list-disc ml-5 space-y-1">
                {cake.ingredients.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          )}
          {cake.allergens && (
            <div>
              <h3 className="font-semibold text-rose-900 mb-2">Allergens</h3>
              <ul className="text-rose-800/80 text-sm list-disc ml-5 space-y-1">
                {cake.allergens.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}
