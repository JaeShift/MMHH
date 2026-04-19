import type { Metadata } from "next";
import Header from "../../components/Header";

export const metadata: Metadata = {
  title: "Financial Disclosure | Modern Mental Health & Hormones",
  description:
    "Financial disclosure for Modern Mental Health & Hormones: fees, in-network insurance participation (Cigna, United Healthcare, Optum, Medical Mutual, Anthem, Aetna, Carelon, MultiPlan, UMR, and related plans where applicable), superbills, and billing policies.",
  alternates: { canonical: "/financial-disclosure" },
};

export default function FinancialDisclosurePage() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-[color:var(--surface)]">
        <div className="container mx-auto px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif mb-8 text-[color:var(--text-primary)]">
              Financial Disclosure and Consent for Self-Pay Services
            </h1>
            
            <div className="prose prose-lg max-w-none text-[color:var(--text-secondary)] space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[color:var(--text-primary)]">
                  I. Cash-Pay / Self-Pay Policy
                </h2>
                <p className="mb-4">
                  This practice is committed to providing high-quality, specialized care that integrates mental health and hormone balance. To maintain the highest standards of care and manage administrative overhead, I currently operate primarily on a self-pay/cash-pay model.
                </p>
                <ul className="list-disc pl-6 space-y-3 mb-4">
                  <li>
                    <strong>Full Responsibility for Fees:</strong> I am responsible for paying the full fee for all services rendered by Modern Mental Health & Hormones at the time of my appointment.
                  </li>
                  <li>
                    <strong>Fee Schedule:</strong> I have received, reviewed, and understand the current fee schedule (including package pricing, follow-up rates, and administrative fees) provided by the practice.
                  </li>
                  <li>
                    <strong>Payment Methods:</strong> I understand that payment must be made via cash, credit card, or HSA/FSA card.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[color:var(--text-primary)]">
                  II. Insurance, In-Network Participation, and Out-of-Network (OON) Billing
                </h2>
                <ul className="list-disc pl-6 space-y-3 mb-4">
                  <li>
                    <strong>In-network participation:</strong> I understand that Modern Mental Health & Hormones participates in-network with certain health plans and networks (including, for example, Cigna Evernorth, United Healthcare / Optum, Medical Mutual Supermed, Anthem, Aetna, Carelon, MultiPlan, and UMR, as updated on the website and at intake). Whether my specific member plan is in-network can depend on my employer, product type, and state; I will confirm benefits with my carrier when scheduling.
                  </li>
                  <li>
                    <strong>No guarantee of coverage:</strong> I understand that in-network status does not guarantee that my visit will be covered, that prior authorization may be required, or that I will not owe deductibles, copays, or coinsurance as defined by my plan.
                  </li>
                  <li>
                    <strong>Claims and coordination:</strong> I understand that for in-network care the practice may bill my plan according to its contracts and policies. For services not covered or when I am out-of-network, I remain responsible for fees as disclosed.
                  </li>
                  <li>
                    <strong>Superbill provision (OON):</strong> Upon request, the practice may provide me with a Superbill (an itemized receipt with appropriate codes) that I may submit to my insurance company for potential out-of-network reimbursement. Any reimbursement is solely between me and my insurer.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[color:var(--text-primary)]">
                  III. Administrative Fees & Policy
                </h2>
                <ul className="list-disc pl-6 space-y-3 mb-4">
                  <li>
                    <strong>No-Show/Late Cancellation:</strong> I agree that if I cancel or reschedule an appointment with less than 48 hours&apos; notice, I will be charged a fee of $100. No-shows will be charged the full fee for the scheduled service.
                  </li>
                </ul>
              </section>

              <div className="mt-8 p-6 bg-slate-50 border border-slate-200 rounded-lg">
                <p className="text-sm text-slate-600 mb-4">
                  <strong>Questions?</strong> If you have any questions about fees, insurance, or billing, please contact me at:
                </p>
                <p className="text-sm text-slate-600">
                  Email: <a href="mailto:info@modernmhh.com" className="text-[color:var(--primary)] hover:underline">info@modernmhh.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

