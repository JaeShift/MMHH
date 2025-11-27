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
            <div className="max-w-5xl text-left">
              <h1 className="font-caslon text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal leading-tight text-white mb-3 md:mb-4 tracking-wide" style={{ textShadow: '0 4px 8px rgba(0,0,0,0.7), 0 2px 4px rgba(0,0,0,0.5)' }}>
                <span className="block">Modern Mental&nbsp;Health</span>
                <span className="block">&amp; Hormones</span>
              </h1>

              <p className="mt-3 md:mt-4 text-white/90 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-4xl mb-6 md:mb-8 leading-relaxed font-caslon" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                Specialized mental health and hormone care for women navigating life&apos;s transitions.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6">
                <a href="/book" className="inline-flex items-center justify-center text-sm xs:text-base sm:text-lg font-bold text-white bg-white/20 backdrop-blur-sm px-5 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
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