import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Inter, DM_Serif_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const dmserif = DM_Serif_Display({ subsets: ["latin"], weight: "400", variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Modern Mental Health & Hormones | Columbus, OH",
  description:
    "Personalized care for mid-life women's mental health and hormones. Evidence-based treatment for mood, sleep, stress, and perimenopause in Columbus, Ohio. Book with Nurse Practitioner Stephanie Nichols.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Switch to Palette B by adding: className="theme-b"
    <html lang="en" className={`${inter.variable} ${dmserif.variable}`}>
      <body className="antialiased">
        {children}
        {/* SEO JSON-LD */}
        <Script id="org-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            name: "Modern Mental Health & Hormones",
            url: "https://modernmhh.com",
            email: "info@modernmhh.com",
            medicalSpecialty: ["Psychiatry", "Endocrinology"],
            areaServed: "Columbus, Ohio",
            address: { "@type": "PostalAddress", addressLocality: "Columbus", addressRegion: "OH", addressCountry: "US" },
            founder: { "@type": "Person", name: "Stephanie Nichols", jobTitle: "Nurse Practitioner" },
          })}
        </Script>
      </body>
    </html>
  );
}
