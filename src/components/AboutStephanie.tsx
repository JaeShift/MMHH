"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// Drop this component in place of your current About component to preview the layout only.
// Nothing here changes global styles.
export default function AboutStephanie() {
  return (
    <div className="w-full">
      {/* Section 1: About Modern Mental Health & Hormones */}
      <div className="w-full pt-12 pb-16 md:pt-16 md:pb-20 bg-slate-100">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <p className="tracking-wider text-sm font-semibold text-slate-500 mb-4">ABOUT MODERN MENTAL HEALTH & HORMONES</p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight mb-6">
                Specialized Care for Women
              </h2>
              <p className="text-slate-700 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8">
                We specialize in comprehensive mental health and hormone care for women navigating life&apos;s transitions. Our practice combines evidence-based medicine with personalized, compassionate care.
              </p>
              <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
                From stress and sleep challenges to hormonal changes and mood concerns, we provide stigma-free support tailored to your unique needs and goals.
              </p>
              
              {/* Read More Button */}
              <motion.div 
                className="mt-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ amount: 0.01 }}
              >
                <motion.a
                  href="/about-practice"
                  className="inline-flex items-center text-[#849468] font-medium hover:text-[#596163] transition-colors duration-300 group"
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
          
          {/* Credibility boxes moved here */}
          <div className="mt-12 grid sm:grid-cols-3 gap-4 max-w-6xl mx-auto px-6 lg:px-8">
            {[
              {
                title: "Evidence‑based & integrative",
                body: "Medication management plus therapy‑aligned, lifestyle‑first care.",
              },
              {
                title: "Telehealth practice",
                body: "Convenient virtual care from the comfort of your home.",
              },
              {
                title: "Personal, unrushed visits",
                body: "Care plans that fit your goals and preferences.",
              },
            ].map((c) => (
              <div key={c.title} className="border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-medium text-slate-900 mb-1">{c.title}</h3>
                <p className="text-slate-600 text-sm">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Section 2: Meet Stephanie (content + headshot) */}
      <div id="provider" className="pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="container mx-auto px-6 lg:px-8">
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
              <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-4">
                Stephanie Nichols
              </h1>
              <p className="text-lg md:text-xl text-slate-700 mb-2">
                PMHNP-BC, FNP-BC
              </p>
              <p className="text-base text-slate-600 mb-6">
                Psychiatric Mental Health & Family Nurse Practitioner • NAMS Certified Menopause Practitioner
              </p>

              <div className="prose prose-slate max-w-none">
                <p>
                  With 30+ years in healthcare, Stephanie has supported patients through every stage of life—from bedside
                  care to clinical leadership. After a decade at Nationwide Children&apos;s Hospital and years in internal
                  medicine, she founded Modern Mental Health & Hormones to offer compassionate, stigma‑free care tailored
                  to women navigating stress, sleep issues, and hormonal change.
                </p>
                <p>
                  Her approach blends evidence‑based medication management with holistic, integrative therapies—always
                  aligned with your goals and preferences.
                </p>
              </div>

              {/* Quick facts chips */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "30+ years in care",
                  "Dual‑certified NP",
                  "NAMS certified",
                  "Women's mental health",
                ].map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Learn More Link */}
              <div className="mt-8">
                <motion.a
                  href="/about-stephanie"
                  className="inline-flex items-center text-[#849468] font-medium hover:text-[#596163] transition-colors duration-300 group"
                  whileHover={{ scale: 1.05, x: 4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More About Stephanie
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
              </div>
              </div>
            </motion.div>

            {/* Right column — headshot with layered frame */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="relative order-1 lg:order-2"
            >
              <div className="absolute -inset-3 bg-slate-200/40 blur-sm" aria-hidden></div>
              <div className="absolute right-6 top-6 h-40 w-40 bg-[#849468]/20" aria-hidden></div>
              <div className="absolute -top-8 -bottom-8 left-0 right-0 translate-x-12 border border-slate-200 bg-white shadow-xl" aria-hidden></div>
              <div className="relative p-3">
                <div className="overflow-hidden">
                  <Image
                    src="/stephanie-headshot.jpg"
                    alt="Stephanie Nichols headshot"
                    width={900}
                    height={900}
                    className="h-auto w-full object-cover"
                    priority
                  />
                </div>
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
