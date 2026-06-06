import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.png',
  },
  title: 'Managed Ventures',
  description: 'Managed Ventures LLC is the holding entity behind mVara and Geniuz. AI-native operating businesses and open-source products.',
  authors: [{ name: 'Jack Crawford', url: 'https://managedv.com' }],
  creator: 'Managed Ventures LLC',
  publisher: 'Managed Ventures LLC',
  openGraph: {
    title: 'Managed Ventures',
    description: 'Managed Ventures LLC is the holding entity behind mVara and Geniuz. AI-native operating businesses and open-source products.',
    url: 'https://managedv.com',
    siteName: 'Managed Ventures',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Managed Ventures',
    description: 'Managed Ventures LLC is the holding entity behind mVara and Geniuz.',
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,500;6..72,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gray-900 text-white min-h-screen">{children}</body>
    </html>
  )
}
