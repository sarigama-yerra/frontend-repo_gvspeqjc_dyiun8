import { motion } from 'framer-motion'

const categories = [
  { name: 'Wedding', image: 'https://images.unsplash.com/photo-1525253086316-d0c936c814f8?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Birthday', image: 'https://images.unsplash.com/photo-1756143059835-bebee32eeb29?ixid=M3w3OTkxMTl8MXwxfHNlYXJjaHwxfHxXZWRkaW5nfGVufDB8MHx8fDE3NjM0ODEyNzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { name: 'Signature', image: 'https://images.unsplash.com/photo-1582053433976-25c00369fc93?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Corporate', image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=1200&auto=format&fit=crop' },
]

export default function Categories() {
  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-rose-950 mb-8">Featured Categories</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((c, i) => (
          <motion.div
            key={c.name}
            className="group relative overflow-hidden rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <img src={c.image} alt={c.name} className="w-full h-56 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-950/70 to-transparent" />
            <div className="absolute bottom-0 p-4">
              <span className="text-white text-lg font-semibold">{c.name}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
