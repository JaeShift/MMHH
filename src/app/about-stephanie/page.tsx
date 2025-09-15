"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Image from "next/image";

export default function AboutStephaniePage() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-slate-50">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                About Stephanie Nichols
              </h1>
              <p className="text-xl text-neutral-600 leading-relaxed">
                PMHNP-BC, FNP-BC • Psychiatric Mental Health & Family Nurse Practitioner
              </p>
            </motion.div>
          </div>
        </section>

        {/* Professional Background */}
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ amount: 0.2 }}
                >
                  <h2 className="font-serif text-3xl font-semibold text-slate-900 mb-6">
                    Professional Background
                  </h2>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Stephanie's journey in healthcare began over three decades ago, driven by a passion for women's health and a recognition of the unique challenges women face during midlife transitions. Her extensive experience spans both acute care and outpatient settings, giving her a comprehensive understanding of the full spectrum of women's health needs.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      After completing her advanced practice nursing education, Stephanie specialized in psychiatric mental health and family practice. Her dual certification allows her to address both the physical and mental aspects of women's health, recognizing that these are often interconnected, especially during hormonal transitions.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      Stephanie's career includes a decade at Nationwide Children's Hospital, where she developed expertise in complex patient care and family-centered approaches. This experience, combined with years in internal medicine, provides her with a unique perspective on the continuum of care from adolescence through adulthood.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                  viewport={{ amount: 0.2 }}
                  className="relative"
                >
                  <div className="absolute -inset-3 bg-slate-200/40 blur-sm" aria-hidden></div>
                  <div className="absolute right-6 top-6 h-40 w-40 bg-[#849468]/20" aria-hidden></div>
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
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy of Care */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ amount: 0.2 }}
                className="text-center"
              >
                <h2 className="font-serif text-3xl font-semibold text-slate-900 mb-8">
                  Philosophy of Care
                </h2>
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                    Stephanie believes in a collaborative approach to care, where patients are active partners in their health journey. She takes time to listen, understand each woman's unique situation, and develop personalized treatment plans that align with individual goals and preferences.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                    Her practice is built on the foundation of evidence-based medicine, combined with a deep respect for the complexity of women's health. She understands that there's no one-size-fits-all approach to mental health and hormone management, which is why she offers both traditional and alternative treatment options.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Stephanie founded Modern Mental Health & Hormones to offer compassionate, stigma-free care tailored to women navigating stress, sleep issues, and hormonal change. Her approach blends evidence-based medication management with holistic, integrative therapies—always aligned with your goals and preferences.
                  </p>
                </div>
              </motion.div>
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
                <h2 className="font-serif text-3xl font-semibold text-slate-900 mb-8">
                  Credentials & Certifications
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                    <h3 className="font-semibold text-slate-900 mb-4">Nursing Credentials</h3>
                    <ul className="text-slate-600 space-y-2">
                      <li>• PMHNP-BC (Psychiatric Mental Health Nurse Practitioner)</li>
                      <li>• FNP-BC (Family Nurse Practitioner)</li>
                      <li>• NAMS Certified Menopause Practitioner</li>
                      <li>• 30+ years in healthcare</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                    <h3 className="font-semibold text-slate-900 mb-4">Specializations</h3>
                    <ul className="text-slate-600 space-y-2">
                      <li>• Women's mental health</li>
                      <li>• Hormone therapy and management</li>
                      <li>• Perimenopause and menopause care</li>
                      <li>• Telehealth practice</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.2 }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="font-serif text-3xl font-semibold text-slate-900 mb-6">
                Ready to Work Together?
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                Schedule a consultation to discuss your specific needs and develop a personalized treatment plan that aligns with your goals and preferences.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.a
                  href="mailto:info@modernmhh.com"
                  className="inline-flex items-center bg-[#849468] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#596163] transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request Appointment
                </motion.a>
                <motion.a
                  href="/#services"
                  className="inline-flex items-center text-[#849468] font-medium hover:text-[#596163] transition-colors duration-300"
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
        <section className="py-8">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <Link
                href="/#about"
                className="inline-flex items-center text-[#849468] hover:text-[#596163] transition-colors duration-300"
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
    </>
  );
}
