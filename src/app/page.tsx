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
      {/* Top notice (timeless wording) */}
      <motion.div
        className="bg-[color:var(--brand-2)] text-white text-center py-2 px-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="container mx-auto text-sm">
          Now welcoming new patients — Telehealth across Ohio.
          <a
            href="#contact"
            className="ml-3 inline-block underline underline-offset-4"
          >
            Request an appointment
          </a>
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
                    className="inline-flex items-center justify-center rounded-md bg-[color:var(--brand-1)] px-5 py-3 font-semibold text-white hover:opacity-90"
                  >
                    Request Appointment
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center rounded-md bg-white/90 px-5 py-3 font-semibold text-[color:var(--brand-2)] hover:bg-white"
                  >
                    View Services
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PRACTICE + STEPHANIE (your component includes #about) */}
      <AboutStephanie />

      {/* CARE / SERVICES (your component uses id="services") */}
      <FocusAreas />

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-16 md:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <Testimonials />
        </div>
      </section>

      {/* INSURANCE / FAQ AREA */}
      <section id="book" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <Insurance />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-slate-100 py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-slate-600">
              Send a secure message below to request an appointment or ask a
              question. We’ll respond promptly.
            </p>
          </div>

          <ContactForm />

          {/* Optional fallback info */}
          <div className="max-w-2xl mx-auto text-center mt-8 text-sm text-neutral-600">
            Prefer email?{" "}
            <a className="underline" href="mailto:info@modernmhh.com">
              info@modernmhh.com
            </a>
            <br />
            Telehealth across Ohio • Monday–Friday, 9am–5pm
          </div>
        </div>
      </section>

      {/* FOOTER (simple) */}
      <footer className="bg-white border-t">
        <motion.div
          className="container mx-auto px-6 lg:px-8 py-8 grid md:grid-cols-2 items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="text-sm text-neutral-600">
            © {new Date().getFullYear()} Modern Mental Health &amp; Hormones. All
            rights reserved.
          </div>
          <div className="text-sm text-neutral-700 md:text-right">
            Telehealth practice • Columbus, Ohio
          </div>
        </motion.div>
      </footer>
    </>
  );
}
