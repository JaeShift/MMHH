import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Your Provider | Stephanie Nichols, PMHNP-BC | Modern Mental Health & Hormones",
  description:
    "Meet Stephanie Nichols, PMHNP-BC, and learn about Modern Mental Health & Hormones — specialized mental health and hormone care for women across Ohio.",
  alternates: { canonical: "/about-me" },
};

export default function AboutMeLayout({ children }: { children: React.ReactNode }) {
  return children;
}


