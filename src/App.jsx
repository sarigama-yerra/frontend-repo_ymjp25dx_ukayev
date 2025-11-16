import React from 'react'
import Hero from './components/Hero'
import LiveScores from './components/LiveScores'
import HighlightsCarousel from './components/HighlightsCarousel'
import EventsTimeline from './components/EventsTimeline'
import AthleteSpotlight from './components/AthleteSpotlight'
import StatsDashboard from './components/StatsDashboard'
import Newsletter from './components/Newsletter'

function App() {
  return (
    <div className="bg-black text-white">
      <Hero />
      <LiveScores />
      <HighlightsCarousel />
      <EventsTimeline />
      <AthleteSpotlight />
      <StatsDashboard />
      <Newsletter />
      <footer className="py-10 text-center text-white/50 text-sm bg-neutral-950">
        © 2025 Pulse Sports Media. All rights reserved.
      </footer>
    </div>
  )
}

export default App
