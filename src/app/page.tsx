"use client";

import { motion } from "framer-motion";
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

      {/* Smooth transition from hero to about */}
      <div className="relative h-24 overflow-hidden">
        <svg className="absolute bottom-0 w-full h-24 text-[color:var(--surface)]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" fill="currentColor"/>
        </svg>
      </div>

      {/* ABOUT PREVIEW */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-[#FCF8F0] rounded-2xl p-8 md:p-12 border border-[#E2D9CD]">
              <div className="text-center max-w-3xl mx-auto">
                <span className="badge mb-4">Meet Your Provider</span>
                <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--text-primary)] mb-6">Your Provider</h2>
                <div className="w-16 h-1 bg-[#B5BDAC] mx-auto mb-8 rounded-full"></div>
                <p className="text-lg text-[color:var(--text-secondary)] mb-8 leading-relaxed">
                  Meet Stephanie Nichols, PMHNP-BC, FNP-BC — a dual board-certified practitioner with over 25 years of experience specializing in women&apos;s mental health and hormone care.
                </p>
                <a href="/about" className="btn btn-primary">
                  Learn More About Your Provider
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section id="services" className="py-20 bg-[#F9F9F9]">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-16">
              <span className="badge mb-4">Comprehensive Care</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--text-primary)] mb-4">Your Care</h2>
              <p className="text-lg text-[color:var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
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
                    className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col items-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <h3 className="text-xl font-bold text-[color:var(--text-primary)] mb-4">{service.title}</h3>
                    <div className="mt-auto pt-4 w-full">
                      <a
                        href="/services"
                        className="inline-flex items-center text-[#75866D] font-semibold hover:text-[#677560] transition-colors text-sm"
                      >
                        Learn More
                        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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

      {/* TELEHEALTH PREVIEW */}
      <section id="telehealth" className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-16">
              <span className="badge mb-4">Your Visit</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--text-primary)] mb-4">Flexible Care Options</h2>
              <p className="text-lg text-[color:var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
                Choose the appointment style that works best for you
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="card p-8 hover:shadow-md transition-all">
                <h3 className="text-2xl font-bold text-[color:var(--text-primary)] mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-[#EBF0E9] flex items-center justify-center text-[#75866D]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                  </span>
                  Telehealth Visits
                </h3>
                <ul className="space-y-3 text-[color:var(--text-secondary)] mb-6">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#75866D] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>Secure, HIPAA-compliant video calls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#75866D] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>Convenient scheduling from home</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#75866D] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>Available anywhere in Ohio</span>
                  </li>
                </ul>
              </div>
              
              <div className="card p-8 hover:shadow-md transition-all">
                <h3 className="text-2xl font-bold text-[color:var(--text-primary)] mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-[#EBF0E9] flex items-center justify-center text-[#75866D]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </span>
                  In-Person Visits
                </h3>
                <ul className="space-y-3 text-[color:var(--text-secondary)] mb-6">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#75866D] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>Face-to-face appointments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#75866D] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>Comfortable, private office</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#75866D] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>Convenient location in Columbus</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <a href="/telehealth" className="btn btn-primary">
                View Appointment Options
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS PREVIEW */}
      <section id="testimonials" className="py-20 bg-[#F9F9F9]">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-4">Patient Stories</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--text-primary)] mb-12">Patient Experience</h2>
            
            <div className="bg-white rounded-2xl p-10 md:p-12 shadow-sm border border-gray-100 relative">
              <svg className="w-12 h-12 text-[#E2D9CD] absolute top-8 left-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
              </svg>
              <blockquote className="text-xl md:text-2xl text-[color:var(--text-primary)] font-medium leading-relaxed mb-6 relative z-10">
                &quot;Real patient experiences and success stories from women who have received care at Modern MHH.&quot;
              </blockquote>
              <a href="/testimonials" className="btn btn-ghost text-sm font-semibold">Read Patient Stories &rarr;</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-4">Common Questions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--text-primary)] mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-[color:var(--text-secondary)] mb-8">
              Find answers about insurance, appointments, and treatment options.
            </p>
            <a href="/faq" className="btn btn-primary">View All FAQs</a>
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-[#F9F9F9]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="badge mb-4">Contact Me</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--text-primary)] mb-6">More Questions?</h2>
              <p className="text-lg text-[color:var(--text-secondary)] mb-4">
                Use the secure form below to ask a question or request information.
              </p>
              <p className="text-sm text-[color:var(--text-muted)]">
                Secure &amp; HIPAA-compliant • Virtual and in-person appointments
              </p>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-gray-200">
              <ContactForm />
            </div>

            <div className="text-center mt-8 text-sm text-[color:var(--text-muted)]">
              Prefer email? <a className="text-[#75866D] font-medium hover:underline" href="mailto:info@modernmhh.com">info@modernmhh.com</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-[color:var(--text-muted)] text-center md:text-left">
              <p className="font-semibold text-[color:var(--text-primary)] mb-2">Modern Mental Health &amp; Hormones</p>
              <p className="mb-1">© {new Date().getFullYear()} All rights reserved.</p>
              <p>Serving Columbus, Cleveland, Cincinnati, Toledo, Akron, Dayton, and all of Ohio</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a href="/privacy" className="text-sm text-[color:var(--text-muted)] hover:text-[#75866D] transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-sm text-[color:var(--text-muted)] hover:text-[#75866D] transition-colors">Terms of Use</a>
              <a href="/financial-disclosure" className="text-sm text-[color:var(--text-muted)] hover:text-[#75866D] transition-colors">Financial Disclosure</a>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}
