import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import LayoutWrapper from '@/components/layout/LayoutWrapper'

const ppNeue = localFont({
  src: [
    {
      path: './fonts/PPNeueMontreal-Book.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/PPNeueMontreal-Regular.woff2',
      weight: '450',
      style: 'normal',
    },
    {
      path: './fonts/PPNeueMontreal-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/PPNeueMontreal-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-pp',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Imagine — The Configurable Commerce Platform',
    template: '%s — Imagine',
  },
  description:
    'Imagine powers configurable commerce. The platform infrastructure for brands that sell products with options — visualise, configure, and build product experiences at scale.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://imagine.com',
    siteName: 'Imagine',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={ppNeue.variable}>
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  )
}
