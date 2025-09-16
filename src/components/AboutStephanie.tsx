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

      {/* Section 2: Meet Stephanie */}
      <section className="py-20 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl">Meet Your Provider</h2>
          <p className="mt-4 text-lg text-neutral-600">Stephanie Nichols, PMHNP-BC, FNP-BC, NCMP</p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {/* Left column — text */}
            <div className="space-y-4">
              <p>With over 30 years in healthcare, I&apos;ve had the privilege of walking alongside patients through every stage of life from bedside care to clinical leadership, pediatrics to internal medicine.</p>
              <p>For more than a decade, I served at Nationwide Children&apos;s Hospital, first as a nurse and later as a manager within the neurology and neurosurgery unit. In 2010, I transitioned into adult care, joining an internal medicine practice where I continue to care for patients today.</p>
              <p>I&apos;m passionate about helping women navigate mid-life transitions with comprehensive, stigma-free support that addresses both mental health and hormonal health.</p>
              <ul className="mt-4 list-disc pl-5">
                <li>Dual board-certified PMHNP-BC & FNP-BC</li>
                <li>NAMS Certified Menopause Practitioner</li>
                <li>Telehealth across Ohio</li>
              </ul>

            </div>
            <img src="/stephanie-headshot.jpg" alt="Stephanie Nichols" className="rounded-2xl object-cover w-full h-full" />
          </div>
        </div>
      </section>

      {/* Divider line */}
      <div className="w-full h-px bg-slate-300 mt-16 mb-8"></div>

    </div>
  );
}
