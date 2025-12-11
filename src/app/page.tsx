"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FocusAreas from "../components/FocusAreas";
import AboutStephanie from "../components/AboutStephanie";
import Telehealth from "../components/Telehealth";
import Testimonials from "../components/Testimonials";
import Insurance from "../components/Insurance";
import ContactForm from "../components/ContactForm";

export default function Page() {
  return (
    <>
      {/* Development Notice Banner */}
      <motion.div
        className="text-white text-center py-3 px-4 border-b border-[#677560] fixed top-0 left-0 right-0 z-[60]"
        style={{ backgroundColor: '#75866D' }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
              <span className="font-semibold text-sm sm:text-base">Practice Opening Soon</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30"></div>
            <div className="text-sm sm:text-base">
              <span className="font-medium">Finalizing Clinical Procedures</span>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-white/90 mt-1">
            Appointment requests will be available shortly as I complete my opening preparations
          </p>
        </div>
      </motion.div>

      {/* Header / Navigation */}
      <Header />

      {/* Main content - no extra padding needed with sticky header */}
      <div>
      {/* HERO */}
      <HeroSection />

      {/* Smooth transition from hero to about */}
      <div className="relative h-24 overflow-hidden">
        <svg className="absolute bottom-0 w-full h-24 text-[color:var(--surface)]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" fill="currentColor"/>
        </svg>
      </div>

      {/* ABOUT PREVIEW */}
      <section id="about" className="relative py-20 md:py-32 bg-[color:var(--surface)] overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#8B9D7F]/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/50 backdrop-blur-sm rounded-3xl px-8 py-12 md:px-12 md:py-16 shadow-xl border border-white/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-l-2 border-t-2 border-[#8B9D7F]/50 rounded-tl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-r-2 border-b-2 border-[#8B9D7F]/50 rounded-br-3xl"></div>
              
              <div className="text-center">
                <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-[#75866D] mb-3 font-semibold">Meet Your Provider</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black mb-6">Your Provider</h2>
                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className="h-px w-12 sm:w-16 bg-[#8B9D7F]/30"></div>
                  <div className="w-2 h-2 rounded-full bg-[#8B9D7F]"></div>
                  <div className="h-px w-12 sm:w-16 bg-[#8B9D7F]/30"></div>
                </div>
                <p className="text-lg sm:text-xl text-[color:var(--text-secondary)] mb-8 max-w-3xl mx-auto leading-relaxed">
                  Meet Stephanie Nichols, PMHNP-BC, FNP-BC — a dual board-certified practitioner with over 25 years of experience specializing in women&apos;s mental health and hormone care.
                </p>
                <motion.a
                  href="/about"
                  className="inline-flex items-center justify-center bg-[#75866D] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#677560] transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More About Your Provider
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section id="services" className="relative py-20 md:py-32 bg-[color:var(--surface-muted)] overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#8B9D7F]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-[600px] h-[600px] bg-[#75866D]/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-[#75866D] mb-3 font-semibold">Comprehensive Care</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black mb-4">Your Care</h2>
              <p className="text-lg sm:text-xl text-[color:var(--text-secondary)] max-w-3xl mx-auto leading-relaxed mb-8">
                Comprehensive mental health and hormone care services tailored to your unique needs.
              </p>
            </div>
            
            {/* Service Cards Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Depression & Anxiety" },
                { title: "PMDD & Postpartum" },
                { title: "Perimenopause & Menopause" },
                { title: "Brain Fog & Focus" },
                { title: "Sleep & Insomnia" },
                { title: "Medication Management" },
              ].map((service, index) => {
                return (
                  <motion.div
                    key={service.title}
                    className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#8B9D7F]/30 flex flex-col"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="absolute inset-0 bg-[#8B9D7F]/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
                    <div className="relative z-10 text-center flex flex-col flex-grow">
                      <h3 className="text-lg font-semibold text-[color:var(--text-primary)] mb-4">{service.title}</h3>
                      <div className="mt-auto pt-4">
                        <motion.a
                          href="/services"
                          className="inline-flex items-center text-[#75866D] text-sm font-semibold hover:text-[#677560] transition-all duration-300 underline underline-offset-4"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Learn More
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* TELEHEALTH PREVIEW */}
      <section id="telehealth" className="relative py-20 md:py-32 bg-[#EBE4D6] overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#8B9D7F]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#75866D]/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-[#75866D] mb-3 font-semibold">Your Visit</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black mb-4">Flexible Care Options</h2>
              <p className="text-lg sm:text-xl text-[color:var(--text-secondary)] max-w-3xl mx-auto leading-relaxed mb-8">
                Choose the appointment style that works best for you
              </p>
            </div>
            
            {/* Split Design: Telehealth vs In-Person */}
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <motion.div
                className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-[#8B9D7F]/20 group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -8 }}
              >
                <div className="absolute inset-0 bg-[#75866D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#75866D] rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-[color:var(--text-primary)] mb-3 text-center">Telehealth Visits</h3>
                  <p className="text-base text-[color:var(--text-secondary)] text-center leading-relaxed">
                    Secure, HIPAA-compliant, convenient scheduling, anywhere in Ohio
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-[#8B9D7F]/20 group"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -8 }}
              >
                <div className="absolute inset-0 bg-[#8B9D7F]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#8B9D7F] rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-[color:var(--text-primary)] mb-3 text-center">In-Person Visits</h3>
                  <p className="text-base text-[color:var(--text-secondary)] text-center leading-relaxed">
                    Face-to-face, comfortable, convenient location in Columbus
                  </p>
                </div>
              </motion.div>
      </div>

            <div className="text-center">
              <motion.a
                href="/telehealth"
                className="inline-flex items-center justify-center bg-[#75866D] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#677560] transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn About Appointment Options
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS PREVIEW */}
      <section id="testimonials" className="relative py-20 md:py-32 bg-[color:var(--surface-muted)] overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-[#8B9D7F]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#75866D]/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-[#75866D] mb-3 font-semibold">Patient Stories</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black mb-4">Patient Experience</h2>
            </div>
            
            {/* Testimonial Quote Card */}
            <motion.div
              className="relative bg-[#75866D] rounded-3xl p-10 md:p-16 shadow-2xl mb-10 overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-2xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
              </div>
              
              <div className="relative z-10">
                <p className="text-xl md:text-2xl text-white font-light mb-6 max-w-4xl mx-auto text-center leading-relaxed">
                  Real patient experiences and success stories from women who have received care at Modern MHH.
                </p>
              </div>
            </motion.div>
            
            <div className="text-center">
              <motion.a
                href="/testimonials"
                className="inline-flex items-center justify-center bg-white text-[#75866D] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#75866D] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-[#75866D]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read Patient Stories
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section id="faq" className="relative py-20 md:py-32 bg-[color:var(--surface)] overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute top-20 right-10 w-80 h-80 opacity-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#8B9D7F" d="M41.3,-71.5C51.8,-64.2,57.4,-50.2,62.8,-36.5C68.2,-22.8,73.4,-9.4,73.1,4.2C72.8,17.8,67,31.6,58.4,42.8C49.8,54,38.4,62.6,25.3,67.8C12.2,73,-2.6,74.8,-17.1,72.3C-31.6,69.8,-45.8,63,-56.8,52.4C-67.8,41.8,-75.6,27.4,-78.3,12.1C-81,-3.2,-78.6,-19.4,-71.8,-32.8C-65,-46.2,-53.8,-56.8,-41.3,-63.5C-28.8,-70.2,-14.4,-73,0.4,-73.7C15.2,-74.4,30.8,-78.8,41.3,-71.5Z" transform="translate(100 100)" />
        </svg>
      </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/50 backdrop-blur-sm rounded-3xl px-8 py-12 md:px-12 md:py-16 shadow-xl border border-white/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#8B9D7F]/10 rounded-bl-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#75866D]/10 rounded-tr-3xl"></div>
              
              <div className="text-center">
                <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-[#75866D] mb-3 font-semibold">Common Questions</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black mb-6">Frequently Asked Questions</h2>
                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className="h-px w-12 sm:w-16 bg-[#8B9D7F]/30"></div>
                  <div className="w-2 h-2 rounded-full bg-[#8B9D7F]"></div>
                  <div className="h-px w-12 sm:w-16 bg-[#8B9D7F]/30"></div>
                </div>
                <p className="text-lg sm:text-xl text-[color:var(--text-secondary)] mb-8 max-w-3xl mx-auto leading-relaxed">
                  Common questions about services, insurance, appointments, and treatment options.
                </p>
                <motion.a
                  href="/faq"
                  className="inline-flex items-center justify-center bg-[#75866D] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#677560] transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All FAQs
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative bg-[color:var(--surface)] py-12 sm:py-16 md:py-20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large circular gradients */}
          <div className="absolute top-10 left-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#8B9D7F]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] bg-[#75866D]/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-[36rem] sm:h-[36rem] md:w-[48rem] md:h-[48rem] bg-stone-200/30 rounded-full blur-3xl"></div>
          
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-[color:var(--text-primary)]">
              More Questions?
            </h2>
            <p className="text-sm sm:text-base text-[color:var(--text-muted)] font-semibold uppercase tracking-[0.3em] mb-4 sm:mb-6">
              Contact Me
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-[color:var(--text-secondary)] leading-relaxed max-w-3xl mx-auto">
              Use the secure form below to ask a question, request more information, or share what you need.
            </p>
            <p className="text-base sm:text-lg text-[color:var(--text-muted)] mt-4 max-w-2xl mx-auto">
              Your message is secure &amp; HIPAA-compliant. All appointments are in-person or virtual in Ohio.
            </p>
          </div>

          <ContactForm />

          {/* Optional fallback info */}
          <div className="max-w-2xl mx-auto text-center mt-8 text-sm text-[color:var(--text-muted)]">
            Prefer email?{" "}
            <a className="underline text-black hover:text-gray-700" href="mailto:info@modernmhh.com">
              info@modernmhh.com
            </a>
            <br />
            Virtual and in-person appointments • Monday–Friday, 9am–5pm
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#C5B9AA] border-t border-[#B5A999] py-8">
        <motion.div
          className="container mx-auto px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="text-xs text-[color:var(--text-muted)]">
              <p className="mb-1">
                © {new Date().getFullYear()} Modern Mental Health &amp; Hormones. All rights reserved.
              </p>
              <p className="text-[color:var(--text-secondary)]">
                Serving Columbus, Ohio
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
              <a 
                href="/privacy" 
                className="text-xs font-medium text-[color:var(--text-primary)] hover:text-[#75866D] transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms" 
                className="text-xs font-medium text-[color:var(--text-primary)] hover:text-[#75866D] transition-colors"
              >
                Terms of Use
              </a>
              <a 
                href="/financial-disclosure" 
                className="text-xs font-medium text-[color:var(--text-primary)] hover:text-[#75866D] transition-colors"
              >
                Financial Disclosure
              </a>
            </div>
          </div>
        </motion.div>
      </footer>
      </div>
    </>
  );
}
