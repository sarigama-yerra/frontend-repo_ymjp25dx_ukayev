import React, { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const highlights = [
  { id: 1, title: 'Last-Second Buzzer Beater!', sport: 'Basketball', img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1600&auto=format&fit=crop', time: '2:14' },
  { id: 2, title: '90′ Match-Winning Volley', sport: 'Soccer', img: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1600&auto=format&fit=crop', time: '1:58' },
  { id: 3, title: 'Touchdown Run Through Traffic', sport: 'Football', img: 'https://images.unsplash.com/photo-1518604666860-9ed391f23712?q=80&w=1600&auto=format&fit=crop', time: '3:42' },
  { id: 4, title: 'Backhand Down-the-Line Winner', sport: 'Tennis', img: 'https://images.unsplash.com/photo-1548382228-3888c6b482d6?q=80&w=1600&auto=format&fit=crop', time: '1:21' },
]

export default function HighlightsCarousel() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % highlights.length), 3500)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="highlights" className="relative bg-gradient-to-b from-black to-neutral-950 text-white py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-x-0 -top-24 h-48 blur-3xl bg-[radial-gradient(60%_60%_at_50%_0%,rgba(0,255,170,0.25),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Match Highlights</h2>
          <div className="flex gap-2">
            {highlights.map((h, i) => (
              <button key={h.id} aria-label={`Go to slide ${i+1}`} onClick={() => setIndex(i)} className={`h-2 w-6 rounded-full transition-all ${i===index? 'bg-emerald-400 w-8' : 'bg-white/30 hover:bg-white/50'}`} />
            ))}
          </div>
        </div>

        <div className="relative aspect-[16/7] w-full overflow-hidden rounded-2xl border border-white/10">
          <AnimatePresence mode="popLayout">
            <motion.img
              key={highlights[index].id}
              src={highlights[index].img}
              alt={highlights[index].title}
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-white/70">{highlights[index].sport}</div>
              <h3 className="text-2xl sm:text-3xl font-bold">{highlights[index].title}</h3>
            </div>
            <span className="rounded-md bg-white/10 px-3 py-1 text-sm">{highlights[index].time}</span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {highlights.map((h, i) => (
            <button key={h.id} onClick={() => setIndex(i)} className={`group relative overflow-hidden rounded-xl border ${i===index?'border-emerald-400/60':'border-white/10 hover:border-white/30'}`}>
              <img src={h.img} alt={h.title} className="h-28 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-2 left-2 right-2 text-left">
                <div className="text-[10px] uppercase tracking-widest text-white/70">{h.sport}</div>
                <div className="text-xs font-semibold line-clamp-2">{h.title}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
