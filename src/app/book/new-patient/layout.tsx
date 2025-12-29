import type { Metadata } from "next";

// This route is primarily a conversion form; keep it out of search results.
export const metadata: Metadata = {
  title: "New Patient Appointment Request | Modern Mental Health & Hormones",
  description:
    "Request a new patient appointment with Modern Mental Health & Hormones. Complete the secure form to start care.",
  alternates: { canonical: "/book/new-patient" },
  robots: { index: false, follow: true },
};

export default function NewPatientLayout({ children }: { children: React.ReactNode }) {
  return children;
}


