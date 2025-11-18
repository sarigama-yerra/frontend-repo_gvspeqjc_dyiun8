import M5Header from '../components/M5Header'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const imgs = [
  {
    src: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1920&auto=format&fit=crop',
    title: 'M5 Sunset Run'
  },
  {
    src: 'https://images.unsplash.com/photo-1616715278807-2c08c0ea20c1?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNNSUyMFN1bnNldCUyMFJ1bnxlbnwwfDB8fHwxNzYzNDgzOTIxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    title: 'Track Day'
  },
  {
    src: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1920&auto=format&fit=crop',
    title: 'Studio Profile'
  },
  {
    src: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=1920&auto=format&fit=crop',
    title: 'Night Drive'
  },
]

export default function M5Gallery() {
  const [active, setActive] = useState(null)

  return (
    <main className="min-h-screen bg-black text-white">
      <M5Header />
      <section id="gallery" className="container mx-auto px-6 pt-24 pb-16">
        <h2 className="text-3xl md:text-5xl font-bold">BMW M5 — Interactive Gallery</h2>
        <p className="mt-3 text-white/70 max-w-2xl">Click an image to view with a 3D card flip transition. Use ESC or click background to close.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {imgs.map((item, i) => (
            <motion.button
              key={item.src}
              className="group relative aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-900 border border-white/5"
              onClick={() => setActive(item)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.img
                src={item.src}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1.05 }}
                whileHover={{ scale: 1.12 }}
                transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <p className="text-white/70 text-sm">BMW M Series</p>
                  <p className="text-lg font-semibold">{item.title}</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-white text-black text-sm font-semibold">View</span>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-black/60 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              layoutId={active.src}
              className="relative w-[90vw] max-w-5xl aspect-[16/9] rounded-2xl overflow-hidden"
              initial={{ rotateY: 90, scale: 0.9, opacity: 0 }}
              animate={{ rotateY: 0, scale: 1, opacity: 1 }}
              exit={{ rotateY: -90, scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 18 }}
              onClick={(e) => e.stopPropagation()}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.img src={active.src} alt={active.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <p className="text-white/70 text-sm">BMW M Series</p>
                  <p className="text-lg font-semibold">{active.title}</p>
                </div>
                <button className="px-3 py-1 rounded-full bg-white text-black text-sm font-semibold" onClick={() => setActive(null)}>Close</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
