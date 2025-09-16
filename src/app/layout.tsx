import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Crimson_Text, Crimson_Pro } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const crimsonText = Crimson_Text({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-serif" });

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '600'],
  variable: '--font-caslon',
});

export const metadata: Metadata = {
  title: "Modern Mental Health & Hormones | Columbus, OH",
  description:
    "Personalized care for women's mental health and hormones. Evidence-based treatment for mood, sleep, stress, and perimenopause in Columbus, Ohio. Book with Nurse Practitioner Stephanie Nichols.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Switch to Palette B by adding: className="theme-b"
    <html lang="en" className={`${inter.variable} ${crimsonText.variable} ${crimsonPro.variable}`}>
      <head>
        <link rel="preconnect" href="https://use.typekit.net" />
        <link rel="stylesheet" href="https://use.typekit.net/jqn6aqv.css" />
      </head>
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
