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
      <section id="home" className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Modern Mental Health & Hormones"
            fill
            className="hero-img"   /* alignment set in globals.css */
            priority
          />
          <div className="absolute inset-0 hero-overlay pointer-events-none" />

          <div className="absolute inset-0 flex items-center justify-start">
            <div className="pl-8 md:pl-16 lg:pl-24">
              <div className="max-w-4xl text-white">
                <motion.h1 
                  className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg mb-6 pl-4 md:pl-8 lg:pl-12"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ amount: 0.01 }}
                >
                  Modern Mental Health<br/>& Hormones
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl pl-6 md:pl-10 lg:pl-14"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ amount: 0.01 }}
                >
                  Specialized care for women navigating mid-life mood, sleep, stress, and hormone changes—led by Nurse Practitioner Stephanie Nichols.
                </motion.p>
                <motion.div 
                  className="flex flex-wrap gap-4 pl-12 md:pl-20 lg:pl-24"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ amount: 0.01 }}
                >
                  <a href="#book" className="btn bg-white/90 text-neutral-900 hover:bg-white hover:text-neutral-900 shadow-lg hover:shadow-xl transition-all duration-200 text-lg px-8 py-4">Request Appointment</a>
                  <a href="#services" className="btn bg-white/90 text-neutral-900 hover:bg-white hover:text-neutral-900 shadow-lg hover:shadow-xl transition-all duration-200 text-lg px-8 py-4">View Services</a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="pt-8 pb-0">
        <AboutStephanie />
      </section>

      {/* SERVICES (no icons) */}
      <FocusAreas />

      {/* TESTIMONIALS */}
      <section id="testimonials" className="pt-8 pb-0">
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
