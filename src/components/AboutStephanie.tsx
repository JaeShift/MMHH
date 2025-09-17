"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutStephanie() {
  return (
    <>
    <div className="w-full">
      {/* Section 1: About Modern Mental Health & Hormones */}
      <div id="about" className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-b from-[color:var(--surface)] to-[color:var(--surface-muted)] relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[color:var(--accent)]/20 rounded-full opacity-60 blur-xl"></div>
        <div className="absolute top-40 right-16 w-24 h-24 bg-[color:var(--wheat)]/15 rounded-full opacity-50 blur-lg"></div>
        <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-[color:var(--bisque)]/25 rounded-full opacity-40 blur-md"></div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <p className="tracking-wider text-base md:text-lg font-semibold text-[color:var(--text-muted)] mb-4">
                ABOUT MODERN MENTAL HEALTH & HORMONES
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[color:var(--text-primary)] leading-tight mb-6">
                Specialized Care for Women
              </h2>
              <p className="text-[color:var(--text-secondary)] text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto mb-8 leading-relaxed">
                I specialize in comprehensive mental health and hormone care for women navigating life&apos;s transitions. My practice combines evidence-based medicine with personalized, compassionate care.
              </p>
              <p className="text-[color:var(--text-secondary)] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                From stress and sleep challenges to hormonal changes and mood concerns, I provide stigma-free support tailored to your unique needs and goals.
              </p>

              {/* Learn More Button → now points on-page */}
              <motion.div 
                className="mt-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ amount: 0.01 }}
              >
                <motion.a
                  href="#provider"
                  className="inline-flex items-center text-[color:var(--mocha)] text-lg font-medium hover:text-[color:var(--espresso)] transition-colors duration-300 group"
                  whileHover={{ scale: 1.05, x: 4 }}
                  whileTap={{ scale: 0.95 }}
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
        
        <div className="container relative z-10">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-[color:var(--neutral-200)]" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
            <motion.h2 
              className="text-4xl md:text-5xl font-semibold text-black" 
              style={{ lineHeight: '1.5' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ amount: 0.3 }}
            >
              Meet Your Provider
            </motion.h2>
            <motion.p 
              className="mt-6 text-xl text-black" 
              style={{ lineHeight: '1.5' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ amount: 0.3 }}
            >
              Stephanie Nichols, PMHNP-BC, FNP-BC, NCMP
            </motion.p>

            <motion.div 
              className="mt-12 grid gap-10 md:grid-cols-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ amount: 0.2 }}
            >
              {/* Left column — text */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ amount: 0.2 }}
              >
              <motion.p 
                className="text-lg text-black" 
                style={{ lineHeight: '1.5' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ amount: 0.3 }}
              >
                With over 30 years in healthcare, I&apos;ve had the privilege of walking alongside patients through every stage of life from bedside care to clinical leadership, pediatrics to internal medicine.
              </motion.p>
              <motion.p 
                className="text-lg text-black" 
                style={{ lineHeight: '1.5' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ amount: 0.3 }}
              >
                For more than a decade, I served at Nationwide Children&apos;s Hospital, first as a nurse and later as a manager within the neurology and neurosurgery unit. In 2010, I transitioned into adult care, joining an internal medicine practice where I continue to care for patients today.
              </motion.p>
              <motion.p 
                className="text-lg text-black" 
                style={{ lineHeight: '1.5' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                viewport={{ amount: 0.3 }}
              >
                I&apos;m passionate about helping women navigate life transitions with comprehensive, stigma-free support that addresses both mental health and hormonal health.
              </motion.p>
              <motion.ul 
                className="mt-6 list-disc pl-5 text-lg text-black space-y-2" 
                style={{ lineHeight: '1.5' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                viewport={{ amount: 0.3 }}
              >
                <li>Dual board-certified PMHNP-BC & FNP-BC</li>
                <li>NAMS Certified Menopause Practitioner</li>
                <li>Telehealth across Ohio</li>
              </motion.ul>

              {/* Read More Button */}
              <motion.div 
                className="mt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ amount: 0.2 }}
              >
                <Link href="/about-stephanie">
                  <motion.span
                    className="inline-flex items-center text-[color:var(--mocha)] text-lg font-medium hover:text-[color:var(--espresso)] transition-colors duration-300 cursor-pointer"
                    whileHover={{ scale: 1.05, x: 4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read More About Stephanie
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
                  </motion.span>
                </Link>
              </motion.div>

            </motion.div>
            <motion.div 
              className="flex justify-center md:justify-center md:-mt-32 md:ml-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ amount: 0.2 }}
            >
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Decorative background behind image - removed to fix random square issue */}
                <Image
                  src="/stephanie-headshot.jpg" 
                  alt="Stephanie Nichols" 
                  width={544}
                  height={672}
                  className="rounded-2xl object-cover w-full h-[42rem] md:w-[34rem] md:h-[42rem] relative z-10"
                />
              </motion.div>
            </motion.div>
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
