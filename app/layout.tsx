import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AdsGenius AI Course - Members Area',
  description: 'Complete training course: Land Your First $500-$1,000 Client in 7 Days & Build a $5K-10K/Month Ad Creative Agency',
  icons: {
    icon: [
      { url: '/images/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/icon.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/images/icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'AdsGenius AI Course - Members Area',
    description: 'Complete training course: Land Your First $500-$1,000 Client in 7 Days & Build a $5K-10K/Month Ad Creative Agency',
    images: ['/images/adsgenius_logo_dark.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/icon.png" />
      </head>
      <body className={inter.className}>
        <Providers>
          <Navigation />
          <main className="min-h-screen bg-gradient-to-b from-primary-50 via-white to-primary-50/30">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

