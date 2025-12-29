import type { Metadata } from "next";

// Test utility page; keep it out of search results.
export const metadata: Metadata = {
  title: "Test Widget | Modern Mental Health & Hormones",
  description: "Internal test page.",
  alternates: { canonical: "/test-widget" },
  robots: { index: false, follow: false },
};

export default function TestWidgetLayout({ children }: { children: React.ReactNode }) {
  return children;
}


