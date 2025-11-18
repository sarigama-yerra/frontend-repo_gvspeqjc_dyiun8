import { motion } from 'framer-motion'

export default function Hero({ onExplore }) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-50 to-rose-100" />
        <motion.div
          className="absolute -top-24 -left-24 w-[40rem] h-[40rem] rounded-full bg-rose-200/60 blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-24 -right-24 w-[40rem] h-[40rem] rounded-full bg-pink-200/60 blur-3xl"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold tracking-tight text-rose-950"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Taste the Craftsmanship
          </motion.h1>
          <motion.p
            className="mt-6 text-lg md:text-xl text-rose-800/80 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Bespoke cakes, handcrafted to perfection. Where art meets sweetness.
          </motion.p>
          <motion.div
            className="mt-8 flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <button
              onClick={onExplore}
              className="px-6 py-3 rounded-full bg-rose-600 text-white font-medium shadow-lg shadow-rose-600/30 hover:bg-rose-700 transition"
            >
              Explore Our Menu
            </button>
          </motion.div>
        </div>

        {/* Placeholder rotating visual (can be swapped with real 3D component) */}
        <motion.div
          className="relative aspect-square rounded-3xl bg-white/70 backdrop-blur border border-rose-200 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1, rotate: [0, 1, -1, 0] }}
          transition={{ duration: 1, rotate: { repeat: Infinity, duration: 10 } }}
        >
          <div className="absolute inset-6 rounded-2xl bg-[radial-gradient(circle_at_30%_30%,rgba(255,182,193,.6),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(255,192,203,.5),transparent_60%)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 rounded-full bg-rose-400/40 border border-rose-300 shadow-inner" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
