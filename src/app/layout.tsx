import "./globals.css";
import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";

const serif = DM_Serif_Display({ subsets: ["latin"], weight: "400", variable: "--font-serif" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Modern Mental Health and Hormones",
  description: "Telehealth for women’s mental wellness & mid-life hormone health by NP Stephanie Nichols.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-cream text-charcoal antialiased">{children}</body>
    </html>
  );
}
