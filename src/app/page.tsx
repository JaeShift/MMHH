'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import FocusAreas from '@/components/FocusAreas'
import AboutStephanie from '@/components/AboutStephanie'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <FocusAreas />
      <AboutStephanie />
      <Testimonials />
      <section id="book" className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="card p-8 bg-cream section-texture">
            <h2 className="font-serif-display display-h2 text-forest">Schedule Your Telehealth Visit</h2>
            <p className="mt-3 text-charcoal leading-7">New patients are typically seen within 48 hours. Use the link below to request your appointment.</p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a href="#" className="rounded-full px-6 py-3 text-white font-medium" style={{ backgroundColor: 'var(--terracotta)' }} aria-label="Start booking">
                Start booking
              </a>
              <a href="tel:+16145550126" className="rounded-full px-6 py-3 font-medium" style={{ color: 'var(--sage-600)', background: 'color-mix(in srgb, var(--khaki) 55%, white)' }} aria-label="Call the office">
                (614) 555-0126
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
