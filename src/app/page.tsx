"use client";

import Header from "../components/Header";
import FocusAreas from "../components/FocusAreas";
import AboutStephanie from "../components/AboutStephanie";
import Testimonials from "../components/Testimonials";
import Insurance from "../components/Insurance";
import ContactForm from "../components/ContactForm";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <>
      {/* Development Notice Banner */}
      <motion.div
        className="bg-[color:var(--primary-dark)] text-white text-center py-4 px-4 border-b border-[color:var(--primary)]"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[color:var(--accent)] rounded-full animate-pulse"></div>
              <span className="font-semibold text-lg">Site in Development</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div className="text-base sm:text-lg">
              <span className="font-medium">Accepting First Patients Mid-November 2025</span>
            </div>
          </div>
          <p className="text-sm text-white/80 mt-2">
            Telehealth across Ohio • Get early access by requesting an appointment below
          </p>
        </div>
      </motion.div>


      {/* Header / Navigation */}
      <Header />

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        {/* Background image */}
        <div className="relative h-[70vh] md:h-[80vh]">
          <Image
            src="/hero.jpg"
            alt="Calm, modern interior representing a welcoming practice"
            fill
            priority
            className="object-cover object-center hero-img"
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="max-w-3xl">
                <motion.h1
                  className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Modern Mental Health &amp; Hormones
                </motion.h1>

                <motion.p
                  className="text-white/95 text-lg md:text-xl lg:text-2xl mb-8 leading-6"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Specialized, compassionate care for women —
                  integrating mental health and hormone expertise.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-3"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-md bg-[color:var(--primary)] px-5 py-3 font-semibold text-white hover:bg-[color:var(--primary-dark)] transition-colors"
                  >
                    Request Appointment
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center rounded-md bg-white/90 px-5 py-3 font-semibold text-[color:var(--primary-dark)] hover:bg-white transition-colors"
                  >
                    View Services
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smooth transition from hero to about */}
      <div className="relative h-24 overflow-hidden">
        <svg className="absolute bottom-0 w-full h-24 text-[color:var(--surface)]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" fill="currentColor"/>
        </svg>
      </div>

      {/* ABOUT PRACTICE + STEPHANIE (your component includes #about) */}
      <AboutStephanie />

      {/* CARE / SERVICES (your component uses id="services") */}
      <FocusAreas />

      {/* Elegant transition from services to testimonials */}
      <div className="relative h-20 overflow-hidden">
        <svg className="absolute top-0 w-full h-20 text-[color:var(--surface)]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"/>
        </svg>
      </div>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-12 md:py-16 bg-[color:var(--surface)]">
        <div className="container mx-auto px-6 lg:px-8">
          <Testimonials />
        </div>
      </section>

      {/* Subtle wave transition from testimonials to insurance */}
      <div className="relative h-14 overflow-hidden bg-[color:var(--surface)]">
        <svg className="absolute bottom-0 w-full h-14 text-[color:var(--surface-muted)]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" fill="currentColor"/>
        </svg>
      </div>

      {/* INSURANCE / FAQ AREA */}
      <section id="book" className="py-12 md:py-16 bg-[color:var(--surface-muted)]">
        <div className="container mx-auto px-6 lg:px-8">
          <Insurance />
        </div>
      </section>

      {/* Elegant wave transition to contact section */}
      <div className="relative h-18 overflow-hidden bg-[color:var(--surface-muted)]">
        <svg className="absolute bottom-0 w-full h-18 text-[color:var(--surface)]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"/>
        </svg>
      </div>

      {/* CONTACT */}
      <section id="contact" className="bg-[color:var(--surface)] py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-[color:var(--text-primary)]">
              Ready to Work Together?
            </h2>
            <p className="text-[color:var(--text-secondary)]">
              Send a secure message below to request an appointment or ask a
              question. We'll respond promptly.
            </p>
          </div>

          <ContactForm />

          {/* Optional fallback info */}
          <div className="max-w-2xl mx-auto text-center mt-8 text-sm text-[color:var(--text-muted)]">
            Prefer email?{" "}
            <a className="underline text-[color:var(--primary)] hover:text-[color:var(--primary-dark)]" href="mailto:info@modernmhh.com">
              info@modernmhh.com
            </a>
            <br />
            Telehealth across Ohio • Monday–Friday, 9am–5pm
          </div>
        </div>
      </section>

      {/* FOOTER (simple) */}
      <footer className="bg-[color:var(--surface-elevated)] border-t border-[color:var(--neutral-200)]">
        <motion.div
          className="container mx-auto px-6 lg:px-8 py-8 grid md:grid-cols-2 items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="text-sm text-[color:var(--text-muted)]">
            © {new Date().getFullYear()} Modern Mental Health &amp; Hormones. All
            rights reserved.
          </div>
          <div className="text-sm text-[color:var(--text-secondary)] md:text-right">
            Telehealth practice • Columbus, Ohio
          </div>
        </motion.div>
      </footer>
    </>
  );
}
