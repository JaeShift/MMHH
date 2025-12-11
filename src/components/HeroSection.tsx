"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh]">
        <Image
          src="/hero.jpg"
          alt="Modern Mental Health & Hormones"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: '50% 70%' }}
        />
        <div className="absolute inset-0 bg-black/40 sm:bg-black/35" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl text-left space-y-8 sm:space-y-10 md:space-y-12">
              <h1 className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold leading-tight text-white tracking-tight" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.8), 0 2px 6px rgba(0,0,0,0.6)' }}>
                <span className="block">Modern Mental Health</span>
                <span className="block">&amp; Hormones</span>
              </h1>

              <p className="text-white text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-4xl leading-relaxed" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.7)' }}>
                Specialized mental health and hormone care for women navigating life&apos;s transitions.
              </p>

              <div className="pt-4 sm:pt-6">
                <a href="/book" className="inline-flex items-center justify-center text-base sm:text-lg md:text-xl font-semibold text-white bg-[#75866D] px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-full hover:bg-[#677560] transition-all duration-300 transform hover:scale-105 shadow-2xl">
                  Request Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}