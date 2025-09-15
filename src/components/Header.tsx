"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 ${scrolled ? "navbar-blur" : "bg-white"}`}>
      <div className="container flex items-center justify-between h-16">
        <Link href="/#home" aria-label="Modern Mental Health & Hormones home" className="font-serif text-2xl">
          <span className="text-gradient">MMHH</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2" aria-label="Primary">
          <Link href="/#about" className="hover:text-brand-2">About</Link>
          <div className="w-px h-4 bg-slate-300"></div>
          <Link href="/#provider" className="hover:text-brand-2">Provider</Link>
          <div className="w-px h-4 bg-slate-300"></div>
          <Link href="/#services" className="hover:text-brand-2">Care</Link>
          <div className="w-px h-4 bg-slate-300"></div>
          <Link href="/#contact" className="hover:text-brand-2">Contact</Link>
        </nav>


        {/* Mobile */}
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-neutral-200"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 6h18M3 12h18M3 18h18"/>
          </svg>
        </button>
      </div>

      {open && (
        <motion.div initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} className="md:hidden border-t border-neutral-200 bg-white">
          <div className="container py-4 flex flex-col gap-3">
            <Link href="/#about" onClick={()=>setOpen(false)}>About</Link>
            <Link href="/#provider" onClick={()=>setOpen(false)}>Provider</Link>
            <Link href="/#services" onClick={()=>setOpen(false)}>Care</Link>
            <Link href="/#contact" onClick={()=>setOpen(false)}>Contact</Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
