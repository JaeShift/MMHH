"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function SevenDayChallengePage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/7daychallenge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        const text = await response.text();
        console.error("Failed to parse JSON response:", text);
        throw new Error(`Server error (${response.status}): Invalid response format`);
      }

      if (!response.ok) {
        throw new Error(data.error || `Server error: ${response.status}`);
      }

      setIsSuccess(true);
      setEmail("");
    } catch (err) {
      console.error("Signup error:", err);
      setError(err instanceof Error ? err.message : "Failed to sign up. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background with radial gradient and noise texture */}
      <div 
        className="absolute inset-0"
        style={{
          background: '#F6F2EA',
          backgroundImage: `
            radial-gradient(ellipse at top left, rgba(210, 195, 180, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at top right, rgba(210, 195, 180, 0.15) 0%, transparent 50%)
          `
        }}
      >
        {/* Noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative pt-16 pb-16 sm:pt-24 sm:pb-24" style={{ paddingTop: '64px', paddingBottom: '64px', zIndex: 1 }}>
        <div className="mx-auto" style={{ maxWidth: '1120px', paddingLeft: '16px', paddingRight: '16px' }}>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Column - Typography + Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Logo - Centered with button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center lg:justify-start mb-4 sm:mb-6"
              >
                <Link 
                  href="/" 
                  className="transition-opacity hover:opacity-80"
                  aria-label="Modern Mental Health & Hormones Home"
                >
                  <Image 
                    src="/LOGO PNG.png" 
                    alt="Modern Mental Health & Hormones" 
                    width={140} 
                    height={140}
                    className="object-contain"
                    style={{ maxWidth: '120px', height: 'auto' }}
                  />
                </Link>
              </motion.div>

              <div className="space-y-4 sm:space-y-6">
                <p className="text-xs sm:text-sm md:text-base font-medium uppercase text-center lg:text-left" 
                   style={{ 
                     color: '#B97B73',
                     fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
                     letterSpacing: '0.25em'
                   }}>
                  7 DAY HEALTH &amp; WELLNESS
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-center lg:text-left" 
                    style={{ 
                      fontFamily: 'Georgia, Times New Roman, serif',
                      color: '#2B2520',
                      fontWeight: 400,
                      letterSpacing: '0',
                      lineHeight: '1.1'
                    }}>
                  <span style={{ fontStyle: 'italic' }}>Micro-Habit</span><br />Challenge
                </h1>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-center lg:text-left" 
                   style={{ 
                     color: '#5E574F',
                     fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
                     lineHeight: '1.6'
                   }}>
                  Transform your well-being with small, powerful daily habits designed for lasting change.
                </p>
              </div>

              {/* Inline Email Form */}
              {!isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white p-4 sm:p-5 md:p-6 rounded-[14px] sm:rounded-[16px] border"
                  style={{ 
                    borderColor: '#D4C4B0',
                    borderWidth: '1.5px',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)'
                  }}
                >
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Enter your email"
                      className="w-full px-5 py-4 rounded-[14px] border focus:outline-none transition-all"
                      style={{ 
                        borderColor: '#E0D8D0',
                        color: '#3A3530',
                        backgroundColor: '#ffffff',
                        fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
                        fontSize: '16px',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#D4C4B0';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#E0D8D0';
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)';
                      }}
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 rounded-[14px] font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ 
                        backgroundColor: '#C9B8A5',
                        color: '#ffffff',
                        fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
                        fontWeight: 500,
                        fontSize: '16px',
                        boxShadow: '0 4px 12px rgba(201, 184, 165, 0.3)'
                      }}
                      onMouseEnter={(e) => {
                        if (!isSubmitting) {
                          e.currentTarget.style.backgroundColor = '#B8A694';
                          e.currentTarget.style.transform = 'translateY(-1px)';
                          e.currentTarget.style.boxShadow = '0 6px 16px rgba(201, 184, 165, 0.4)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#C9B8A5';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(201, 184, 165, 0.3)';
                      }}
                    >
                      {isSubmitting ? "Signing Up..." : "Join the Free Challenge"}
                    </button>
                    <p className="text-xs text-center" style={{ color: '#6B6258', fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif', marginTop: '8px' }}>
                      Instant welcome email + printable workbook included.
                    </p>
                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-[14px] text-sm">
                        {error}
                      </div>
                    )}
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="p-6 rounded-[16px] bg-white border"
                  style={{ 
                    borderColor: '#E0D8D0',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)'
                  }}
                >
                  <p className="text-lg" style={{ color: '#3A3530', fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
                    Check your inbox for your welcome email + workbook.
                  </p>
                </motion.div>
              )}

              {/* Authority Row */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#5E574F"/>
                  </svg>
                  <span className="text-sm" style={{ color: '#5E574F', fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>7 days</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#5E574F"/>
                  </svg>
                  <span className="text-sm" style={{ color: '#5E574F', fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>5 minutes/day</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#5E574F"/>
                  </svg>
                  <span className="text-sm" style={{ color: '#5E574F', fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>Workbook included</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Premium Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-[14px] sm:rounded-[18px] border overflow-hidden mt-8 lg:mt-0 group cursor-pointer"
              style={{ 
                borderColor: '#D4C4B0',
                borderWidth: '1px',
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.12)';
              }}
            >
              {/* Full Image */}
              <Image 
                src="/7day.jpg" 
                alt="7 Day Wellness Challenge" 
                width={1200}
                height={1200}
                quality={100}
                priority
                className="w-full h-full object-contain"
                style={{ display: 'block' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t" style={{ borderColor: '#E0D8D0', zIndex: 1 }}>
        <div className="mx-auto" style={{ maxWidth: '1120px', paddingLeft: '24px', paddingRight: '24px' }}>
          {/* Social Media Icons */}
          <div className="flex justify-center gap-4 mb-6">
            <a 
              href="https://www.facebook.com/profile.php?id=61584364929024" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-70"
              aria-label="Facebook"
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="#1877F2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/modernmhh/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-70"
              aria-label="Instagram"
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  fill="url(#instagram-gradient-footer)"
                />
                <defs>
                  <linearGradient id="instagram-gradient-footer" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f09433" />
                    <stop offset="25%" stopColor="#e6683c" />
                    <stop offset="50%" stopColor="#dc2743" />
                    <stop offset="75%" stopColor="#cc2366" />
                    <stop offset="100%" stopColor="#bc1888" />
                  </linearGradient>
                </defs>
              </svg>
            </a>
          </div>
          <p className="text-sm leading-relaxed text-center" style={{ color: '#5E574F', fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
            By signing up, you agree to receive email communications including your welcome workbook and daily challenge emails. 
            We may also use your email to send you information about Modern Mental Health & Hormones services. 
            You can unsubscribe at any time by emailing{" "}
            <a href="mailto:info@modernmhh.com" className="underline" style={{ color: '#5E574F' }}>info@modernmhh.com</a>.
          </p>
        </div>
      </footer>
    </main>
  );
}
