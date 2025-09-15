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
              <p className="text-xl text-neutral-600 leading-relaxed mb-2">
                PMHNP-BC, FNP-BC, BSN, RN
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-2">
                Founder | Psychiatric Mental Health & Family Nurse Practitioner
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                NAMS Certified Menopause Practitioner
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
                      With over 30 years in healthcare, I&apos;ve had the privilege of walking alongside patients through every stage of life — from bedside care to clinical leadership, pediatrics to internal medicine. My career began as a nurse&apos;s aide and grew into a lifelong calling. I earned my BSN in 1998, my Master&apos;s in Family Practice Nursing in 2010, and most recently, my post-master&apos;s certification as a Psychiatric Mental Health Nurse Practitioner in 2024.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      For more than a decade, I served at Nationwide Children&apos;s Hospital, first as a nurse and later as a manager within the neurology and neurosurgery unit. In 2010, I transitioned into adult care, joining an internal medicine practice where I continue to care for patients today. Over the years, I&apos;ve seen a growing need — especially among professional women — for compassionate, stigma-free support that addresses both mental health and hormonal health. That need inspired me to create Modern Mental Health and Hormones.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      I am deeply passionate about helping women navigate the emotional and physical challenges of midlife. Stress, shifting hormones, and invisible burdens can steal energy and joy, but they don&apos;t have to. As a NAMS-certified menopause practitioner, I specialize in the unique intersection of hormonal and mental health, offering women the tools to reclaim their vitality and confidence.
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
                    At Modern Mental Health and Hormones, our philosophy is simple but powerful:
                  </p>
                  <p className="text-2xl font-semibold text-slate-800 mb-6 italic text-center">
                    Midlife is not a decline — it&apos;s a transformation.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                    We empower women to let go of stress, rediscover comfort in their own bodies, and reignite the energy to thrive in both work and life. By blending traditional medical expertise with holistic and integrative approaches, I tailor care to meet your personal goals and preferences.
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
                      <li>• Women&apos;s mental health</li>
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
