import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ManagedV - Building AI-First Ventures',
  description: 'Turning visionary AI concepts into market-changing realities',
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
