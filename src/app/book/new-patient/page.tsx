"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "../../../components/Header";
import { OPTIMANTRA_NEW_PATIENT_URL } from "@/lib/bookingLinks";

const STEPS = [
  {
    number: "1",
    title: "Fill Out the Form",
    description:
      "Complete the secure registration below with your details and insurance information.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Receive an Email",
    description:
      "You'll get a confirmation email after your form is submitted.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Stephanie Will Reach Out",
    description:
      "She'll contact you to schedule your first appointment — telehealth or in-person.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];


export default function NewPatientPage() {
  const [showLoader, setShowLoader] = useState(true);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [showFallbackHint, setShowFallbackHint] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fallback = window.setTimeout(() => {
      if (!iframeLoaded) setShowFallbackHint(true);
    }, 5000);
    const safety = window.setTimeout(() => setShowLoader(false), 4000);
    return () => {
      window.clearTimeout(fallback);
      window.clearTimeout(safety);
    };
  }, [iframeLoaded]);

  // Listen for postMessage from OptiMantra after form submission
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Only trust messages from optimantra.com
      if (!event.origin.includes("optimantra.com")) return;
      const data = event.data;
      // Check for any success-like signal in the message payload
      if (
        data === "success" ||
        data?.type === "success" ||
        data?.status === "success" ||
        data?.submitted === true ||
        data?.event === "formSubmitted" ||
        data?.event === "submitted" ||
        (typeof data === "string" && data.toLowerCase().includes("success"))
      ) {
        setSubmitted(true);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gradient-to-b from-[color:var(--surface-muted)] to-[color:var(--surface-muted)] relative overflow-hidden pt-24 pb-16">
        {/* Top accent bar to visually separate header from page */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#75866D]/40 via-[#75866D] to-[#75866D]/40" />

        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[color:var(--accent)]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-40 right-10 w-96 h-96 bg-[color:var(--wheat)]/15 rounded-full blur-3xl" />
          <div className="absolute top-36 right-16 opacity-10 w-40 h-40 rotate-12">
            <Image src="/nature.png" alt="" fill className="object-contain" />
          </div>
          <div className="absolute bottom-36 left-12 opacity-10 w-44 h-44 -rotate-12 scale-x-[-1]">
            <Image src="/nature.png" alt="" fill className="object-contain" />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">

            {/* Hero header */}
            <motion.div
              className="text-center mb-10 sm:mb-14"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#75866D]/10 text-[#75866D]">
                New Patients
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[color:var(--text-primary)] mb-4 leading-tight">
                Welcome — Let&apos;s Get You Started
              </h1>
              <p className="text-base sm:text-lg text-[color:var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
                Complete your secure registration below. You&apos;ll receive a confirmation email, then
                Stephanie will reach out to schedule your first appointment (typically within 1–2 business days).
              </p>
            </motion.div>

            {/* Steps */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              {STEPS.map((step, i) => (
                <div
                  key={step.number}
                  className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-[color:var(--neutral-200)] shadow-md p-6 flex flex-col gap-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#75866D]/10 flex items-center justify-center text-[#75866D]">
                      {step.icon}
                    </div>
                    <span className="text-2xl font-bold text-[#75866D]/30 leading-none">{step.number}</span>
                  </div>
                  <h3 className="font-semibold text-[color:var(--text-primary)]">{step.title}</h3>
                  <p className="text-sm text-[color:var(--text-secondary)] leading-relaxed">{step.description}</p>
                  {i < STEPS.length - 1 && (
                    <div className="hidden sm:block absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                      <svg className="w-6 h-6 text-[#75866D]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>

            {/* Success banner — shown if OptiMantra fires a postMessage */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 flex items-start gap-3 bg-[#75866D]/10 border border-[#75866D]/30 rounded-xl px-5 py-4"
              >
                <svg className="w-5 h-5 text-[#75866D] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-[#75866D]">Registration submitted!</p>
                  <p className="text-sm text-[color:var(--text-secondary)] mt-0.5">
                    Thank you — check your email for confirmation. Stephanie will reach out to schedule your first visit.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Iframe card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <div className="bg-white rounded-2xl shadow-xl border border-[color:var(--neutral-200)] overflow-hidden">

                {/* Card top bar */}
                <div className="bg-gradient-to-r from-[#75866D] to-[#8B9D7F] px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm leading-tight">Secure Patient Registration</p>
                      <p className="text-white/70 text-xs">Powered by OptiMantra · HIPAA Compliant</p>
                    </div>
                  </div>
                  <a
                    href={OPTIMANTRA_NEW_PATIENT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-semibold bg-white text-[#75866D] hover:bg-white/90 transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Open in New Tab
                  </a>
                </div>

                {/* Iframe */}
                <div className="relative w-full min-h-[600px] bg-[#fafaf9]">
                  {showLoader && (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#fafaf9]">
                      <div className="text-center">
                        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#75866D] mx-auto mb-3" />
                        <p className="text-sm text-[color:var(--text-secondary)]">Loading secure intake form…</p>
                      </div>
                    </div>
                  )}
                  <iframe
                    src={OPTIMANTRA_NEW_PATIENT_URL}
                    title="OptiMantra New Patient Intake"
                    className="w-full h-[700px] md:h-[850px] border-0"
                    allow="payment"
                    loading="lazy"
                    onLoad={() => {
                      setIframeLoaded(true);
                      setShowLoader(false);
                    }}
                  />
                </div>
              </div>

              {/* Fallback hint */}
              {showFallbackHint && (
                <p className="mt-4 text-center text-sm text-[color:var(--text-secondary)]">
                  Form not loading?{" "}
                  <a
                    href={OPTIMANTRA_NEW_PATIENT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#75866D] underline"
                  >
                    Open it in a new tab
                  </a>
                  .
                </p>
              )}
            </motion.div>

            {/* Disclosure */}
            <div className="mt-6 bg-white/70 backdrop-blur-sm border border-[color:var(--neutral-200)] rounded-xl px-5 py-4 flex gap-3 items-start shadow-sm">
              <svg className="w-5 h-5 text-[#75866D] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20A10 10 0 0012 2z" />
              </svg>
              <p className="text-xs text-[color:var(--text-secondary)] leading-relaxed">
                The registration form above is securely hosted by{" "}
                <strong className="font-medium text-[color:var(--text-primary)]">OptiMantra</strong>, our
                HIPAA-compliant practice management platform. Information you submit is used solely for
                scheduling and coordinating your care. By completing this form you acknowledge our{" "}
                <Link href="/privacy" className="underline text-[#75866D] hover:opacity-80 transition-opacity">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link href="/terms" className="underline text-[#75866D] hover:opacity-80 transition-opacity">
                  Terms of Service
                </Link>
                .
              </p>
            </div>

            {/* Back link */}
            <div className="text-center mt-8">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 text-sm text-[color:var(--text-secondary)] hover:text-[#75866D] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Booking Options
              </Link>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}
