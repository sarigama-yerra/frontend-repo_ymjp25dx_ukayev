import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Saving...')
    setTimeout(() => { setStatus('You’re in! Check your inbox.'); setEmail('') }, 900)
  }

  return (
    <section className="relative py-16 sm:py-24 bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0,rgba(0,255,170,0.12),transparent_60%)]" />
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.h3 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-extrabold tracking-tight">Join the Insider List</motion.h3>
        <p className="mt-3 text-white/70">Breaking news, instant scores, and elite analysis — delivered fast.</p>
        <form onSubmit={handleSubmit} className="mt-8 mx-auto max-w-xl flex items-center gap-3">
          <div className="relative flex-1">
            <input value={email} onChange={(e)=>setEmail(e.target.value)} required type="email" placeholder="Enter your email"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 outline-none text-white placeholder-white/50 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30 transition" />
            <div className="pointer-events-none absolute inset-y-0 right-3 my-auto h-5 w-5 rounded-full bg-emerald-400/30 blur-[2px]" />
          </div>
          <button className="relative inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 py-3 font-semibold text-white shadow-[0_10px_30px_rgba(0,255,170,0.35)] hover:shadow-[0_12px_40px_rgba(0,255,170,0.55)] transition">
            Subscribe
          </button>
        </form>
        {status && <div className="mt-3 text-sm text-emerald-300">{status}</div>}
      </div>
    </section>
  )
}
