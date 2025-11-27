"use client";

import Header from "../../components/Header";

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
                  II. Insurance Credentialing and Out-of-Network (OON) Billing
                </h2>
                <ul className="list-disc pl-6 space-y-3 mb-4">
                  <li>
                    <strong>Current Credentialing Status:</strong> I understand that Modern Mental Health & Hormones is currently NOT IN-NETWORK with any health insurance plans, including (list specific plans you are applying to, e.g., Aetna, Cigna, Blue Cross Blue Shield, etc.).
                  </li>
                  <li>
                    <strong>No Guarantee of Acceptance:</strong> I understand that the provider is currently applying for credentialing but there is no guarantee that this application will be accepted or when the process will be completed.
                  </li>
                  <li>
                    <strong>No Direct Claim Submission:</strong> I understand and agree that the practice will not submit claims to my insurance company on my behalf for reimbursement.
                  </li>
                  <li>
                    <strong>Superbill Provision:</strong> Upon request, the practice will provide me with a Superbill (an itemized receipt containing all necessary codes and information) that I may submit to my insurance company for potential Out-of-Network (OON) reimbursement. I understand that the decision to reimburse any portion of the fees rests solely with my insurance carrier.
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
                  <strong>Questions?</strong> If you have any questions about fees, insurance, or billing, please contact us at:
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

