import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, Football, Dribbble, SoccerBall, TennisBall } from 'lucide-react'

const sports = [
  { league: 'Football', icon: Football, match: 'Eagles vs. Hawks', score: '24 - 21', status: 'Q4 02:13', color: 'from-emerald-500 to-cyan-500' },
  { league: 'Basketball', icon: Dribbble, match: 'Blaze vs. Storm', score: '98 - 101', status: 'Q3 01:05', color: 'from-fuchsia-500 to-violet-500' },
  { league: 'Soccer', icon: SoccerBall, match: 'City vs. United', score: '2 - 1', status: '78′', color: 'from-sky-500 to-cyan-400' },
  { league: 'Tennis', icon: TennisBall, match: 'R. Nova vs. K. Pace', score: '6-4 4-3', status: 'Set 2', color: 'from-lime-400 to-emerald-400' },
]

export default function LiveScores() {
  return (
    <section id="scores" className="relative py-16 sm:py-24 bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <Trophy className="text-emerald-400" />
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Live Scores</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sports.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className={`absolute inset-x-0 -top-1 h-1 bg-gradient-to-r ${s.color}`} />
              <div className="p-5">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <s.icon className="text-cyan-300" />
                    <span className="uppercase text-xs tracking-widest text-white/70">{s.league}</span>
                  </div>
                  <span className="text-xs text-white/60">{s.status}</span>
                </div>
                <div className="text-lg font-semibold">{s.match}</div>
                <div className="mt-2 text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">{s.score}</div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-[radial-gradient(600px_circle_at_var(--x,50%)_var(--y,50%),rgba(0,255,170,0.18),transparent_40%)]" />
            </motion.div>
          ))}
        </div>
      </div>
      <script dangerouslySetInnerHTML={{__html: `document.addEventListener('mousemove', (e)=>{document.querySelectorAll('.group').forEach(card=>{const r=card.getBoundingClientRect();card.style.setProperty('--x', e.clientX - r.left + 'px');card.style.setProperty('--y', e.clientY - r.top + 'px');});});`}} />
    </section>
  )
}
