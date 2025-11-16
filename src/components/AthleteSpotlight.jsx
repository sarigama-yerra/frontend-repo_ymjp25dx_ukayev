import React from 'react'
import { motion } from 'framer-motion'

const athlete = {
  name: 'Riley Nova',
  sport: 'Soccer',
  img: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?q=80&w=1600&auto=format&fit=crop',
  bio: 'Explosive winger with blistering pace and a ruthless eye for goal. Captains club and country.',
  stats: [
    { label: 'Goals', value: 27 },
    { label: 'Assists', value: 14 },
    { label: 'Top Speed', value: '35 km/h' },
    { label: 'Rank', value: '#7' },
  ],
}

export default function AthleteSpotlight() {
  return (
    <section className="relative py-16 sm:py-24 bg-black text-white">
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-8">Athlete Spotlight</h2>
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="group relative perspective-[1200px]">
            <div className="relative h-[440px] w-full [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 rounded-2xl overflow-hidden [backface-visibility:hidden]">
                <img src={athlete.img} alt={athlete.name} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-sm uppercase tracking-widest text-white/70">{athlete.sport}</div>
                  <div className="text-3xl font-bold">{athlete.name}</div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden] bg-white/5 border border-white/10 p-6 flex flex-col justify-between">
                <div>
                  <div className="text-sm uppercase tracking-widest text-white/70">Bio</div>
                  <p className="mt-2 text-white/80">{athlete.bio}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {athlete.stats.map((s, i) => (
                    <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs uppercase tracking-widest text-white/60">{s.label}</div>
                      <div className="text-2xl font-bold">{s.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[1,2,3,4].map(i => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6">
                <div className="text-sm uppercase tracking-widest text-white/60">Metric {i}</div>
                <div className="mt-2 text-3xl font-extrabold">{Math.floor(50 + Math.random()*50)}</div>
                <div className="mt-1 text-sm text-white/60">Season trend</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
