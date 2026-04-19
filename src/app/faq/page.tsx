import type { Metadata } from "next";
import Header from "../../components/Header";
import Insurance from "../../components/Insurance";
import {
  acceptedInsuranceCarriers,
  acceptedInsuranceNamesCommaList,
} from "../../content/acceptedInsurance";

const insuranceMetaSnippet =
  "Accepted plans include Cigna Evernorth, United Healthcare, Optum, Medical Mutual, Anthem, Aetna, Carelon, MultiPlan, UMR, and related networks where in-network.";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Modern MHH | Mental Health & Hormone Care FAQ",
  description: `Common questions about mental health and hormone care, appointments, and insurance at Modern MHH in Ohio. ${insuranceMetaSnippet} Serving Columbus, Cleveland, Cincinnati, Toledo, Akron, Dayton, and statewide telehealth.`,
  keywords: [
    "Ohio mental health insurance",
    "PMHNP insurance Ohio",
    ...acceptedInsuranceCarriers.map((c) => c.name),
  ],
};

export default function FAQPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you take insurance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes. Modern Mental Health & Hormones is in-network with multiple major plans and networks, including ${acceptedInsuranceNamesCommaList()}. Superbills may be available for other plans, and HSA or FSA cards are accepted where applicable. See the Financial Disclosure page for billing details.`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-[color:var(--surface-muted)]">
        <section id="faq" className="py-12 md:py-16 bg-[color:var(--surface-muted)]">
          <div className="container mx-auto px-6 lg:px-8">
            <div id="insurance" className="scroll-mt-24">
              <Insurance />
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

