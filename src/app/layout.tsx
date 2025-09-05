import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Modern Mental Health and Hormones | Stephanie Nichols',
  description: 'Professional healthcare practice specializing in women\'s mental health and hormone therapy. Expert care for your mental wellness journey.',
  keywords: 'mental health, hormones, women\'s health, therapy, healthcare, Stephanie Nichols',
  authors: [{ name: 'Stephanie Nichols' }],
  openGraph: {
    title: 'Modern Mental Health and Hormones',
    description: 'Professional healthcare practice specializing in women\'s mental health and hormone therapy.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
