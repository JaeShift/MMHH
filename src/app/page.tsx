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
      <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-[color:var(--surface)] to-[color:var(--surface-muted)]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black mb-4">Your Provider</h2>
            <p className="text-lg text-[color:var(--text-secondary)] mb-6">
              Meet Stephanie Nichols, PMHNP-BC, FNP-BC — a dual board-certified practitioner with over 25 years of experience specializing in women&apos;s mental health and hormone care.
            </p>
            <a href="/about" className="inline-block bg-[#75866D] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#677560] transition-colors">
              Learn More About Your Provider
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section id="services" className="py-16 md:py-24 bg-[color:var(--surface-muted)]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black mb-4">Your Care</h2>
            <p className="text-lg text-[color:var(--text-secondary)] mb-6">
              Comprehensive mental health and hormone care services including depression, anxiety, PMDD, perimenopause, menopause, and more.
            </p>
            <a href="/services" className="inline-block bg-[#75866D] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#677560] transition-colors">
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* TELEHEALTH PREVIEW */}
      <section id="telehealth" className="py-16 md:py-24 bg-[color:var(--surface)]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black mb-4">Flexible Care Options</h2>
            <p className="text-lg text-[color:var(--text-secondary)] mb-6">
              Secure, HIPAA-compliant telehealth visits anywhere in Ohio or convenient in-person appointments in Columbus.
            </p>
            <a href="/telehealth" className="inline-block bg-[#75866D] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#677560] transition-colors">
              Learn About Appointment Options
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS PREVIEW */}
      <section id="testimonials" className="py-16 md:py-24 bg-[color:var(--surface-muted)]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black mb-4">Patient Experience</h2>
            <p className="text-lg text-[color:var(--text-secondary)] mb-6">
              Read testimonials from women who have received care at Modern MHH.
            </p>
            <a href="/testimonials" className="inline-block bg-[#75866D] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#677560] transition-colors">
              Read Patient Stories
            </a>
          </div>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section id="faq" className="py-16 md:py-24 bg-[color:var(--surface)]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-[color:var(--text-secondary)] mb-6">
              Common questions about services, insurance, appointments, and treatment options.
            </p>
            <a href="/faq" className="inline-block bg-[#75866D] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#677560] transition-colors">
              View All FAQs
            </a>
          </div>
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
