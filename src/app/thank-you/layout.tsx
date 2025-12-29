import type { Metadata } from "next";

// Thank-you pages should not appear in search results.
export const metadata: Metadata = {
  title: "Thank You | Modern Mental Health & Hormones",
  description: "Confirmation page.",
  alternates: { canonical: "/thank-you" },
  robots: { index: false, follow: false },
};

export default function ThankYouLayout({ children }: { children: React.ReactNode }) {
  return children;
}


