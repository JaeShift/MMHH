"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";
  
  // Navigation links - use full pages for SEO
  const navLinks = {
    provider: isHome ? "#about" : "/about-me",
    services: isHome ? "#services" : "/services",
    testimonials: isHome ? "#testimonials" : "/testimonials",
    faq: isHome ? "#faq" : "/faq",
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on navigation changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className={`sticky top-0 z-50 w-full ${scrolled ? "navbar-blur" : "bg-[color:var(--surface)]"} border-b border-[color:var(--neutral-200)]`}>
      <div className="w-full mx-auto flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
        <Link href="/#home" aria-label="Modern Mental Health & Hormones home" className="flex items-center flex-shrink-0 mr-4">
          <Image 
            src="/UPDATEDlogo&TEXT.png" 
            alt="Modern Mental Health & Hormones Logo" 
            width={300} 
            height={80}
            className="h-8 sm:h-10 md:h-12 w-auto max-w-[200px] sm:max-w-none"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-4 lg:gap-6 mx-auto" aria-label="Primary">
          <Link href={navLinks.provider} className="text-sm lg:text-base text-[color:var(--text-secondary)] hover:opacity-80 transition-opacity">Your Provider</Link>
          <div className="w-px h-4 bg-[color:var(--neutral-300)]"></div>
          <Link href={navLinks.services} className="text-sm lg:text-base text-[color:var(--text-secondary)] hover:opacity-80 transition-opacity">Your Care</Link>
          <div className="w-px h-4 bg-[color:var(--neutral-300)]"></div>
          <Link href={navLinks.testimonials} className="text-sm lg:text-base text-[color:var(--text-secondary)] hover:opacity-80 transition-opacity">Patient Experience</Link>
          <div className="w-px h-4 bg-[color:var(--neutral-300)]"></div>
          <Link href={navLinks.faq} className="text-sm lg:text-base text-[color:var(--text-secondary)] hover:opacity-80 transition-opacity">FAQ&apos;s</Link>
        </nav>

        <Link href="/book" className="hidden md:inline-flex px-4 py-2 text-white text-sm font-medium transition-colors flex-shrink-0" style={{ backgroundColor: '#75866D' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#677560'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#75866D'}>
          Request Appointment
        </Link>


        {/* Mobile */}
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] transition-colors flex-shrink-0 ml-auto"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 6h18M3 12h18M3 18h18"/>
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.button
              type="button"
              aria-label="Close menu"
              className="fixed inset-0 z-40 bg-black/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Panel */}
            <motion.div
              className="md:hidden fixed top-[5rem] left-0 right-0 bottom-0 z-50 bg-gradient-to-b from-white to-[#F9F7F4]"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="px-6 py-8 h-full flex flex-col">
                {/* Navigation Links */}
                <nav className="flex flex-col gap-2 mb-8">
                  {[
                    { href: navLinks.provider, label: "Your Provider" },
                    { href: navLinks.services, label: "Your Care" },
                    { href: navLinks.testimonials, label: "Patient Experience" },
                    { href: navLinks.faq, label: "FAQ's" }
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        className="group relative flex items-center justify-between px-5 py-4 text-lg font-medium text-gray-800 bg-white rounded-xl shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-200"
                        onClick={() => setOpen(false)}
                      >
                        <span className="group-hover:text-[#75866D] transition-colors duration-200">
                          {item.label}
                        </span>
                        <svg 
                          className="w-5 h-5 text-gray-400 group-hover:text-[#75866D] group-hover:translate-x-1 transition-all duration-200" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="mt-auto"
                >
                  <Link
                    href="/book"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-5 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl active:scale-[0.97] transition-all duration-200"
                    style={{ backgroundColor: "#75866D" }}
                    onClick={() => setOpen(false)}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#677560'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#75866D'}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Request Appointment
                  </Link>
                  
                  <p className="text-center text-sm text-gray-500 mt-4">
                    Taking new patients • Telehealth available
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
