"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";

export default function AboutMe() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div>
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
          </div>
          <p className="text-xs sm:text-sm text-white/90 mt-1">
            Appointment requests will be available shortly as I complete my opening preparations
          </p>
        </div>
      </motion.div>

      <Header />
      
      <main className="min-h-screen bg-gradient-to-b from-[#F5F1E8] via-[#EBE4D6] to-[#E0D5C7] relative overflow-hidden">
        <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
          <motion.div
            className="absolute top-20 -left-20 w-96 h-96 bg-[#C8B5A0]/10 rounded-full blur-3xl"
            animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 -right-20 w-96 h-96 bg-[#8B9D7F]/8 rounded-full blur-3xl"
            animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <section ref={containerRef} className="pt-24 pb-12 relative overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 opacity-20"
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image src="/nature.png" alt="" width={120} height={120} className="object-contain" />
          </motion.div>
          <motion.div
            className="absolute top-32 right-16 opacity-15"
            animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image src="/nature.png" alt="" width={140} height={140} className="object-contain scale-x-[-1]" />
          </motion.div>
          
          <motion.div 
            className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
            style={{ opacity, scale }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block mb-6"
              >
                <span className="text-sm uppercase tracking-[0.3em] text-[#75866D] font-semibold">Meet Your Provider</span>
              </motion.div>
              <motion.h1 
                className="font-caslon text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[color:var(--text-primary)] mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Stephanie Nichols
              </motion.h1>
              <motion.p 
                className="text-xl sm:text-2xl text-[color:var(--text-secondary)] leading-relaxed font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                MSN, APRN, PMHNP-BC, FNP-BC
              </motion.p>
            </motion.div>
          </motion.div>
        </section>

        <section className="pt-4 pb-12 md:pt-6 md:pb-20 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="relative mb-20"
              >
                <div className="relative">
                  <div className="flex justify-center mb-12">
                    <motion.div
                      className="relative"
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#8B9D7F]/20 to-[#75866D]/20 rounded-full blur-3xl"></div>
                      
                      <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                        <div className="absolute -inset-3 bg-gradient-to-br from-[#8B9D7F] via-[#75866D] to-[#C8B5A0] rounded-full opacity-60 blur-sm"></div>
                        <div className="absolute -inset-1 bg-white rounded-full shadow-xl"></div>
                        
                        <motion.div 
                          className="relative w-full h-full rounded-full overflow-hidden shadow-2xl"
                          whileHover={{ scale: 1.03 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Image
                            src="/stephanie-headshot.jpg"
                            alt="Stephanie Nichols"
                            width={500}
                            height={500}
                            className="object-cover w-full h-full"
                            style={{ objectPosition: '50% 30%' }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 mb-16"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src="/women-s-hormone-therapy-specialist.PNG"
                        alt="Heather Hirsch Academy Women's Hormone Therapy Specialist badge"
                        width={220}
                        height={220}
                        className="w-28 sm:w-32 md:w-36 h-auto drop-shadow-lg"
                      />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src="/MemberLogo.png"
                        alt="The Menopause Society 2025 Member badge"
                        width={240}
                        height={120}
                        className="w-40 sm:w-44 md:w-52 h-auto drop-shadow-lg"
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="mb-20"
            >
              <div className="bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-xl rounded-3xl p-10 sm:p-12 md:p-16 border border-white/60 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#8B9D7F]/5 to-transparent rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-[#75866D]/5 to-transparent rounded-tr-full"></div>
                
                <div className="relative z-10 space-y-6 text-lg sm:text-xl text-[color:var(--text-secondary)] leading-relaxed">
                  <p>
                    I&apos;m Stephanie Nichols, a Psychiatric Mental Health Nurse Practitioner with over 25 years of clinical experience in internal medicine, neurology, and psychiatry. My journey into mental health care has been shaped by a lifelong passion for helping others and a deep understanding of the intricate connection between physical and mental wellness.
                  </p>

                  <p>
                    Before specializing in psychiatry, I spent a decade working in neurology and neurosurgery, followed by 15 years in internal medicine. These experiences gave me a unique perspective on how the body and mind are deeply intertwined. I&apos;ve seen firsthand how hormonal changes can impact mental health, and I&apos;ve dedicated my practice to helping women navigate these challenges with thoughtful, personalized care. My additional training in women&apos;s hormone therapy and membership in The Menopause Society reflect my commitment to providing comprehensive, integrative care for women at every stage of life.
                  </p>

                  <p>
                    My path to psychiatry wasn&apos;t a straight line—it was a calling that emerged from my work in internal medicine. I saw a profound need for compassionate mental health care and felt compelled to return to school to better serve my patients. This decision was driven by my belief that no single treatment fits everyone. I combine traditional medicine with integrative approaches, tailoring care to each individual&apos;s unique needs and goals.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="my-20 relative"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#8B9D7F]/5 via-transparent to-[#C8B5A0]/5 rounded-3xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />
              
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="font-caslon text-3xl sm:text-4xl md:text-5xl text-[color:var(--text-primary)] relative"
                  >
                    <motion.span
                      className="absolute -left-4 top-0 text-[#8B9D7F]/20 font-serif text-7xl"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    >
                      &quot;
                    </motion.span>
                    My Personal Journey
                  </motion.h2>
                  
                  <motion.div
                    className="relative"
                    initial={{ width: 0 }}
                    whileInView={{ width: "6rem" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                  >
                    <motion.div
                      className="h-1 bg-gradient-to-r from-[#75866D] via-[#8B9D7F] to-[#C8B5A0] rounded-full"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    />
                    <motion.div
                      className="absolute top-1/2 -translate-y-1/2 right-0 w-2 h-2 bg-[#C8B5A0] rounded-full"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 1.4, type: "spring" }}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-full bg-[#C8B5A0]"
                        animate={{
                          boxShadow: ["0 0 0 0 rgba(200, 181, 160, 0.4)", "0 0 0 10px rgba(200, 181, 160, 0)"]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatDelay: 1
                        }}
                      />
                    </motion.div>
                  </motion.div>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-base sm:text-lg text-[color:var(--text-secondary)] leading-relaxed"
                  >
                    On a personal note, I&apos;ve faced my own share of life&apos;s challenges, including the loss of my husband. That experience taught me resilience, empathy, and the importance of truly listening to others. It&apos;s also shaped the way I connect with my patients—I understand what it feels like to navigate uncertainty and rebuild a sense of stability. My friends and family describe me as funny, smart, and loyal, and I bring those qualities into my work every day.
                  </motion.p>
                </motion.div>

                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-base sm:text-lg text-[color:var(--text-secondary)] leading-relaxed"
                  >
                    When I&apos;m not in the office, you might find me enjoying time with loved ones, solving puzzles (both literal and metaphorical), or engaging in lifelong learning. I&apos;m also passionate about giving back through medical mission work, which has deepened my appreciation for the diverse ways people experience and heal from life&apos;s challenges.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="relative"
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-[#75866D]/20 to-[#8B9D7F]/20 rounded-2xl blur-xl"
                      animate={{
                        opacity: [0.5, 0.8, 0.5],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <div className="relative bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#8B9D7F]/30 shadow-xl overflow-hidden">
                      <motion.div
                        className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-[#75866D]/20 to-transparent rounded-br-full"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 1 }}
                      />
                      <motion.svg 
                        className="w-8 h-8 text-[#75866D] mb-4 opacity-50" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                        initial={{ rotate: -10, opacity: 0 }}
                        whileInView={{ rotate: 0, opacity: 0.5 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </motion.svg>
                      <motion.p 
                        className="text-lg sm:text-xl text-[color:var(--text-primary)] leading-relaxed font-light italic"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                      >
                        If you&apos;re looking for a provider who will listen without judgment, explore all treatment options with you, and empower you to take charge of your mental health, I&apos;d be honored to work with you.
                      </motion.p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="my-20"
            >
              <div className="text-center mb-12">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="font-caslon text-4xl sm:text-5xl md:text-6xl text-[color:var(--text-primary)] mb-4"
                >
                  Credentials & Expertise
                </motion.h2>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-1 w-32 bg-gradient-to-r from-[#75866D] via-[#8B9D7F] to-[#C8B5A0] rounded-full mx-auto"
                />
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "BSN", desc: "Bachelor of Science in Nursing with 10 years in Neurology/Neurosurgery", delay: 0.1 },
                  { title: "MSN", desc: "Master of Science in Nursing as a Family Nurse Practitioner with 15 years in Internal Medicine", delay: 0.2 },
                  { title: "PMHNP-BC", desc: "Post-Master's Certification in Psychiatric Mental Health", delay: 0.3 },
                  { title: "Specialist", desc: "Women's Hormone Therapy Specialist designation from the Heather Hirsch Academy", delay: 0.4 },
                  { title: "Member", desc: "Member of The Menopause Society", delay: 0.5 },
                  { title: "25+ Years", desc: "Clinical experience in internal medicine, neurology, and psychiatry", delay: 0.6 },
                  { title: "Expertise", desc: "Trauma-informed care provider with expertise in psychotherapy, psychopharmacology, and integrative treatments", delay: 0.7, span: true },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: item.delay }}
                    className={`group ${item.span ? 'sm:col-span-2 lg:col-span-3' : ''}`}
                  >
                    <div className="relative h-full bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#8B9D7F]/10 to-[#75866D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <motion.div
                        className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#75866D]/20 to-transparent rounded-bl-3xl"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: item.delay + 0.2 }}
                      />
                      
                      <div className="relative z-10">
                        <div className="flex items-start gap-4 mb-3">
                          <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: item.delay + 0.3, type: "spring", stiffness: 200 }}
                            whileHover={{ scale: 1.1 }}
                            className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#75866D] to-[#8B9D7F] flex items-center justify-center shadow-lg"
                          >
                            <motion.svg 
                              className="w-5 h-5 text-white" 
                              fill="currentColor" 
                              viewBox="0 0 20 20"
                              initial={{ pathLength: 0 }}
                              whileInView={{ pathLength: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: item.delay + 0.5 }}
                            >
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </motion.svg>
                          </motion.div>
                          <h3 className="text-xl sm:text-2xl font-semibold text-[#75866D] group-hover:text-[#677560] transition-colors">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-sm sm:text-base text-[color:var(--text-secondary)] leading-relaxed pl-14">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="mt-24 mb-12"
            >
              <div className="relative bg-gradient-to-br from-[#75866D] via-[#8B9D7F] to-[#677560] rounded-3xl p-12 sm:p-16 md:p-20 overflow-hidden shadow-2xl">
                <div className="absolute inset-0 opacity-10">
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full"
                    style={{
                      backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                      backgroundSize: "50px 50px"
                    }}
                    animate={{
                      backgroundPosition: ["0px 0px", "50px 50px"]
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </div>

                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute w-32 h-32 bg-white/10 rounded-full blur-2xl"
                    style={{
                      top: `${20 + i * 30}%`,
                      left: `${10 + i * 25}%`,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      x: [0, 20, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 8 + i * 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                ))}

                <div className="relative z-10 text-center">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="font-caslon text-3xl sm:text-4xl md:text-5xl text-white mb-6 leading-tight"
                  >
                    Ready to Start Your Journey?
                  </motion.h2>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
                  >
                    Take the first step towards balance, clarity, and empowered well-being
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href="/book"
                        className="inline-flex items-center justify-center text-[#75866D] bg-white text-lg sm:text-xl font-semibold px-12 py-5 rounded-full transition-all duration-300 shadow-2xl hover:shadow-3xl group"
                      >
                        Schedule an Appointment
                        <motion.svg 
                          className="w-6 h-6 ml-3" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </motion.svg>
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
    </div>
  );
}
