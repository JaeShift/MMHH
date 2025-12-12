"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ContactForm from "../components/ContactForm";

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
              className="bg-white/50 backdrop-blur-sm rounded-3xl px-6 py-10 sm:px-8 sm:py-12 md:px-12 md:py-16 shadow-xl relative overflow-hidden border border-white/30"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ amount: 0.15, once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{ boxShadow: '0 10px 40px -10px rgba(117, 134, 109, 0.15)' }}
            >
              {/* Subtle decorative corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-l-2 border-t-2 border-[#8B9D7F]/50 rounded-tl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-r-2 border-b-2 border-[#8B9D7F]/50 rounded-br-3xl"></div>
              <p className="text-gray-700 text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto mb-6 leading-relaxed">
                I help women in midlife who feel dismissed, overwhelmed, or stuck reclaim their energy, balance, and confidence by addressing the root causes of their mental health and hormonal challenges.
              </p>
              <p className="text-gray-700 text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto mb-6 leading-relaxed">
                Instead of just masking symptoms, you receive integrative, personalized care—so you can finally feel like yourself again.
              </p>
              <p className="text-gray-700 text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto mb-6 leading-relaxed">
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
                  className="inline-flex items-center justify-center text-white text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300 bg-[#75866D] hover:bg-[#677560]"
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

      {/* ABOUT PREVIEW - Split Layout */}
      <section id="about" className="relative pt-24 pb-12 md:pt-32 md:pb-16 lg:pt-40 lg:pb-20 bg-[#EBE4D6] overflow-hidden">
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
              className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/stephanie-headshot.jpg"
                alt="Stephanie Nichols, PMHNP-BC, FNP-BC"
                fill
                className="object-cover"
                style={{ objectPosition: 'center' }}
              />
            </motion.div>
            
            {/* Text Side */}
            <motion.div
              className="text-left lg:pl-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="uppercase tracking-[0.25em] text-sm text-[#75866D] mb-4 font-semibold">
                Meet Your Provider
              </p>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-black mb-8 leading-tight">
                About Me
              </h2>
              
              <div className="space-y-6 mb-10">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                  I&apos;m Stephanie Nichols, PMHNP-BC, FNP-BC — a dual board-certified practitioner with over 25 years of experience specializing in women&apos;s mental health and hormone care.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed font-light">
                  With extensive expertise in both psychiatric and family practice, I provide compassionate, evidence-based care tailored to your unique needs.
                </p>
              </div>
              
              <motion.a
                href="/about-me"
                className="inline-flex items-center justify-center bg-[#75866D] text-white px-10 py-5 rounded-full font-medium text-lg hover:bg-[#677560] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TRANSITION - From About to Conditions */}
      <section className="relative pt-0 pb-8 bg-gradient-to-b from-[#EBE4D6] to-[#FCF8F0] overflow-hidden">
        {/* Animated background glow */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="w-full max-w-4xl h-32 bg-gradient-radial from-[#75866D]/20 via-[#8B9D7F]/10 to-transparent blur-3xl"></div>
        </motion.div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center relative"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ 
              duration: 0.7, 
              ease: [0.34, 1.56, 0.64, 1],
              scale: {
                type: "spring",
                stiffness: 200,
                damping: 15
              }
            }}
          >
            {/* Decorative elements */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#8B9D7F] to-transparent"></div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#8B9D7F] to-transparent"></div>
            
            <motion.div 
              className="bg-white/60 backdrop-blur-md rounded-2xl p-8 md:p-10 shadow-2xl border border-white/50 relative overflow-hidden"
              animate={{
                boxShadow: [
                  '0 25px 50px -12px rgba(117, 134, 109, 0.25)',
                  '0 25px 50px -12px rgba(117, 134, 109, 0.4)',
                  '0 25px 50px -12px rgba(117, 134, 109, 0.25)'
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Subtle corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-[#8B9D7F]/40 rounded-tl-2xl"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-[#8B9D7F]/40 rounded-br-2xl"></div>
              
              {/* Floating leaf decoration */}
              <motion.div 
                className="absolute top-2 right-2 w-12 h-12 opacity-15"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="50" cy="50" rx="35" ry="20" transform="rotate(-30 50 50)" fill="#75866D"/>
                  <path d="M50 30 Q48 50 50 70" stroke="#677560" strokeWidth="3"/>
                </svg>
              </motion.div>

              <motion.p 
                className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Now that you know a bit about me, let me share the{" "}
                <motion.span
                  className="text-black font-light relative inline-block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.5,
                    type: "spring",
                    stiffness: 300,
                    damping: 10
                  }}
                  style={{
                    textShadow: '0 2px 10px rgba(117, 134, 109, 0.2)'
                  }}
                >
                  specific areas
                </motion.span>
                {" "}where I can support you on your{" "}
                <motion.span
                  className="text-black font-light relative inline-block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.7,
                    type: "spring",
                    stiffness: 300,
                    damping: 10
                  }}
                  style={{
                    textShadow: '0 2px 10px rgba(117, 134, 109, 0.2)'
                  }}
                >
                  journey to wellness
                </motion.span>
                .
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CONDITIONS I TREAT - With Images */}
      <section id="services" className="relative pt-20 pb-24 md:pt-28 md:pb-32 lg:pt-36 lg:pb-40 bg-[#FCF8F0] overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Section Header */}
            <div className="text-center mb-16">
              <p className="uppercase tracking-[0.25em] text-sm text-[#75866D] mb-4 font-semibold">
                Comprehensive Care
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-black mb-6 leading-tight">
                Areas of Care
              </h2>
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-[#8B9D7F]"></div>
                <div className="w-2 h-2 rounded-full bg-[#8B9D7F]"></div>
                <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-[#8B9D7F]"></div>
              </div>
              <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
                I specialize in women&apos;s mental health and hormonal concerns throughout life&apos;s transitions
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
                    className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={condition.image}
                        alt={condition.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#75866D]/60 to-transparent"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-medium text-black mb-4 leading-snug">
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
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="uppercase tracking-[0.25em] text-sm text-[#75866D] mb-4 font-semibold">
              Your Visit
            </p>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-black mb-8 leading-tight">
              Flexible Care Options
            </h2>
            
            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-20 bg-[#8B9D7F]/30"></div>
              <div className="w-2 h-2 rounded-full bg-[#8B9D7F]"></div>
              <div className="h-px w-20 bg-[#8B9D7F]/30"></div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light mb-12">
              Choose the appointment style that works best for you
            </p>
            
            {/* Two Options */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div 
                className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#8B9D7F]/10 overflow-hidden group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -5 }}
              >
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#75866D]/10 to-transparent rounded-bl-3xl"></div>
                
                {/* Icon with gradient background */}
                <div className="relative w-20 h-20 bg-gradient-to-br from-[#75866D] to-[#677560] rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-medium text-black mb-4">Telehealth Visits</h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-[#75866D] to-transparent mx-auto mb-4"></div>
                <p className="text-lg text-gray-700 leading-relaxed font-light">
                  I offer secure, HIPAA-compliant virtual appointments from the comfort of your home. Available anywhere in Ohio with convenient scheduling.
                </p>
              </motion.div>
              
              <motion.div 
                className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#8B9D7F]/10 overflow-hidden group"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -5 }}
              >
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#8B9D7F]/10 to-transparent rounded-bl-3xl"></div>
                
                {/* Icon with gradient background */}
                <div className="relative w-20 h-20 bg-gradient-to-br from-[#8B9D7F] to-[#75866D] rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-medium text-black mb-4">In-Person Visits</h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-[#8B9D7F] to-transparent mx-auto mb-4"></div>
                <p className="text-lg text-gray-700 leading-relaxed font-light">
                  I also provide face-to-face care in a comfortable, welcoming office environment. Convenient location in Columbus, Ohio.
                </p>
              </motion.div>
            </div>
            
            <motion.a
              href="/telehealth"
              className="inline-flex items-center justify-center bg-[#75866D] text-white px-10 py-5 rounded-full font-medium text-lg hover:bg-[#677560] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
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
              className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/reviews.jpg"
                alt="Patient testimonials"
                fill
                className="object-cover"
                style={{ objectPosition: 'center' }}
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
              <p className="uppercase tracking-[0.25em] text-sm text-[#75866D] mb-4 font-semibold">
                Patient Stories
              </p>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-black mb-8 leading-tight">
                Patient Experience
              </h2>
              
              {/* Testimonial Quote */}
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg mb-8">
                <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed italic mb-6">
                  Real patient experiences and success stories from women who have received care at Modern MHH
                </p>
                <p className="text-base text-gray-600 font-medium">
                  — Patient Testimonials
                </p>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed font-light mb-8">
                Join the women who have found balance, clarity, and renewed well-being through my comprehensive mental health and hormone care approach.
              </p>
              
              <motion.a
                href="/testimonials"
                className="inline-flex items-center justify-center bg-[#75866D] text-white px-10 py-5 rounded-full font-medium text-lg hover:bg-[#677560] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Read Patient Stories
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
            <p className="uppercase tracking-[0.25em] text-sm text-[#75866D] mb-4 font-semibold">
              Have Questions?
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-black mb-6 leading-tight">
              Frequently Asked Questions
            </h2>
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-20 bg-[#8B9D7F]/30"></div>
              <div className="w-2 h-2 rounded-full bg-[#8B9D7F]"></div>
              <div className="h-px w-20 bg-[#8B9D7F]/30"></div>
            </div>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
              Find answers to common questions about my services, insurance, and appointments
            </p>
          </motion.div>

          {/* FAQ Cards Grid */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {[
              {
                question: "Do you accept insurance?",
                answer: "I accept most major insurance plans and can provide documentation for out-of-network reimbursement."
              },
              {
                question: "What is your cancellation policy?",
                answer: "I require 24-hour notice for cancellations. Late cancellations may be subject to a fee."
              },
              {
                question: "How long are appointments?",
                answer: "Initial consultations are typically 60 minutes, with follow-up appointments lasting 30-45 minutes."
              },
              {
                question: "Do you offer telehealth?",
                answer: "Yes! I offer secure, HIPAA-compliant telehealth appointments throughout Ohio for your convenience."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-[#8B9D7F]/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl md:text-2xl font-medium text-black mb-4 leading-snug">
                  {faq.question}
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
                  {faq.answer}
                </p>
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
              className="inline-flex items-center justify-center bg-[#75866D] text-white px-10 py-5 rounded-full font-medium text-lg hover:bg-[#677560] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
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

      {/* CONTACT */}
      <section id="contact" className="relative bg-[#EBE4D6] py-24 md:py-32 lg:py-40 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <p className="uppercase tracking-[0.25em] text-sm text-[#75866D] mb-4 font-semibold">
              Contact Me
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-black mb-8 leading-tight">
              More Questions?
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light mb-6">
              Use the secure form below to ask me a question, request more information, or share what you need
            </p>
            <p className="text-lg text-gray-600 font-light">
              Your message is secure & HIPAA-compliant. I offer appointments in-person or virtual throughout Ohio
            </p>
          </div>

          <ContactForm />

          {/* Optional fallback info */}
          <div className="max-w-2xl mx-auto text-center mt-10 text-base text-gray-600">
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
                Serving Columbus, Cleveland, Cincinnati, Toledo, Akron, Dayton, and all of Ohio
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
