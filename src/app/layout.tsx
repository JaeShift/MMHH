import "./globals.css";
import type { Metadata } from "next";
import { Inter, Crimson_Text, Crimson_Pro } from "next/font/google";
import { acceptedInsuranceCarriers } from "../content/acceptedInsurance";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const crimsonText = Crimson_Text({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-serif" });

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '600'],
  variable: '--font-caslon',
});

const insuranceKeywords = acceptedInsuranceCarriers.map((c) => c.name);

export const metadata: Metadata = {
  metadataBase: new URL('https://www.modernmhh.com'),
  title: "Modern Mental Health & Hormones | PMHNP for Women in Ohio",
  description:
    "One provider, complete care — no referrals. Mental health & hormone care for women in Ohio with Stephanie Nichols, PMHNP-BC. In-network with major plans including Cigna Evernorth, United Healthcare, Optum, Medical Mutual, Anthem, Aetna, Carelon, MultiPlan, and UMR where applicable. Columbus, Cleveland, Cincinnati, Toledo, Akron, Dayton, and statewide telehealth.",
  keywords: [
    "Ohio PMHNP",
    "women's mental health Ohio",
    "hormone care Ohio",
    ...insuranceKeywords,
  ],
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
    other: [
      {
        rel: 'apple-touch-icon',
        url: '/favicon.png',
      },
    ],
  },
  openGraph: {
    title: "Modern Mental Health & Hormones | Ohio",
    description:
      "Mental health & hormone care for women in Ohio with Stephanie Nichols, PMHNP-BC. In-network with Cigna, United Healthcare / Optum, Medical Mutual, Anthem, Aetna, Carelon, MultiPlan, UMR, and related networks where applicable. Virtual and in-person visits.",
    url: "https://www.modernmhh.com",
    siteName: "Modern Mental Health & Hormones",
    images: [
      {
        // Avoid spaces in URLs (can break previews/crawlers)
        url: '/LOGO%20PNG.png',
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
    description:
      "Women's mental health & hormone care in Ohio. Major insurance plans accepted where in-network; telehealth statewide.",
    images: ['/LOGO%20PNG.png'],
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
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="16x16" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://use.typekit.net" />
        <link rel="stylesheet" href="https://use.typekit.net/jqn6aqv.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://www.modernmhh.com/#website",
                  "url": "https://www.modernmhh.com/",
                  "name": "Modern Mental Health & Hormones",
                  "alternateName": ["Modern MHH", "ModernMHH"],
                  "publisher": { "@id": "https://www.modernmhh.com/#organization" },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://www.modernmhh.com/?s={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "MedicalOrganization",
                  "@id": "https://www.modernmhh.com/#organization",
                  "name": "Modern Mental Health & Hormones",
                  "url": "https://www.modernmhh.com/",
                  "logo": "https://www.modernmhh.com/LOGO%20PNG.png",
                  "description": "Psychiatric mental health and hormone-informed care for adult women in Ohio. In-network with multiple major commercial plans and networks (including Cigna Evernorth, United Healthcare, Optum, Medical Mutual, Anthem, Aetna, Carelon, MultiPlan, and UMR) where member benefits apply; superbills and HSA or FSA may be available as described on the site.",
                  "areaServed": "US-OH",
                  "medicalSpecialty": ["MentalHealth", "Women'sHealth"],
                  "founder": {
                    "@type": "Person",
                    "name": "Stephanie Nichols, PMHNP-BC"
                  },
                  "sameAs": [
                    "https://www.facebook.com/profile.php?id=61584364929024",
                    "https://www.instagram.com/modernmhh/"
                  ]
                }
              ]
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
