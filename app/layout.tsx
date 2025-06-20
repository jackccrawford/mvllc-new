import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ManagedV - Building AI-First Ventures',
  description: 'Premier AI venture builder and technology incubator in Scottsdale. Managed Ventures LLC specializes in launching, innovating, and scaling AI-first companies with proven expertise. Transform your visionary AI concepts into market-changing realities.',
  keywords: 'AI ventures, startup incubator, AI investment, venture building, AI innovation, tech startups, Scottsdale',
  authors: [{ name: 'Jack Crawford', url: 'https://managedv.com' }],
  creator: 'Managed Ventures LLC',
  publisher: 'Managed Ventures LLC',
  openGraph: {
    title: 'ManagedV - Building AI-First Ventures',
    description: 'Unlock the future of AI innovation with Managed Ventures LLC, the premier AI venture builder and technology incubator in Scottsdale. Discover how our expertise in launching, innovating, and scaling AI-first companies can transform your visionary concepts into market-changing realities.',
    url: 'https://managedv.com',
    siteName: 'Managed Ventures',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ManagedV - Building AI-First Ventures',
    description: 'Premier AI venture builder specializing in launching, innovating, and scaling AI-first companies with proven expertise in the technology sector.',
    creator: '@jackccrawford',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://managedv.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-900 text-white min-h-screen">{children}</body>
    </html>
  )
}
