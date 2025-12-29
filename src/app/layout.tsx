import "./globals.css";
import type { Metadata } from "next";
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
  metadataBase: new URL('https://www.modernmhh.com'),
  title: "Modern Mental Health & Hormones | PMHNP for Women in Ohio",
  description:
    "One provider, complete care — no referrals. Mental health & hormone care serving Columbus, Cleveland, Cincinnati, Toledo, Akron, Dayton, and all of Ohio with Stephanie Nichols, PMHNP-BC. Virtual and in-person appointments available.",
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: "Modern Mental Health & Hormones | Ohio",
    description: "Mental health & hormone care for women in mid-life. Specialized care with Stephanie Nichols, PMHNP-BC serving Columbus, Cleveland, Cincinnati, Toledo, Akron, Dayton, and all of Ohio.",
    url: "https://www.modernmhh.com",
    siteName: "Modern Mental Health & Hormones",
    images: [
      {
        url: '/LOGO PNG.png',
        width: 1200,
        height: 1200,
        alt: 'Modern Mental Health & Hormones Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Modern Mental Health & Hormones | Ohio",
    description: "Mental health & hormone care for women serving Columbus, Cleveland, Cincinnati, Toledo, Akron, Dayton, and all of Ohio. Virtual and in-person appointments.",
    images: ['/LOGO PNG.png'],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Switch to Palette B by adding: className="theme-b"
    <html lang="en" className={`${inter.variable} ${crimsonText.variable} ${crimsonPro.variable}`}>
      <head>
        <link rel="preconnect" href="https://use.typekit.net" />
        <link rel="stylesheet" href="https://use.typekit.net/jqn6aqv.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              "name": "Modern Mental Health & Hormones",
              "url": "https://www.modernmhh.com",
              "telemedicinePhone": "Replace with your number",
              "areaServed": "US-OH",
              "medicalSpecialty": ["MentalHealth", "Women'sHealth"],
              "founder": {
                "@type": "Person",
                "name": "Stephanie Nichols, PMHNP-BC"
              },
              "sameAs": []
            })
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
