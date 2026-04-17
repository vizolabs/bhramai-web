import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BhramAI | Free AI Interview Assistant',
  description: '100% Free. No Login. No Tracking. Download now.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-vanta antialiased">{children}</body>
    </html>
  )
}
