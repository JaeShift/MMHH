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
              className="md:hidden relative z-50 border-t border-[color:var(--neutral-200)] bg-[color:var(--surface)] shadow-2xl"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <div className="px-4 sm:px-6 py-4 pb-[max(16px,env(safe-area-inset-bottom))] max-h-[calc(100vh-5rem)] overflow-y-auto">
                <div className="flex flex-col gap-2 mb-4">
                  <Link
                    href={navLinks.provider}
                    className="text-base font-semibold text-[color:var(--text-primary)] px-4 py-3 rounded-xl hover:bg-black/5 transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    Your Provider
                  </Link>
                  <Link
                    href={navLinks.services}
                    className="text-base font-semibold text-[color:var(--text-primary)] px-4 py-3 rounded-xl hover:bg-black/5 transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    Your Care
                  </Link>
                  <Link
                    href={navLinks.testimonials}
                    className="text-base font-semibold text-[color:var(--text-primary)] px-4 py-3 rounded-xl hover:bg-black/5 transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    Patient Experience
                  </Link>
                  <Link
                    href={navLinks.faq}
                    className="text-base font-semibold text-[color:var(--text-primary)] px-4 py-3 rounded-xl hover:bg-black/5 transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    FAQ&apos;s
                  </Link>
                </div>

                <Link
                  href="/book"
                  className="w-full inline-flex items-center justify-center px-6 py-4 text-white text-base font-semibold rounded-xl shadow-lg active:scale-[0.99] transition"
                  style={{ backgroundColor: "#75866D" }}
                  onClick={() => setOpen(false)}
                >
                  Request Appointment
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
