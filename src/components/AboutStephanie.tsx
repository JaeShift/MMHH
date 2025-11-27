"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutStephanie() {
  return (
    <>
    <div className="w-full">
      {/* Section 1: About Modern Mental Health & Hormones */}
      <div id="about" className="w-full pt-8 md:pt-12 lg:pt-16 pb-20 md:pb-32 lg:pb-40 bg-gradient-to-b from-[color:var(--surface)] to-[color:var(--surface-muted)] relative overflow-hidden">
        {/* Nature PNG images - varied rotations and flips */}
        <div className="absolute top-10 left-8 opacity-25 w-40 h-40 md:w-52 md:h-52 rotate-12">
          <Image src="/nature.png" alt="" fill className="object-contain" />
        </div>
        <div className="absolute top-1/3 right-8 opacity-20 w-44 h-44 md:w-56 md:h-56 -rotate-12 scale-x-[-1]">
          <Image src="/nature.png" alt="" fill className="object-contain" />
        </div>
        <div className="absolute -bottom-4 left-8 opacity-25 w-48 h-48 md:w-64 md:h-64 rotate-[60deg] scale-x-[-1]">
          <Image src="/nature.png" alt="" fill className="object-contain" />
        </div>
        
        {/* Custom SVG leaf designs */}
        <div className="absolute top-24 right-20 w-28 h-28 md:w-36 md:h-36 opacity-20">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="50" cy="50" rx="38" ry="22" transform="rotate(-30 50 50)" fill="#8B9D7F"/>
            <path d="M50 28 Q45 50 50 72" stroke="#75866D" strokeWidth="2.5"/>
          </svg>
        </div>
        <div className="absolute bottom-32 right-16 w-32 h-32 md:w-40 md:h-40 opacity-20 rotate-45">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="50" cy="50" rx="35" ry="20" transform="rotate(20 50 50)" fill="#8B9D7F"/>
            <path d="M50 32 Q48 50 50 68" stroke="#75866D" strokeWidth="2.5"/>
          </svg>
        </div>
        <div className="absolute top-1/2 left-10 w-24 h-24 md:w-32 md:h-32 opacity-20 -rotate-12">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="50" cy="50" rx="36" ry="21" transform="rotate(-45 50 50)" fill="#8B9D7F"/>
            <path d="M50 30 Q52 50 50 70" stroke="#8B9D7F" strokeWidth="2"/>
          </svg>
        </div>
        <div className="absolute bottom-1/3 right-24 w-26 h-26 md:w-34 md:h-34 opacity-18 rotate-30">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="50" cy="50" rx="33" ry="19" transform="rotate(15 50 50)" fill="#8B9D7F"/>
            <path d="M50 33 Q47 50 50 67" stroke="#75866D" strokeWidth="2"/>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              className="bg-white/50 backdrop-blur-sm rounded-3xl px-6 py-10 sm:px-8 sm:py-12 md:px-12 md:py-16 shadow-xl relative overflow-hidden border border-white/30"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ amount: 0.15, once: false }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{ boxShadow: '0 10px 40px -10px rgba(117, 134, 109, 0.15)' }}
            >
              {/* Subtle decorative corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-l-2 border-t-2 border-[#8B9D7F]/50 rounded-tl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-r-2 border-b-2 border-[#8B9D7F]/50 rounded-br-3xl"></div>
              <p className="text-[color:var(--text-secondary)] text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto mb-6 leading-relaxed">
                We help women in midlife who feel dismissed, overwhelmed, or stuck reclaim their energy, balance, and confidence by addressing the root causes of their mental health and hormonal challenges.
              </p>
              <p className="text-[color:var(--text-secondary)] text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto mb-6 leading-relaxed">
                Instead of just masking symptoms, you receive integrative, personalized care—so you can finally feel like yourself again.
              </p>
              <p className="text-[color:var(--text-secondary)] text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto mb-6 leading-relaxed">
                Our belief is that your mental health and hormonal health are deeply connected, and your care should reflect that. Together, we'll create a plan that supports your mind, body, and spirit.
              </p>
              <p className="text-[color:var(--text-primary)] text-lg sm:text-xl md:text-2xl font-bold max-w-4xl mx-auto mb-6 leading-relaxed">
                Now accepting patients across the state of Ohio.
              </p>
              {/* Learn More Button → now points on-page */}
              <motion.div 
                className="mt-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ amount: 0.1 }}
              >
                <motion.a
                  href="#provider"
                  className="inline-flex items-center justify-center text-white text-lg font-semibold px-6 py-3 rounded-full transition-all duration-300"
                  style={{ backgroundColor: '#75866D' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#677560'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#75866D'}
                >
                  Learn More
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
          </div>
        </div>
      </div>

      {/* Inverted wave transition between about sections */}
      <div className="relative h-20 overflow-hidden bg-[color:var(--surface-muted)]">
        <svg className="absolute bottom-0 w-full h-20 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ transform: 'scaleY(-1)' }}>
          <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" fill="currentColor"/>
        </svg>
      </div>

      {/* Section 2: Meet Stephanie */}
      <section id="provider" className="pt-16 pb-32 md:pt-24 md:pb-40 bg-gradient-to-b from-white to-[color:var(--surface)] relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-32 right-10 w-40 h-40 bg-[color:var(--accent)]/15 rounded-full opacity-50 blur-2xl"></div>
        <div className="absolute bottom-32 left-16 w-28 h-28 bg-[color:var(--wheat)]/20 rounded-full opacity-40 blur-xl"></div>
        <div className="absolute top-1/2 left-8 w-16 h-16 bg-[color:var(--pistachio)]/10 rounded-full opacity-35 blur-lg"></div>
        
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 sm:p-8 md:p-12 rounded-2xl shadow-xl border border-[color:var(--neutral-200)]" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-black leading-tight" 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ amount: 0.3, once: false }}
            >
              Meet Your Provider
            </motion.h2>
            <motion.p 
              className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-black leading-relaxed font-semibold" 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ amount: 0.3, once: false }}
            >
              Stephanie Nichols, PMHNP-BC, FNP-BC
            </motion.p>
            <motion.p 
              className="mt-2 text-sm sm:text-base md:text-lg text-black leading-relaxed italic" 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ amount: 0.3, once: false }}
            >
              Dual Board-Certified Practitioner specializing in Hormones & Women&apos;s Mental Health in Columbus, Ohio
            </motion.p>

            <motion.div 
              className="mt-8 md:mt-12 grid gap-8 md:gap-10 md:grid-cols-2 items-start"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ amount: 0.2, once: false }}
            >
              {/* Left column — text */}
              <motion.div 
                className="space-y-4 sm:space-y-6"
                initial={{ opacity: 0, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ amount: 0.2, once: false }}
              >
              <p 
                className="text-base sm:text-lg text-black" 
                style={{ lineHeight: '1.6' }}
              >
                Hi, I'm Stephanie Nichols, MSN, APRN, PMHNP-BC, FNP-BC. As a psychiatric nurse practitioner I believe that mental health and hormonal health are deeply connected—and that your care should be as unique as you are.
              </p>
              <p 
                className="text-base sm:text-lg text-black" 
                style={{ lineHeight: '1.6' }}
              >
                With over 25 years of experience in internal medicine, neurology, and psychiatry, I've seen how life's transitions and challenges can impact both the mind and body. My journey into mental health care was inspired by a desire to provide compassionate, personalized care that addresses the root causes of emotional and physical struggles. I combine traditional medicine with integrative approaches to help women feel empowered, balanced, and truly well.
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
            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                <Image
                  src="/stephanie-headshot.jpg" 
                  alt="Stephanie Nichols" 
                  width={544}
                  height={672}
                  className="rounded-2xl object-cover w-full h-auto"
                  style={{ maxHeight: '600px', objectFit: 'cover' }}
                />
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                  <Image
                    src="/women-s-hormone-therapy-specialist.PNG"
                    alt="Heather Hirsch Academy Women's Hormone Therapy Specialist badge"
                    width={220}
                    height={220}
                    className="w-40 sm:w-44 md:w-48 h-auto"
                  />
                  <Image
                    src="/MemberLogo.png"
                    alt="The Menopause Society 2025 Member badge"
                    width={240}
                    height={120}
                    className="w-48 sm:w-52 md:w-56 h-auto"
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
