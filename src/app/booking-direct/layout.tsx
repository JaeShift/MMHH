import type { Metadata } from "next";

// Direct booking is a conversion page; keep it out of search results.
export const metadata: Metadata = {
  title: "Book Now | Modern Mental Health & Hormones",
  description: "Direct booking for Modern Mental Health & Hormones appointments.",
  alternates: { canonical: "/booking-direct" },
  robots: { index: false, follow: true },
};

export default function BookingDirectLayout({ children }: { children: React.ReactNode }) {
  return children;
}


