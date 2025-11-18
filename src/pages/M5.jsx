import { motion } from 'framer-motion'

const images = [
  'https://images.unsplash.com/photo-1606660585133-cb2f0b4bba64?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1617767308279-8f05a6bb77eb?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1600&auto=format&fit=crop',
]

export default function M5Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-5xl font-bold">BMW M5 Gallery</h2>
        <p className="mt-3 text-white/70 max-w-2xl">Dive into a visual showcase of the M5. Hover or tap to reveal 3D-like depth and transitions.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <motion.div
              key={src}
              className="group relative aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.img
                src={src}
                alt={`BMW M5 ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1.05 }}
                whileHover={{ scale: 1.12 }}
                transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"
                initial={{ opacity: 0.2 }}
                whileHover={{ opacity: 0.5 }}
              />
              <motion.div
                className="absolute bottom-4 left-4 right-4 flex items-center justify-between"
                initial={{ y: 10, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
              >
                <div>
                  <p className="text-sm uppercase tracking-widest text-white/70">BMW M Series</p>
                  <p className="text-lg font-semibold">M5 Performance</p>
                </div>
                <a href="#" className="px-3 py-1 rounded-full bg-white text-black text-sm font-semibold">View</a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="specs" className="container mx-auto px-6 pb-24">
        <h3 className="text-2xl md:text-4xl font-bold">Headline Specs</h3>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            ['Engine', '4.4L Twin‑Turbo V8'],
            ['Power', '617 hp (Competition)'],
            ['0–100 km/h', '3.3 s'],
            ['Drivetrain', 'M xDrive'],
          ].map(([k, v]) => (
            <div key={k} className="rounded-2xl bg-neutral-900 p-6 border border-white/5">
              <p className="text-white/60 text-sm">{k}</p>
              <p className="text-xl font-semibold mt-1">{v}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
