'use client'

import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      {/* More sections coming soon... */}
    </main>
  )
}
