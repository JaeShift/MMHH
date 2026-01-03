"use client";

import Header from "../../../components/Header";
import NewPatientForm from "../../../components/NewPatientForm";
import Link from "next/link";

export default function NewPatientPage() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gradient-to-b from-[color:var(--surface)] to-[color:var(--surface-muted)] pt-24 pb-8 sm:pb-12 md:pb-16">
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
              <Link
                href="/book"
                className="inline-flex items-center gap-2 text-[#75866D] font-semibold hover:underline"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Back to Booking Options</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

