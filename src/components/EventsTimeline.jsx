import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const events = [
  { date: 'Aug 12', title: 'Champions League Qualifiers', tag: 'Soccer' },
  { date: 'Aug 19', title: 'US Open Round 1', tag: 'Tennis' },
  { date: 'Aug 23', title: 'Preseason Finale', tag: 'Football' },
  { date: 'Sep 2', title: 'Opening Night', tag: 'Basketball' },
  { date: 'Sep 12', title: 'Derby Day', tag: 'Soccer' },
  { date: 'Sep 20', title: 'Grand Slam Finals', tag: 'Tennis' },
]

export default function EventsTimeline() {
  const scroller = useRef(null)

  useEffect(() => {
    const el = scroller.current
    if (!el) return
    let isDown = false; let startX = 0; let scrollLeft = 0
    const down = (e) => { isDown = true; el.classList.add('cursor-grabbing'); startX = e.pageX - el.offsetLeft; scrollLeft = el.scrollLeft }
    const leave = () => { isDown = false; el.classList.remove('cursor-grabbing') }
    const up = () => { isDown = false; el.classList.remove('cursor-grabbing') }
    const move = (e) => { if(!isDown) return; e.preventDefault(); const x = e.pageX - el.offsetLeft; const walk = (x - startX) * 1.2; el.scrollLeft = scrollLeft - walk }
    el.addEventListener('mousedown', down)
    el.addEventListener('mouseleave', leave)
    el.addEventListener('mouseup', up)
    el.addEventListener('mousemove', move)
    return () => {
      el.removeEventListener('mousedown', down)
      el.removeEventListener('mouseleave', leave)
      el.removeEventListener('mouseup', up)
      el.removeEventListener('mousemove', move)
    }
  }, [])

  return (
    <section className="relative py-16 sm:py-24 bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_0,rgba(0,255,170,0.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-8">Upcoming Events</h2>
        <div className="relative">
          <div className="absolute left-0 right-0 top-8 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <div ref={scroller} className="overflow-x-auto no-scrollbar relative flex gap-6 pb-6 cursor-grab select-none">
            {events.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="min-w-[260px] rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5"
              >
                <div className="text-sm text-white/70">{e.date}</div>
                <div className="mt-2 text-lg font-semibold">{e.title}</div>
                <span className="mt-4 inline-block rounded-md bg-emerald-500/20 text-emerald-300 px-2 py-1 text-xs">{e.tag}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
