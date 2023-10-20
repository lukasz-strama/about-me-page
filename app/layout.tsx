import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'About Me - Łukasz Strama',
  description: 'Let me introduce myself to you!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ overflow: 'hidden' }} className={inter.className}>{children}</body>
    </html>
  )
}
