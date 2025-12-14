"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-[#EBE4D6]">
      {/* Hero Image with Overlay */}
      <div className="relative h-[85vh] sm:h-[90vh] lg:h-[95vh]">
        <Image
          src="/hero.jpg"
          alt="Modern Mental Health & Hormones"
          fill
          priority
          className="object-cover opacity-95"
          style={{ objectPosition: '50% 50%' }}
        />
        
        {/* Elegant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/10 to-[#EBE4D6]/60" />
        
        {/* Content Container - Centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div 
              className="max-w-5xl mx-auto text-center space-y-6 md:space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.1] text-white tracking-normal not-italic" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2)' }}>
                Modern Mental Health<br />& Hormones
              </h1>

              {/* Divider */}
              <div className="flex items-center justify-center gap-3 py-2">
                <div className="h-px w-16 bg-white/50"></div>
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <div className="h-px w-16 bg-white/50"></div>
              </div>

              {/* Subtitle */}
              <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto leading-relaxed font-light">
                Specialized mental health and hormone care<br className="hidden sm:block" /> for women navigating life&apos;s transitions.
              </p>

              {/* CTA Button */}
              <motion.div 
                className="pt-6 md:pt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <a 
                  href="/book" 
                  className="inline-flex items-center justify-center text-base md:text-lg font-semibold text-white bg-[#75866D] px-10 md:px-14 py-4 md:py-5 hover:bg-[#677560] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  Request Appointment
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
      >
        <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}