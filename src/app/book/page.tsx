"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Header from "../../components/Header";

export default function BookingPage() {
  const router = useRouter();
  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gradient-to-b from-[color:var(--surface)] to-[color:var(--surface-muted)] relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[color:var(--accent)]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[color:var(--wheat)]/15 rounded-full blur-3xl"></div>
          
          {/* Nature decorative elements */}
          <div className="absolute top-32 right-16 opacity-15 w-40 h-40 rotate-12">
            <Image src="/nature.png" alt="" fill className="object-contain" />
          </div>
          <div className="absolute bottom-32 left-12 opacity-15 w-44 h-44 -rotate-12 scale-x-[-1]">
            <Image src="/nature.png" alt="" fill className="object-contain" />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <motion.div
              className="text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[color:var(--text-primary)] mb-4 sm:mb-6">
                Request an Appointment
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-[color:var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
                Choose the option that best describes you to get started
              </p>
            </motion.div>

            {/* Two-Column Card Layout */}
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mt-12">
              
              {/* New Patient Card */}
              <motion.button
                onClick={() => router.push("/book/new-patient")}
                className="group relative bg-white/90 backdrop-blur-sm border-2 border-[color:var(--neutral-200)] rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Card Content */}
                <div className="p-8 sm:p-10 relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#75866D] to-[#8B9D7F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl font-semibold text-[color:var(--text-primary)] mb-4">
                    New Patient
                  </h2>
                  
                  <p className="text-base sm:text-lg text-[color:var(--text-secondary)] leading-relaxed mb-6">
                    Schedule your first appointment. I&apos;ll take time to understand your concerns and create a personalized treatment plan.
                  </p>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3 text-[color:var(--text-secondary)]">
                      <svg className="w-5 h-5 text-[#75866D] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Comprehensive initial evaluation</span>
                    </li>
                    <li className="flex items-start gap-3 text-[color:var(--text-secondary)]">
                      <svg className="w-5 h-5 text-[#75866D] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Personalized treatment plan</span>
                    </li>
                    <li className="flex items-start gap-3 text-[color:var(--text-secondary)]">
                      <svg className="w-5 h-5 text-[#75866D] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Virtual appointments across Ohio</span>
                    </li>
                  </ul>
                  
                  <div className="inline-flex items-center gap-2 text-[#75866D] font-semibold group-hover:gap-3 transition-all">
                    <span>Schedule New Patient Visit</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#75866D]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>

              {/* Existing Patient Card */}
              <motion.button
                onClick={() => router.push("/book/existing")}
                className="group relative bg-white/90 backdrop-blur-sm border-2 border-[color:var(--neutral-200)] rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Card Content */}
                <div className="p-8 sm:p-10 relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#8B9D7F] to-[#B5BDAC] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl font-semibold text-[color:var(--text-primary)] mb-4">
                    Existing Patient
                  </h2>
                  
                  <p className="text-base sm:text-lg text-[color:var(--text-secondary)] leading-relaxed mb-6">
                    Book a follow-up appointment to continue your care, adjust treatment, or discuss any concerns.
                  </p>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3 text-[color:var(--text-secondary)]">
                      <svg className="w-5 h-5 text-[#8B9D7F] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Medication management</span>
                    </li>
                    <li className="flex items-start gap-3 text-[color:var(--text-secondary)]">
                      <svg className="w-5 h-5 text-[#8B9D7F] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Progress check-ins</span>
                    </li>
                    <li className="flex items-start gap-3 text-[color:var(--text-secondary)]">
                      <svg className="w-5 h-5 text-[#8B9D7F] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Treatment adjustments</span>
                    </li>
                  </ul>
                  
                  <div className="inline-flex items-center gap-2 text-[#8B9D7F] font-semibold group-hover:gap-3 transition-all">
                    <span>Schedule Follow-Up Visit</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B9D7F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </div>

            {/* Additional Info Section */}
            <motion.div
              className="mt-12 sm:mt-16 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="bg-white/80 backdrop-blur-sm border border-[color:var(--neutral-200)] rounded-xl p-6 sm:p-8 shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-[color:var(--text-primary)] mb-3">
                  Have Questions First?
                </h3>
                <p className="text-[color:var(--text-secondary)] mb-4 leading-relaxed">
                  Not sure which option is right for you? Feel free to reach out through the contact form.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 text-[#75866D] font-semibold hover:underline"
                >
                  <span>Contact Me</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}

