import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Energy gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      <div className="pointer-events-none absolute inset-0" style={{background: 'radial-gradient(60% 60% at 50% 40%, rgba(0,255,170,0.22) 0%, rgba(0,0,0,0) 60%)'}} />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col items-start justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
        >
          The Pulse of Sports
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-emerald-300 to-lime-300">— Live, Fast, Unstoppable</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 max-w-2xl text-base sm:text-lg text-white/80"
        >
          Football. Basketball. Soccer. Tennis. Highlights, scores, stats and stories fueling the adrenaline of a multi‑sport world.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-10 flex items-center gap-4"
        >
          <a
            href="#scores"
            className="group relative inline-flex items-center gap-3 rounded-md px-6 py-3 text-white font-semibold bg-gradient-to-r from-emerald-500 to-cyan-500 shadow-[0_10px_30px_rgba(0,255,170,0.35)] hover:shadow-[0_12px_40px_rgba(0,255,170,0.55)] transition-all"
          >
            Get Live Scores
            <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
          </a>
          <a href="#highlights" className="inline-flex items-center rounded-md border border-white/20 bg-white/10 px-6 py-3 text-white hover:bg-white/20 transition">
            Watch Highlights
          </a>
        </motion.div>
      </div>

      {/* Parallax edge accents */}
      <div className="absolute bottom-6 left-6 right-6 z-10 flex justify-between opacity-70">
        <div className="h-px w-1/3 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        <div className="h-px w-1/3 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
      </div>
    </section>
  )
}
