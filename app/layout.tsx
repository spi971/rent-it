import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

const nunitoFont = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rent It',
  description: 'Air Bnb clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunitoFont.className}>{children}</body>
    </html>
  )
}
