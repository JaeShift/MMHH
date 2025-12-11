import type { Metadata } from "next";
import Header from "../../components/Header";
import Telehealth from "../../components/Telehealth";

export const metadata: Metadata = {
  title: "Telehealth & In-Person Appointments | Modern MHH | Columbus, Ohio",
  description: "Flexible care options with secure, HIPAA-compliant telehealth visits anywhere in Ohio or in-person appointments in Columbus. Convenient scheduling for your mental health and hormone care needs.",
};

export default function TelehealthPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[color:var(--surface)]">
        <Telehealth />
      </main>
      <footer className="bg-[#C5B9AA] border-t border-[#B5A999] py-8">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="text-xs text-[color:var(--text-muted)]">
              <p className="mb-1">
                © {new Date().getFullYear()} Modern Mental Health &amp; Hormones. All rights reserved.
              </p>
              <p className="text-[color:var(--text-secondary)]">
                Serving Columbus, Ohio
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

