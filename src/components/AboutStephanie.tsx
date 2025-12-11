"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutStephanie() {
  return (
    <>
    <div className="w-full">
      {/* Meet Stephanie Section */}
      <section id="provider" className="pt-16 pb-24 md:pt-20 md:pb-32 bg-gradient-to-b from-[color:var(--surface)] to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-32 right-10 w-40 h-40 bg-[color:var(--accent)]/15 rounded-full opacity-50 blur-2xl"></div>
        <div className="absolute bottom-32 left-16 w-28 h-28 bg-[color:var(--wheat)]/20 rounded-full opacity-40 blur-xl"></div>
        <div className="absolute top-1/2 left-8 w-16 h-16 bg-[color:var(--pistachio)]/10 rounded-full opacity-35 blur-lg"></div>
        
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto bg-white/60 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-3xl shadow-xl border border-[color:var(--neutral-200)]" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-black leading-tight mb-3" 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ amount: 0.3, once: false }}
            >
              Meet Your Provider
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-black leading-relaxed font-semibold mb-1" 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ amount: 0.3, once: false }}
            >
              Stephanie Nichols, PMHNP-BC, FNP-BC
            </motion.p>
            <motion.p 
              className="text-sm sm:text-base md:text-lg text-black leading-relaxed italic mb-8" 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ amount: 0.3, once: false }}
            >
              Dual Board-Certified Practitioner specializing in Hormones & Women&apos;s Mental Health serving Columbus, Cleveland, Cincinnati, Toledo, Akron, Dayton, and all of Ohio
            </motion.p>

            <motion.div 
              className="grid gap-3 md:gap-4 lg:gap-6 md:grid-cols-[1fr_1.2fr] items-start"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ amount: 0.2, once: false }}
            >
              {/* Left column — text */}
              <motion.div 
                className="space-y-4 md:pr-4"
                initial={{ opacity: 0, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ amount: 0.2, once: false }}
              >
              <p 
                className="text-base sm:text-lg text-black" 
                style={{ lineHeight: '1.7' }}
              >
                Hi, I&apos;m Stephanie Nichols, MSN, APRN, PMHNP-BC, FNP-BC. As a psychiatric nurse practitioner I believe that mental health and hormonal health are deeply connected—and that your care should be as unique as you are.
              </p>
              <p 
                className="text-base sm:text-lg text-black" 
                style={{ lineHeight: '1.7' }}
              >
                With over 25 years of experience in internal medicine, neurology, and psychiatry, I&apos;ve seen how life&apos;s transitions and challenges can impact both the mind and body. My journey into mental health care was inspired by a desire to provide compassionate, personalized care that addresses the root causes of emotional and physical struggles. I combine traditional medicine with integrative approaches to help women feel empowered, balanced, and truly well.
              </p>
              <motion.div 
                className="mt-6 text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ amount: 0.1 }}
              >
                <motion.a
                  href="/about-me"
                  className="inline-flex items-center justify-center text-white text-base sm:text-lg font-semibold px-6 py-3 rounded-full transition-all duration-300"
                  style={{ backgroundColor: '#75866D' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#677560'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#75866D'}
                >
                  About Me
                  <motion.svg 
                    className="w-4 h-4 ml-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </motion.a>
              </motion.div>
            </motion.div>
            
            {/* Right column — image and badges */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl">
                <Image
                  src="/stephanie-headshot.jpg" 
                  alt="Stephanie Nichols" 
                  width={544}
                  height={672}
                  className="rounded-2xl object-cover w-full h-auto shadow-lg"
                />
                <div className="mt-4 flex flex-row items-center justify-center gap-4">
                  <Image
                    src="/women-s-hormone-therapy-specialist.PNG"
                    alt="Heather Hirsch Academy Women's Hormone Therapy Specialist badge"
                    width={220}
                    height={220}
                    className="w-32 sm:w-36 md:w-40 h-auto"
                  />
                  <Image
                    src="/MemberLogo.png"
                    alt="The Menopause Society 2025 Member badge"
                    width={240}
                    height={120}
                    className="w-36 sm:w-40 md:w-44 h-auto"
                  />
                </div>
              </div>
            </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Elegant organic transition at bottom of Meet Your Provider section */}
      <div className="relative h-24 overflow-hidden">
        <svg className="absolute bottom-0 w-full h-24 text-[color:var(--surface-muted)]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" fill="currentColor" opacity="0.8"/>
        </svg>
        <svg className="absolute bottom-0 w-full h-24 text-[color:var(--accent)]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor" opacity="0.3"/>
        </svg>
      </div>
    </div>
    </>
  )
}
