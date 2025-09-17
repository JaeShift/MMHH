"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Image from "next/image";

export default function AboutStephaniePage() {
  return (
    <div>
      <Header />
      
      <main className="min-h-screen bg-[color:var(--surface)]">
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-black mb-6">
                About Stephanie Nichols
              </h1>
              <p className="text-xl text-black leading-relaxed mb-2">
                PMHNP-BC, FNP-BC, BSN, RN
              </p>
              <p className="text-lg text-black leading-relaxed mb-2">
                Founder | Psychiatric Mental Health & Family Nurse Practitioner
              </p>
              <p className="text-lg text-black leading-relaxed">
                NAMS Certified Menopause Practitioner
              </p>
            </motion.div>
          </div>
        </section>

        {/* Centered Headshot */}
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-md mx-auto">
              <div className="relative">
                <div className="absolute -inset-3 bg-[color:var(--neutral-200)]/40 blur-sm" aria-hidden></div>
                <div className="absolute right-6 top-6 h-40 w-40 bg-[#3b4340]/20" aria-hidden></div>
                <div className="absolute -top-8 -bottom-8 left-0 right-0 translate-x-12 border border-slate-200 bg-white shadow-xl" aria-hidden></div>
                <div className="relative p-3">
                  <div className="overflow-hidden">
                    <Image
                      src="/stephanie-headshot.jpg"
                      alt="Stephanie Nichols headshot"
                      width={400}
                      height={400}
                      className="h-auto w-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy of Care */}
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center">
                <h2 className="font-serif text-3xl font-semibold text-black mb-8">
                  Philosophy of Care
                </h2>
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                    At Modern Mental Health and Hormones, my philosophy is simple but powerful:
                  </p>
                  <p className="text-2xl font-semibold text-slate-800 mb-6 italic text-center">
                    Midlife is not a decline — it&apos;s a transformation.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                    I empower women to let go of stress, rediscover comfort in their own bodies, and reignite the energy to thrive in both work and life. By blending traditional medical expertise with holistic and integrative approaches, I tailor care to meet your personal goals and preferences.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                    I believe in a collaborative approach to care, where patients are active partners in their health journey. I take time to listen, understand each woman&apos;s unique situation, and develop personalized treatment plans that align with individual goals and preferences.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                    My practice is built on the foundation of evidence-based medicine, combined with a deep respect for the complexity of women&apos;s health. I understand that there&apos;s no one-size-fits-all approach to mental health and hormone management, which is why I offer both traditional and alternative treatment options.
                  </p>
                  <p className="text-xl font-semibold text-slate-800 mb-4 text-center">
                    You deserve care that honors all of you — body, mind, and spirit.
                  </p>
                  <p className="text-xl font-semibold text-slate-800 text-center">
                    Let&apos;s take this journey together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials & Certifications */}
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ amount: 0.2 }}
                className="text-center"
              >
                <h2 className="font-serif text-3xl font-semibold text-black mb-8">
                  Credentials & Certifications
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                    <h3 className="font-semibold text-slate-900 mb-4">Nursing Credentials</h3>
                    <ul className="text-slate-600 space-y-2">
                      <li>• PMHNP-BC (Psychiatric Mental Health Nurse Practitioner)</li>
                      <li>• FNP-BC (Family Nurse Practitioner)</li>
                      <li>• BSN (Bachelor of Science in Nursing)</li>
                      <li>• RN (Registered Nurse)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                    <h3 className="font-semibold text-slate-900 mb-4">Specializations</h3>
                    <ul className="text-slate-600 space-y-2">
                      <li>• NAMS Certified Menopause Practitioner</li>
                      <li>• Women&apos;s Mental Health</li>
                      <li>• Hormone Therapy Management</li>
                      <li>• Integrative Health Approaches</li>
                      <li>• PMDD & Cyclical Mood Disorders</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Ready to Work Together */}
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.2 }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="font-serif text-3xl font-semibold text-black mb-6">
                Ready to Work Together?
              </h2>
              <p className="text-black leading-relaxed mb-8 text-lg">
                Schedule a consultation to discuss your specific needs and develop a personalized treatment plan that aligns with your goals and preferences.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.a
                  href="mailto:info@modernmhh.com"
                  className="inline-flex items-center bg-[#75866D] hover:bg-[#677560] text-white px-8 py-4 text-lg font-bold transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request Appointment
                </motion.a>
                <motion.a
                  href="/#services"
                  className="inline-flex items-center text-[#75866D] hover:text-[#677560] text-lg font-bold transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Services
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Back Link */}
        <section className="pb-16">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <Link
                href="/#about"
                className="inline-flex items-center text-[#75866D] hover:text-[#677560] transition-colors duration-300"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Home
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}