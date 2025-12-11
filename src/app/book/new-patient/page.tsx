"use client";

import { motion } from "framer-motion";
import Header from "../../../components/Header";
import NewPatientForm from "../../../components/NewPatientForm";

export default function NewPatientPage() {
  return (
    <>
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
      
      <main className="min-h-screen bg-gradient-to-b from-[color:var(--surface)] to-[color:var(--surface-muted)] pt-32 pb-8 sm:pb-12 md:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[color:var(--text-primary)] mb-4">
                New Patient Request
              </h1>
              <p className="text-lg sm:text-xl text-[color:var(--text-secondary)] leading-relaxed">
                Tell me how to reach you and I&apos;ll schedule your appointment
              </p>
            </div>

            {/* New Patient Form */}
            <NewPatientForm />

            {/* Back Link */}
            <div className="text-center mt-8">
              <a 
                href="/book" 
                className="inline-flex items-center gap-2 text-[#75866D] font-semibold hover:underline"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Back to Booking Options</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

