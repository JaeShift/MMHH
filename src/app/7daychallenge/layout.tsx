import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600"],
  variable: "--font-playfair",
  display: "swap"
});

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "7-Day Micro-Habit Challenge | Modern Mental Health & Hormones",
  description: "Transform your well-being with small, powerful daily habits. Join our free 7-day micro-habit challenge and receive daily guidance for better mental health and hormonal balance.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function ChallengeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${playfair.variable} ${inter.variable}`} style={{ fontFamily: 'var(--font-inter)' }}>
      {children}
    </div>
  );
}
