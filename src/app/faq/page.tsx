import type { Metadata } from "next";
import Header from "../../components/Header";
import Insurance from "../../components/Insurance";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Modern MHH | Mental Health & Hormone Care FAQ",
  description: "Common questions about mental health and hormone care services, insurance, appointments, and treatment options at Modern MHH serving Columbus, Cleveland, Cincinnati, Toledo, Akron, Dayton, and all of Ohio.",
};

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[color:var(--surface-muted)]">
        <section id="faq" className="py-12 md:py-16 bg-[color:var(--surface-muted)]">
          <div className="container mx-auto px-6 lg:px-8">
            <Insurance />
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

