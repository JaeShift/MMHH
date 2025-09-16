"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutStephanie() {
  return (
    <div className="w-full">
      {/* Section 1: About Modern Mental Health & Hormones */}
      <div id="about" className="w-full pt-12 pb-16 md:pt-16 md:pb-20 bg-slate-100">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <p className="tracking-wider text-sm font-semibold text-slate-500 mb-4">
                ABOUT MODERN MENTAL HEALTH & HORMONES
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight mb-6">
                Specialized Care for Women
              </h2>
              <p className="text-slate-700 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 leading-6">
                We specialize in comprehensive mental health and hormone care for women navigating life&apos;s transitions. Our practice combines evidence-based medicine with personalized, compassionate care.
              </p>
              <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto leading-6">
                From stress and sleep challenges to hormonal changes and mood concerns, we provide stigma-free support tailored to your unique needs and goals.
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
                  href="#about"
                  className="inline-flex items-center text-[color:var(--brand-1)] font-medium hover:text-[color:var(--brand-2)] transition-colors duration-300 group"
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

      {/* Section 2: Meet Stephanie (content + headshot) */}
      <div id="provider" className="pt-8 pb-16 md:pt-12 md:pb-24 relative">
        <div className="absolute inset-0 pattern-dots"></div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left column — text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="order-2 lg:order-1"
            >
              <div className="bg-slate-50 -mx-4 px-16 py-8 shadow-sm border border-slate-200">
              <p className="tracking-wider text-sm font-semibold text-slate-500 mb-3">MEET YOUR PROVIDER</p>
              <h1 className="italic text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4" style={{fontFamily: 'var(--font-serif)', textShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
                Stephanie Nichols
              </h1>
              <p className="text-xl md:text-2xl text-slate-700 mb-2 leading-6">
                PMHNP-BC, FNP-BC, BSN, RN
              </p>
              <p className="text-lg md:text-xl text-slate-600 mb-2 leading-6">
                Founder | Psychiatric Mental Health & Family Nurse Practitioner
              </p>
              <p className="text-lg md:text-xl text-slate-600 mb-6 leading-6">
                NAMS Certified Menopause Practitioner
              </p>

              <div className="prose prose-slate max-w-none">
                <p className="mb-4 leading-6 text-lg md:text-xl">
                  With over 30 years in healthcare, I've had the privilege of walking alongside patients through every stage of life from bedside care to clinical leadership, pediatrics to internal medicine. My career began as a nurse's aide and grew into a lifelong calling. I earned my BSN in 1998, my Master's in Family Practice Nursing in 2010, and most recently, my post-master's certification as a Psychiatric Mental Health Nurse Practitioner in 2024.
                </p>
                <p className="mb-4 leading-6 text-lg md:text-xl">
                  For more than a decade, I served at Nationwide Children's Hospital, first as a nurse and later as a manager within the neurology and neurosurgery unit. In 2010, I transitioned into adult care, joining an internal medicine practice where I continue to care for patients today. Over the years, I've seen a growing need especially among professional women for compassionate, stigma-free support that addresses both mental health and hormonal health. That need inspired me to create Modern Mental Health and Hormones.
                </p>
                <p className="mb-4 leading-6 text-lg md:text-xl">
                  I am deeply passionate about helping women navigate the emotional and physical challenges of midlife. Stress, shifting hormones, and invisible burdens can steal energy and joy, but they don't have to. As a NAMS-certified menopause practitioner, I specialize in the unique intersection of hormonal and mental health, offering women the tools to reclaim their vitality and confidence.
                </p>
              </div>

              {/* Read More Button */}
              <motion.div
                className="mt-6 mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.a
                  href="/about-stephanie"
                  className="inline-flex items-center text-[#2a302d] hover:text-[#6b8c4a] font-medium transition-colors duration-150"
                  whileHover={{ scale: 1.05, x: 4, transition: { duration: 0.15 } }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read More
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

              {/* Quick facts chips */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "30+ years in care",
                  "Dual‑certified NP",
                  "NAMS certified",
                ].map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-base md:text-lg text-slate-700 shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
              </div>
            </motion.div>

            {/* Right column — headshot */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative max-w-md mx-auto lg:max-w-none">
                <motion.div 
                  className="absolute -inset-3 bg-slate-200/40 blur-sm" 
                  aria-hidden
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                ></motion.div>
                <motion.div 
                  className="relative bg-white p-2 shadow-xl border border-slate-200"
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <motion.div 
                    className="absolute -top-8 -bottom-8 left-0 right-0 translate-x-12 border border-slate-200 bg-white shadow-xl" 
                    aria-hidden
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 48 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  ></motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <Image
                      src="/stephanie-headshot.jpg"
                      alt="Stephanie Nichols, Nurse Practitioner"
                      width={400}
                      height={500}
                      className="relative z-10 w-full h-auto object-cover"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Divider line */}
      <div className="w-full h-px bg-slate-300 mt-16 mb-8"></div>

    </div>
  );
}
