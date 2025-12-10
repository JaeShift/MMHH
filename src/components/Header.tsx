"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";
  const sectionHref = (hash: string) => (isHome ? hash : `/${hash}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-[68px] z-50 w-full ${scrolled ? "navbar-blur" : "bg-[color:var(--surface)]"} border-b border-[color:var(--neutral-200)]`}>
      <div className="w-full mx-auto flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
        <Link href="/#home" aria-label="Modern Mental Health & Hormones home" className="flex items-center flex-shrink-0 mr-4">
          <Image 
            src="/fulllogo_transparent_nobuffer (1).png" 
            alt="Modern Mental Health & Hormones Logo" 
            width={300} 
            height={80}
            className="h-8 sm:h-10 md:h-12 w-auto max-w-[200px] sm:max-w-none"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-4 lg:gap-6 mx-auto" aria-label="Primary">
          <Link href={sectionHref("#provider")} className="text-sm lg:text-base text-[color:var(--text-secondary)] hover:opacity-80 transition-opacity">Your Provider</Link>
          <div className="w-px h-4 bg-[color:var(--neutral-300)]"></div>
          <Link href={sectionHref("#services")} className="text-sm lg:text-base text-[color:var(--text-secondary)] hover:opacity-80 transition-opacity">Your Care</Link>
          <div className="w-px h-4 bg-[color:var(--neutral-300)]"></div>
          <Link href={sectionHref("#testimonials")} className="text-sm lg:text-base text-[color:var(--text-secondary)] hover:opacity-80 transition-opacity">Patient Experience</Link>
          <div className="w-px h-4 bg-[color:var(--neutral-300)]"></div>
          <Link href={sectionHref("#faq")} className="text-sm lg:text-base text-[color:var(--text-secondary)] hover:opacity-80 transition-opacity">FAQ&apos;s</Link>
        </nav>

        <Link href="/book" className="hidden md:inline-flex rounded-full px-4 py-2 text-white text-sm font-medium transition-colors flex-shrink-0" style={{ backgroundColor: '#75866D' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#677560'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#75866D'}>
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

      {open && (
        <motion.div 
          initial={{height:0,opacity:0}} 
          animate={{height:"auto",opacity:1}} 
          exit={{height:0,opacity:0}}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden border-t border-[color:var(--neutral-200)] bg-white shadow-lg"
        >
          <div className="container py-8 px-4 sm:px-6">
            <div className="flex flex-col gap-0 mb-6">
              <Link 
                href={sectionHref("#provider")} 
                className="text-lg font-medium text-gray-800 hover:text-[#75866D] py-3 px-4 rounded-xl hover:bg-gray-50 transition-all duration-200 border border-transparent hover:border-gray-200" 
                onClick={()=>setOpen(false)}
              >
                Your Provider
              </Link>
              <div className="h-px bg-gray-200 mx-4"></div>
              <Link 
                href={sectionHref("#services")} 
                className="text-lg font-medium text-gray-800 hover:text-[#75866D] py-3 px-4 rounded-xl hover:bg-gray-50 transition-all duration-200 border border-transparent hover:border-gray-200" 
                onClick={()=>setOpen(false)}
              >
                Your Care
              </Link>
              <div className="h-px bg-gray-200 mx-4"></div>
              <Link 
                href={sectionHref("#testimonials")} 
                className="text-lg font-medium text-gray-800 hover:text-[#75866D] py-3 px-4 rounded-xl hover:bg-gray-50 transition-all duration-200 border border-transparent hover:border-gray-200" 
                onClick={()=>setOpen(false)}
              >
                Patient Experience
              </Link>
              <div className="h-px bg-gray-200 mx-4"></div>
              <Link 
                href={sectionHref("#faq")} 
                className="text-lg font-medium text-gray-800 hover:text-[#75866D] py-3 px-4 rounded-xl hover:bg-gray-50 transition-all duration-200 border border-transparent hover:border-gray-200" 
                onClick={()=>setOpen(false)}
              >
                FAQ&apos;s
              </Link>
            </div>
            <Link 
              href="/book"
              className="w-full inline-flex items-center justify-center rounded-xl px-6 py-4 text-white text-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg" 
              style={{ backgroundColor: '#75866D' }} 
              onClick={()=>setOpen(false)}
            >
              Request Appointment
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
