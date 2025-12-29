import type { Metadata } from "next";

// Booking flows are conversion pages; keep them out of search results.
export const metadata: Metadata = {
  title: "Booking | Modern Mental Health & Hormones",
  description: "Appointment booking options for Modern Mental Health & Hormones.",
  alternates: { canonical: "/booking" },
  robots: { index: false, follow: true },
};

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return children;
}


