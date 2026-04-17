import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BhramAI | Free AI Interview Assistant',
  description: '100% Free. No Login. No Tracking. Download now.',
  keywords: ['AI', 'interview', 'assistant', 'free', 'offline', 'privacy'],
  authors: [{ name: 'VizoLabs Syndicate' }],
  openGraph: {
    title: 'BhramAI | Free AI Interview Assistant',
    description: '100% Free. No Login. No Tracking. Download now.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#030303] antialiased">{children}</body>
    </html>
  )
}
