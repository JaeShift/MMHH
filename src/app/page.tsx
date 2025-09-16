"use client";

import Header from "../components/Header";
import FocusAreas from "../components/FocusAreas";
import AboutStephanie from "../components/AboutStephanie";
import Testimonials from "../components/Testimonials";
import Insurance from "../components/Insurance";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <>
      {/* Top notice */}
      <motion.div 
        className="bg-[color:var(--brand-2)] text-white text-center py-2 font-semibold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Now welcoming new patients in mid-November · Telehealth across Ohio
      </motion.div>

      <Header />

      {/* HERO */}
      <section id="home" className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Modern Mental Health & Hormones"
            fill
            className="hero-img"   /* alignment set in globals.css */
            priority
          />
          <div className="absolute inset-0 hero-overlay pointer-events-none" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-left px-8 md:px-16 lg:px-20 xl:px-24 2xl:px-28 lg:ml-[-36rem] xl:ml-[-46rem] 2xl:ml-[-56rem]">
              <div className="max-w-6xl lg:max-w-7xl xl:max-w-8xl 2xl:max-w-9xl text-white">
                <motion.h1 
                  className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight drop-shadow-2xl mb-6"
                  style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0px 0px 16px rgba(0,0,0,0.6)' }}
                  initial={{ opacity: 0, y: 60, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -60, scale: 0.95 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  viewport={{ amount: 0.01 }}
                >
                  <motion.span
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ amount: 0.01 }}
                  >
                    Modern
                  </motion.span>
                  <br/>
                  <motion.span
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ amount: 0.01 }}
                  >
                    Mental Health
                  </motion.span>
                  <br/>
                  <motion.span
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ amount: 0.01 }}
                  >
                    & Hormones
                  </motion.span>
                </motion.h1>
                
                {/* Telehealth subtitle */}
                <motion.p 
                  className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-white font-light tracking-wide mb-6"
                  style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ amount: 0.01 }}
                >
                  Telehealth Practice
                </motion.p>
                
                {/* Divider line matching title width */}
                <motion.div 
                  className="w-full max-w-4xl h-px bg-white/60 mb-8"
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  exit={{ opacity: 0, scaleX: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ amount: 0.01 }}
                ></motion.div>
                
                <motion.div 
                  className="flex flex-wrap gap-8 justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ amount: 0.01 }}
                >
                  <motion.a 
                    href="#book" 
                    className="inline-flex items-center text-white text-xl font-medium hover:text-white/80 transition-all duration-300 group"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ amount: 0.01 }}
                  >
                    Request Appointment
                    <motion.svg 
                      className="w-5 h-5 ml-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </motion.a>
                  <motion.a 
                    href="#services" 
                    className="inline-flex items-center text-white text-xl font-medium hover:text-white/80 transition-all duration-300 group"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    viewport={{ amount: 0.01 }}
                  >
                    View Services
                    <motion.svg 
                      className="w-5 h-5 ml-2" 
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <motion.section 
        id="about" 
        className="pt-8 pb-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0.1 }}
      >
        <AboutStephanie />
      </motion.section>

      {/* SERVICES (no icons) */}
      <FocusAreas />

      {/* TESTIMONIALS */}
      <section id="testimonials" className="pb-0">
        <div className="container">
          <Testimonials />
        </div>
      </section>

      {/* INSURANCE */}
      <Insurance />

      {/* BOOK / WAITLIST anchor */}
      <motion.section 
        id="book" 
        className="section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.3 }}
      >
        <div className="container text-center">
          <motion.h2 
            className="font-serif text-3xl mb-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ amount: 0.01 }}
          >
            Be first to book
          </motion.h2>
          <motion.p 
            className="text-neutral-700 mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ amount: 0.01 }}
          >
            We&apos;ll confirm benefits and share any out-of-pocket costs before your visit.
          </motion.p>
          <motion.a 
            href="mailto:info@modernmhh.com" 
            className="btn btn-primary"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ amount: 0.01 }}
            whileHover={{ scale: 1.05 }}
          >
            Request Appointment via Email
          </motion.a>
        </div>
      </motion.section>

      {/* CONTACT-style footer */}
      <footer className="footer">
        <motion.div 
          id="contact" 
          className="container py-8 grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0.01 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ amount: 0.01 }}
          >
            <h3 className="font-serif text-2xl mb-2">Contact</h3>
            <p className="text-neutral-700 mb-4">Telehealth across Ohio</p>
            <a href="mailto:info@modernmhh.com" className="text-[color:var(--brand-2)] hover:underline">info@modernmhh.com</a>
          </motion.div>
          <motion.div 
            className="text-sm text-neutral-700 md:text-right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ amount: 0.01 }}
          >
            Monday–Friday: 9am–5pm<br/>Telehealth appointments
          </motion.div>
        </motion.div>
      </footer>
    </>
  );
}
