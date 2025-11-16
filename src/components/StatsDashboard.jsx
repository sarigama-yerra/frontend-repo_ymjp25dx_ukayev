import React, { useEffect, useState } from 'react'

const counters = [
  { label: 'Wins', end: 124 },
  { label: 'Goals', end: 342 },
  { label: 'Rankings', end: 18 },
  { label: 'Trophies', end: 26 },
]

function useCounter(end, duration = 1200) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    let start = 0
    const startTime = performance.now()
    const tick = (now) => {
      const p = Math.min(1, (now - startTime) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      const val = Math.floor(start + (end - start) * eased)
      setValue(val)
      if (p < 1) requestAnimationFrame(tick)
    }
    const id = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(id)
  }, [end, duration])
  return value
}

export default function StatsDashboard() {
  return (
    <section className="relative py-16 sm:py-24 bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_120%,rgba(0,255,170,0.12),transparent_30%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-8">Stats Dashboard</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {counters.map((c) => {
            const val = useCounter(c.end)
            return (
              <div key={c.label} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                <div className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">{val}</div>
                <div className="mt-2 text-sm uppercase tracking-widest text-white/70">{c.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
