import type { Metadata } from "next";

// This route redirects to the patient portal; keep it out of search results.
export const metadata: Metadata = {
  title: "Patient Portal | Modern Mental Health & Hormones",
  description: "Existing patients are redirected to the secure patient portal.",
  alternates: { canonical: "/book/existing" },
  robots: { index: false, follow: true },
};

export default function ExistingPatientLayout({ children }: { children: React.ReactNode }) {
  return children;
}


