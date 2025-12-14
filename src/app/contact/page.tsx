import type { Metadata } from "next";
import Image from "next/image";
import Header from "../../components/Header";
import ContactForm from "../../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Modern MHH | Mental Health & Hormone Care | Ohio",
  description: "Contact Modern MHH for questions about mental health and hormone care services. Secure, HIPAA-compliant contact form. Serving Columbus, Cleveland, Cincinnati, Toledo, Akron, Dayton, and all of Ohio via telehealth.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[color:var(--surface)]">
        {/* CONTACT */}
        <section id="contact" className="relative bg-gradient-to-b from-[color:var(--surface)] to-[color:var(--surface-muted)] py-12 sm:py-16 md:py-20 overflow-hidden pt-32">
          {/* Background decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Large circular gradients */}
            <div className="absolute top-10 left-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-br from-[#8B9D7F]/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] bg-gradient-to-tl from-[#75866D]/15 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-[36rem] sm:h-[36rem] md:w-[48rem] md:h-[48rem] bg-stone-200/30 rounded-full blur-3xl"></div>
            
            {/* Nature PNG botanical elements */}
            <div className="absolute top-20 right-16 opacity-15 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rotate-45">
              <Image src="/nature.png" alt="" fill className="object-contain" />
            </div>
            <div className="absolute bottom-32 left-12 opacity-15 w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 -rotate-12 scale-x-[-1]">
              <Image src="/nature.png" alt="" fill className="object-contain" />
            </div>
            
            {/* Custom SVG leaf accents */}
            <div className="absolute top-1/3 left-8 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 opacity-15 rotate-12">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="50" cy="50" rx="36" ry="21" transform="rotate(-25 50 50)" fill="#8B9D7F"/>
                <path d="M50 31 Q48 50 50 69" stroke="#75866D" strokeWidth="2"/>
              </svg>
            </div>
            <div className="absolute bottom-1/4 right-16 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 opacity-15 -rotate-45">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="50" cy="50" rx="38" ry="22" transform="rotate(30 50 50)" fill="#8B9D7F"/>
                <path d="M50 29 Q45 50 50 71" stroke="#75866D" strokeWidth="2.5"/>
              </svg>
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-10">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-[color:var(--text-primary)]">
                More Questions?
              </h2>
              <p className="text-sm sm:text-base text-[color:var(--text-muted)] font-semibold uppercase tracking-[0.3em] mb-4 sm:mb-6">
                Contact Me
              </p>
              <p className="text-lg sm:text-xl md:text-2xl text-[color:var(--text-secondary)] leading-relaxed max-w-3xl mx-auto">
                Use the secure form below to ask a question, request more information, or share what you need.
              </p>
              <p className="text-base sm:text-lg text-[color:var(--text-muted)] mt-4 max-w-2xl mx-auto">
                Your message is secure &amp; HIPAA-compliant. All appointments are in-person or virtual in Ohio.
              </p>
            </div>

            <ContactForm />

            {/* Optional fallback info */}
            <div className="max-w-2xl mx-auto text-center mt-8 text-sm text-[color:var(--text-muted)]">
              Prefer email?{" "}
              <a className="underline text-black hover:text-gray-700" href="mailto:info@modernmhh.com">
                info@modernmhh.com
              </a>
              <br />
              Virtual and in-person appointments
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#C5B9AA] border-t border-[#B5A999] py-8">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="text-xs text-[color:var(--text-muted)] scale-75 origin-left">
              <p className="mb-1">
                © {new Date().getFullYear()} Modern Mental Health &amp; Hormones. All rights reserved.
              </p>
              <p className="text-[color:var(--text-secondary)]">
                Serving Columbus, Cleveland, Cincinnati, Toledo, Akron, Dayton, and all of Ohio
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
              <a href="/privacy" className="text-xs font-medium text-[color:var(--text-primary)] hover:text-[#75866D] transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-xs font-medium text-[color:var(--text-primary)] hover:text-[#75866D] transition-colors">
                Terms of Use
              </a>
              <a href="/financial-disclosure" className="text-xs font-medium text-[color:var(--text-primary)] hover:text-[#75866D] transition-colors">
                Financial Disclosure
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

