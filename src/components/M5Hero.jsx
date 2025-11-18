import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function M5Hero({ onExplore }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-200, 200], [10, -10])
  const rotateY = useTransform(x, [-200, 200], [-10, 10])

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const dx = e.clientX - (rect.left + rect.width / 2)
    const dy = e.clientY - (rect.top + rect.height / 2)
    x.set(dx)
    y.set(dy)
  }

  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'saturate(1.05) contrast(1.05)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      <div className="relative container mx-auto px-6 pt-28 pb-16 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-white"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            BMW M5
          </motion.h1>
          <motion.p
            className="mt-5 text-lg md:text-xl text-white/80 max-w-xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            Executive presence, track-bred engineering. Experience a flagship sports sedan with dynamic 3D motion.
          </motion.p>
          <motion.div
            className="mt-8 flex gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <button onClick={onExplore} className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition">
              Explore gallery
            </button>
            <a href="#specs" className="px-6 py-3 rounded-full border border-white/60 text-white hover:bg-white/10 transition">
              View specs
            </a>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          className="hidden lg:block h-[420px] perspective-1000"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => { x.set(0); y.set(0) }}
        >
          <motion.div
            style={{ rotateX, rotateY }}
            className="relative h-full rounded-3xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/27/BMW_M5_CS_F90_IAA_2021_1X7A0198.jpg"
              alt="BMW M5 CS"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
