"use client";

import { useEffect } from "react";
import Link from "next/link";
import { OPTIMANTRA_EXISTING_PATIENT_URL } from "@/lib/bookingLinks";

export default function ExistingPatientPage() {
  useEffect(() => {
    if (OPTIMANTRA_EXISTING_PATIENT_URL) {
      window.location.href = OPTIMANTRA_EXISTING_PATIENT_URL;
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[color:var(--surface)] to-[color:var(--surface-muted)] flex items-center justify-center p-4">
      <div className="text-center max-w-xl bg-white rounded-xl shadow p-8">
        {OPTIMANTRA_EXISTING_PATIENT_URL ? (
          <>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#75866D] mx-auto mb-4"></div>
            <p className="text-lg text-[color:var(--text-secondary)]">Redirecting to your patient portal...</p>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-semibold text-[color:var(--text-primary)] mb-3">Existing Patient Portal</h1>
            <p className="text-[color:var(--text-secondary)] mb-5">
              We switched to OptiMantra and are finalizing the existing-patient portal link.
            </p>
            <p className="text-[color:var(--text-secondary)] mb-6">
              Please contact us if you need help scheduling a follow-up.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-white rounded-md"
              style={{ backgroundColor: "#75866D" }}
            >
              Contact Office
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

