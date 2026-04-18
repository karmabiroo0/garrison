import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Suspense } from 'react';

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'Garrison Logistics Inc | Freight Brokerage & Logistics Solutions',
  description: 'Garrison Logistics Inc connects shippers with a nationwide carrier network for Amazon freight, dock-to-dock shipments, dedicated lanes, FTL, LTL, reefer, flatbed, and expedited freight across the USA.',
  keywords: ['freight brokerage', 'logistics', 'trucking', 'carrier network', 'FTL', 'LTL', 'Amazon freight', 'reefer freight', 'flatbed freight'],
  authors: [{ name: 'Garrison Logistics Inc' }],
  openGraph: {
    title: 'Garrison Logistics Inc | Freight Brokerage & Logistics Solutions',
    description: 'Reliable freight brokerage and logistics solutions across the USA. Connect with our nationwide carrier network.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#123A63',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
      <Suspense>
        {children}
        </Suspense>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
