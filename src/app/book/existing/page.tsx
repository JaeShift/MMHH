"use client";

import { useEffect } from "react";

export default function ExistingPatientPage() {
  useEffect(() => {
    // Redirect to Practice Better sign-in
    window.location.href = "https://modernmentalhealthhormones.practicebetter.io/#/signin";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[color:var(--surface)] to-[color:var(--surface-muted)] flex items-center justify-center p-4">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#75866D] mx-auto mb-4"></div>
        <p className="text-lg text-[color:var(--text-secondary)]">Redirecting to Practice Better...</p>
      </div>
    </div>
  );
}

