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
      <section id="about" className="relative py-20 md:py-32 bg-gradient-to-b from-[color:var(--surface)] to-[color:var(--surface-muted)] overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-8 opacity-25 w-40 h-40 md:w-52 md:h-52 rotate-12">
            <Image src="/nature.png" alt="" fill className="object-contain" />
          </div>
          <div className="absolute top-1/3 right-8 opacity-20 w-44 h-44 md:w-56 md:h-56 -rotate-12 scale-x-[-1]">
            <Image src="/nature.png" alt="" fill className="object-contain" />
          </div>
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
                  <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-[#8B9D7F]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#8B9D7F]"></div>
                  <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-[#8B9D7F]"></div>
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

      {/* Elegant transition */}
      <div className="relative h-20 overflow-hidden">
        <svg className="absolute top-0 w-full h-20 text-[color:var(--surface-muted)]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"/>
        </svg>
      </div>

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
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                { title: "Depression & Anxiety", icon: "🧠", color: "from-[#75866D] to-[#8B9D7F]" },
                { title: "PMDD & Postpartum", icon: "❤️", color: "from-[#8B9D7F] to-[#9FAE93]" },
                { title: "Perimenopause & Menopause", icon: "✨", color: "from-[#9FAE93] to-[#75866D]" },
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#8B9D7F]/30"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                  <div className="relative z-10 text-center">
                    <div className="text-4xl mb-3">{service.icon}</div>
                    <h3 className="text-lg font-semibold text-[color:var(--text-primary)] mb-2">{service.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center">
              <motion.a
                href="/services"
                className="inline-flex items-center justify-center bg-[#75866D] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#677560] transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Services
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Subtle wave transition */}
      <div className="relative h-14 overflow-hidden bg-[color:var(--surface-muted)]">
        <svg className="absolute bottom-0 w-full h-14 text-[color:var(--surface)]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" fill="currentColor"/>
        </svg>
      </div>

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
                <div className="absolute inset-0 bg-gradient-to-br from-[#75866D]/10 to-[#8B9D7F]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#75866D] to-[#8B9D7F] rounded-full flex items-center justify-center mb-4 mx-auto">
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
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B9D7F]/10 to-[#9FAE93]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#8B9D7F] to-[#9FAE93] rounded-full flex items-center justify-center mb-4 mx-auto">
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

      {/* Elegant transition */}
      <div className="relative h-20 overflow-hidden bg-[#EBE4D6]">
        <svg className="absolute top-0 w-full h-20 text-[color:var(--surface-muted)]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"/>
        </svg>
      </div>

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
              className="relative bg-gradient-to-br from-[#75866D] via-[#8B9D7F] to-[#9FAE93] rounded-3xl p-10 md:p-16 shadow-2xl mb-10 overflow-hidden"
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
                <div className="flex justify-center mb-6">
                  <svg className="w-12 h-12 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <blockquote className="text-xl md:text-2xl text-white font-light italic mb-6 max-w-4xl mx-auto text-center leading-relaxed">
                  &quot;Real patient experiences and success stories from women who have received care at Modern MHH.&quot;
                </blockquote>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                  <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                  <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                </div>
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

      {/* Subtle wave transition */}
      <div className="relative h-14 overflow-hidden bg-[color:var(--surface-muted)]">
        <svg className="absolute bottom-0 w-full h-14 text-[color:var(--surface)]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" fill="currentColor"/>
        </svg>
      </div>

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
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#8B9D7F]/10 to-transparent rounded-bl-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#75866D]/10 to-transparent rounded-tr-3xl"></div>
              
              <div className="text-center">
                <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-[#75866D] mb-3 font-semibold">Common Questions</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black mb-6">Frequently Asked Questions</h2>
                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-[#8B9D7F]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#8B9D7F]"></div>
                  <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-[#8B9D7F]"></div>
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

      {/* Elegant wave transition to contact section */}
      <div className="relative h-18 overflow-hidden bg-[color:var(--surface-muted)]">
        <svg className="absolute bottom-0 w-full h-18 text-[color:var(--surface)]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"/>
        </svg>
      </div>

      {/* CONTACT */}
      <section id="contact" className="relative bg-gradient-to-b from-[color:var(--surface)] to-[color:var(--surface-muted)] py-12 sm:py-16 md:py-20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large circular gradients */}
          <div className="absolute top-10 left-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-br from-[#8B9D7F]/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] bg-gradient-to-tl from-[#75866D]/15 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-[36rem] sm:h-[36rem] md:w-[48rem] md:h-[48rem] bg-stone-200/30 rounded-full blur-3xl"></div>
          
          {/* Nature PNG botanical elements */}
          <div className="absolute top-20 right-16 opacity-15 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rotate-45">
            <Image src="/nature.png" alt="" fill className="object-contain" />
          </div>
          <div className="absolute bottom-32 left-12 opacity-15 w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 -rotate-12 scale-x-[-1]">
            <Image src="/nature.png" alt="" fill className="object-contain" />
          </div>
          
          {/* Custom SVG leaf accents */}
          <div className="absolute top-1/3 left-8 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 opacity-15 rotate-12">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="50" cy="50" rx="36" ry="21" transform="rotate(-25 50 50)" fill="#8B9D7F"/>
              <path d="M50 31 Q48 50 50 69" stroke="#75866D" strokeWidth="2"/>
            </svg>
          </div>
          <div className="absolute bottom-1/4 right-16 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 opacity-15 -rotate-45">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="50" cy="50" rx="38" ry="22" transform="rotate(30 50 50)" fill="#8B9D7F"/>
              <path d="M50 29 Q45 50 50 71" stroke="#75866D" strokeWidth="2.5"/>
            </svg>
          </div>
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
