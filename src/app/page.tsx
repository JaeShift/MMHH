"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <>
      {/* Header / Navigation */}
      <Header />

      {/* Main content - no extra padding needed with sticky header */}
      <div>
      {/* HERO */}
      <HeroSection />

      {/* INTRO SECTION - Mission Statement */}
      <section className="w-full pt-12 md:pt-16 lg:pt-20 pb-20 md:pb-28 lg:pb-36 bg-gradient-to-b from-[#EBE4D6] to-[#FCF8F0] relative overflow-hidden">
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
              className="bg-white/50 backdrop-blur-sm px-6 py-10 sm:px-8 sm:py-12 md:px-12 md:py-16 shadow-xl relative overflow-hidden border border-white/30"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ amount: 0.15, once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{ boxShadow: '0 10px 40px -10px rgba(117, 134, 109, 0.15)' }}
            >
              {/* Subtle decorative corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-l-2 border-t-2 border-[#8B9D7F]/50"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-r-2 border-b-2 border-[#8B9D7F]/50"></div>
              <p className="text-black text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto mb-6 leading-relaxed">
                I help women in midlife who feel dismissed, overwhelmed, or stuck reclaim their energy, balance, and confidence by addressing the root causes of their mental health and hormonal challenges.
              </p>
              <p className="text-black text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto mb-6 leading-relaxed">
                Instead of just masking symptoms, you receive integrative, personalized care—so you can finally feel like yourself again.
              </p>
              <p className="text-black text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto mb-6 leading-relaxed">
                My belief is that your mental health and hormonal health are deeply connected, and your care should reflect that. Together, I&apos;ll create a plan that supports your mind, body, and spirit.
              </p>
              <p className="text-black text-lg sm:text-xl md:text-2xl font-bold max-w-4xl mx-auto mb-6 leading-relaxed">
                Now accepting patients across the state of Ohio.
              </p>
              {/* Learn More Button */}
              <motion.div 
                className="mt-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ amount: 0.1, once: true }}
              >
                <motion.a
                  href="/about-me"
                  className="inline-flex items-center justify-center text-white text-lg font-semibold px-8 py-4 transition-all duration-300 bg-[#75866D] hover:bg-[#677560]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Subtle curved divider */}
      <div className="relative h-12 pointer-events-none bg-white">
        <div className="absolute bottom-0 w-full h-24 bg-[#EBE4D6]" style={{ borderRadius: '100% 100% 0 0 / 80px 80px 0 0' }}></div>
      </div>

      {/* ABOUT PREVIEW - Split Layout */}
      <section id="about" className="relative pt-0 pb-0 md:pt-0 md:pb-0 lg:pt-0 lg:pb-0 bg-[#EBE4D6] overflow-hidden">
        <div className="relative z-10 py-8">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
            {/* Image Side */}
            <motion.div 
              className="relative w-full overflow-hidden shadow-2xl rounded-sm bg-gray-200"
              style={{ aspectRatio: '4/5', minHeight: '400px' }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Image
                src="/stephanie-headshot.jpg"
                alt="Stephanie Nichols, PMHNP-BC, FNP-BC"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                style={{ objectPosition: 'center 35%', opacity: 1 }}
                priority
                quality={85}
              />
            </motion.div>
            
            {/* Text Side */}
            <motion.div
              className="text-left px-6 lg:px-16 py-12"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="uppercase tracking-[0.25em] text-sm text-[#75866D] mb-4 font-semibold" style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' }}>
                Meet Your Provider
              </p>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-black mb-4 leading-tight" style={{ textShadow: '0 2px 6px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.1)' }}>
                About Me
              </h2>
              
              {/* Decorative underline */}
              <div className="flex justify-center mb-8">
                <div className="h-[2px] w-80 sm:w-96 md:w-[500px] lg:w-[600px] bg-[#75866D] opacity-50"></div>
              </div>
              
              <div className="space-y-6 mb-10">
                <p className="text-lg md:text-xl text-black leading-relaxed font-light">
                  I&apos;m Stephanie Nichols, PMHNP-BC, FNP-BC — a dual board-certified practitioner with over 25 years of experience specializing in women&apos;s mental health and hormone care.
                </p>
                <p className="text-lg text-black leading-relaxed font-light">
                  With extensive expertise in both psychiatric and family practice, I provide compassionate, evidence-based care tailored to your unique needs.
                </p>
              </div>
              
              <motion.a
                href="/about-me"
                className="inline-flex items-center justify-center bg-[#75866D] text-white px-10 py-5 font-medium text-lg hover:bg-[#677560] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Subtle curved divider - flipped (transition to Areas of Care) */}
      <div className="relative h-16 bg-[#FCF8F0] z-20">
        <div className="absolute top-0 w-full h-32 bg-[#EBE4D6]" style={{ borderRadius: '0 0 100% 100% / 0 0 80px 80px' }}></div>
      </div>

      {/* CONDITIONS I TREAT - With Images */}
      <section id="services" className="relative pt-12 pb-24 md:pt-16 md:pb-32 lg:pt-20 lg:pb-40 bg-[#FCF8F0] overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-6xl mx-auto"
            // Avoid “double” motion: children cards animate in, this wrapper just fades in.
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Section Header */}
            <div className="text-center mb-16 pt-8">
              <p className="uppercase tracking-[0.25em] text-sm text-[#75866D] mb-4 font-semibold" style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' }}>
                Comprehensive Care
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-black mb-6 leading-tight" style={{ textShadow: '0 2px 6px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.1)' }}>
                Areas of Care
              </h2>
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-[#8B9D7F]"></div>
                <div className="w-2 h-2 rounded-full bg-[#8B9D7F]"></div>
                <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-[#8B9D7F]"></div>
              </div>
              <p className="text-xl md:text-2xl text-black max-w-3xl mx-auto leading-relaxed font-light">
                I specialize in women&apos;s mental health and hormonal concerns throughout life&apos;s transitions.
              </p>
            </div>
            
            {/* Condition Cards with Images */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Depression & Anxiety", image: "/depression.jpg" },
                { title: "Perimenopause & Menopause", image: "/menopause.jpg" },
                { title: "PMDD & Postpartum", image: "/hormones.jpg" },
                { title: "Brain Fog & Focus", image: "/brainfog.jpg" },
                { title: "Medication Management", image: "/medication.jpg" },
                { title: "Sleep & Insomnia", image: "/sleep.jpg" },
              ].map((condition, index) => {
                return (
                  <motion.div
                    key={condition.title}
                    className="group bg-white overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px", amount: 0.3 }}
                    transition={{ 
                      duration: 0.3, 
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    {/* Image */}
                    <div className="relative w-full bg-gray-200" style={{ aspectRatio: '16/9', minHeight: '192px' }}>
                      <Image
                        src={condition.image}
                        alt={condition.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        style={{ opacity: 1 }}
                        priority={index < 3}
                        quality={85}
                        loading={index < 3 ? "eager" : "lazy"}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#75866D]/60 to-transparent"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 text-center">
                      <h3 className="text-2xl md:text-3xl font-medium text-black mb-4 leading-snug">
                        {condition.title}
                      </h3>
                      <a
                        href="/services#specialty-services"
                        className="inline-flex items-center text-[#75866D] text-base font-medium hover:text-[#677560] transition-all duration-300 underline underline-offset-4 decoration-2 group"
                      >
                        Learn More
                        <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FLEXIBLE CARE OPTIONS */}
      <section id="telehealth" className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-b from-[#EBE4D6] via-[#F5F1E8] to-[#FCF8F0] overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#8B9D7F]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#75866D]/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-[#9FAE93]/5 to-transparent rounded-full"></div>
          
          {/* Logo Background Watermark */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] opacity-[0.12]">
            <Image
              src="/LOGO PNG.png"
              alt=""
              fill
              className="object-contain"
              style={{ pointerEvents: 'none' }}
            />
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="uppercase tracking-[0.25em] text-sm text-[#75866D] mb-4 font-semibold" style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' }}>
              Your Visit
            </p>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-black mb-8 leading-tight" style={{ textShadow: '0 2px 6px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.1)' }}>
              Flexible Care Options
            </h2>
            
            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-20 bg-[#8B9D7F]/30"></div>
              <div className="w-2 h-2 rounded-full bg-[#8B9D7F]"></div>
              <div className="h-px w-20 bg-[#8B9D7F]/30"></div>
            </div>
            
            <p className="text-xl md:text-2xl text-black leading-relaxed font-light mb-12">
              Choose the appointment style that works best for you.
            </p>
            
            {/* Two Options */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div 
                className="relative bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#8B9D7F]/10 overflow-hidden group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -5 }}
              >
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#75866D]/10 to-transparent"></div>
                
                {/* Original camera icon */}
                <div className="mb-6 flex justify-center pt-2">
                  <svg className="w-16 h-16 text-[#75866D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={0.7}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-medium text-black mb-4" style={{ textShadow: '0 2px 6px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.1)' }}>Telehealth Visits</h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-[#75866D] to-transparent mx-auto mb-4"></div>
                <p className="text-lg text-black leading-relaxed font-light">
                  I offer secure, HIPAA-compliant virtual appointments. Available anywhere in Ohio with convenient scheduling.
                </p>
              </motion.div>
              
              <motion.div 
                className="relative bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#8B9D7F]/10 overflow-hidden group"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -5 }}
              >
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#8B9D7F]/10 to-transparent"></div>
                
                {/* Simple geometric person icon with circle */}
                <div className="mb-6 flex justify-center">
                  <svg className="w-20 h-20" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="32" cy="32" r="24" stroke="#8B9D7F" strokeWidth="1.3"/>
                    <circle cx="32" cy="26" r="6" stroke="#8B9D7F" strokeWidth="1.3"/>
                    <path d="M22 44C22 38 26 34 32 34C38 34 42 38 42 44" stroke="#8B9D7F" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-medium text-black mb-4" style={{ textShadow: '0 2px 6px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.1)' }}>In-Person Visits</h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-[#8B9D7F] to-transparent mx-auto mb-4"></div>
                <p className="text-lg text-black leading-relaxed font-light">
                  I also provide face-to-face care in a comfortable, welcoming office environment. Convenient location in Columbus, Ohio.
                </p>
              </motion.div>
            </div>
            
            <motion.a
              href="/telehealth"
              className="inline-flex items-center justify-center bg-[#75866D] text-white px-10 py-5 font-medium text-lg hover:bg-[#677560] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn About Appointment Options
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* PATIENT EXPERIENCE - Split Layout */}
      <section id="testimonials" className="relative py-24 md:py-32 lg:py-40 bg-[#EBE4D6] overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Image Side */}
            <motion.div 
              className="relative w-full overflow-hidden shadow-2xl bg-gray-200"
              style={{ aspectRatio: '4/5', minHeight: '400px' }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Image
                src="/reviews.jpg"
                alt="Patient testimonials"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                style={{ objectPosition: 'center', opacity: 1 }}
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#75866D]/40 to-transparent"></div>
            </motion.div>
            
            {/* Text Side */}
            <motion.div
              className="text-left lg:pl-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="uppercase tracking-[0.25em] text-sm text-[#75866D] mb-4 font-semibold" style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' }}>
                Hear from Patients
              </p>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-black mb-8 leading-tight" style={{ textShadow: '0 2px 6px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.1)' }}>
                Patient Experience
              </h2>
              
              {/* Testimonial Quote */}
              <div className="bg-white p-8 md:p-10 shadow-lg mb-8">
                <p className="text-xl md:text-2xl text-black font-light leading-relaxed italic mb-6">
                  Real patient experiences and success stories from women who have received care at Modern MHH
                </p>
                <p className="text-base text-black font-medium">
                  — Patient Testimonials
                </p>
              </div>
              
              <p className="text-lg text-black leading-relaxed font-light mb-8">
                Join the women who have found balance, clarity, and renewed well-being through my comprehensive mental health and hormone care approach.
              </p>
              
              <motion.a
                href="/testimonials"
                className="inline-flex items-center justify-center bg-[#75866D] text-white px-10 py-5 font-medium text-lg hover:bg-[#677560] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Read more from Patients
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-b from-[#FCF8F0] to-[#EBE4D6] overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#8B9D7F]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#75866D]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="uppercase tracking-[0.25em] text-sm text-[#75866D] mb-4 font-semibold" style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' }}>
              Have Questions?
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-black mb-6 leading-tight" style={{ textShadow: '0 2px 6px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.1)' }}>
              Frequently Asked Questions
            </h2>
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-20 bg-[#8B9D7F]/30"></div>
              <div className="w-2 h-2 rounded-full bg-[#8B9D7F]"></div>
              <div className="h-px w-20 bg-[#8B9D7F]/30"></div>
            </div>
            <p className="text-xl md:text-2xl text-black max-w-3xl mx-auto leading-relaxed font-light">
              Find answers to common questions about my services, insurance, and appointments.
            </p>
          </motion.div>

          {/* FAQ Cards Grid */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {[
              {
                question: "Do you accept insurance?",
                answer: (
                  <div className="space-y-4">
                    <p className="text-base md:text-lg text-black leading-relaxed font-light">
                      Yes! I am now in-network with the following insurance providers:
                    </p>
                    
                    {/* Insurance Logos */}
                    <div className="grid grid-cols-3 gap-4 my-4">
                      <div className="flex items-center justify-center">
                        <div className="relative w-full h-16 flex items-center justify-center">
                          <Image
                            src="/cigna-logo-wallpaper-e1474921230453.webp"
                            alt="Cigna - Evernorth"
                            width={120}
                            height={45}
                            className="object-contain"
                          />
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-center">
                        <div className="relative w-full h-16 flex items-center justify-center">
                          <Image
                            src="/unitedhealthcare.webp"
                            alt="United Healthcare / Optum"
                            width={120}
                            height={45}
                            className="object-contain"
                          />
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-center">
                        <div className="relative w-full h-16 flex items-center justify-center">
                          <Image
                            src="/MedicalMutual.webp"
                            alt="Medical Mutual - Supermed"
                            width={120}
                            height={45}
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              },
              {
                question: "What services do you provide?",
                answer: "I offer comprehensive psychiatric evaluations, medication management, and hormone-informed care. Treatment plans are personalized and may include lifestyle support and lab testing when appropriate."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#8B9D7F]/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl md:text-2xl font-medium text-black mb-4 leading-snug">
                  {faq.question}
                </h3>
                <div className="text-base md:text-lg text-black leading-relaxed font-light">
                  {faq.answer}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="/faq"
              className="inline-flex items-center justify-center bg-[#75866D] text-white px-10 py-5 font-medium text-lg hover:bg-[#677560] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View All FAQs
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Divider between FAQ and Contact */}
      <div className="relative h-16 bg-[#EBE4D6] z-20">
        <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-[#EBE4D6] to-[#E8E2D8]" style={{ borderRadius: '0 0 100% 100% / 0 0 80px 80px' }}></div>
      </div>

      {/* CONTACT */}
      <section id="contact" className="relative bg-[#EBE4D6] py-24 md:py-32 lg:py-40 overflow-hidden">
        {/* Decorative leaf PNG elements */}
        <div className="absolute top-20 right-16 opacity-20 w-32 h-32 md:w-40 md:h-40 rotate-12">
          <Image src="/nature.png" alt="" fill className="object-contain" />
        </div>
        <div className="absolute bottom-32 left-12 opacity-15 w-36 h-36 md:w-44 md:h-44 -rotate-12 scale-x-[-1]">
          <Image src="/nature.png" alt="" fill className="object-contain" />
        </div>
        <div className="absolute top-1/2 right-8 opacity-10 w-28 h-28 md:w-32 md:h-32 rotate-45">
          <Image src="/nature.png" alt="" fill className="object-contain" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <p className="uppercase tracking-[0.25em] text-sm text-[#75866D] mb-4 font-semibold" style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' }}>
              Contact Me
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-black mb-8 leading-tight" style={{ textShadow: '0 2px 6px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.1)' }}>
              More Questions?
            </h2>
            <p className="text-xl md:text-2xl text-black leading-relaxed font-light mb-6">
              Use the secure form below to ask me a question, request more information, or share what you need
            </p>
            <p className="text-lg text-black font-light">
              Your message is secure & HIPAA-compliant. I offer appointments in-person or virtual throughout Ohio
            </p>
          </div>

          <ContactForm />

          {/* Optional fallback info */}
          <div className="max-w-2xl mx-auto text-center mt-10 text-base text-black">
            Prefer email?{" "}
            <a className="underline text-[#75866D] hover:text-[#677560] font-medium" href="mailto:info@modernmhh.com">
              info@modernmhh.com
            </a>
            <br />
            <span className="text-sm">Virtual and in-person appointments</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
      </div>
    </>
  );
}
