import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BlackswanTechnology',
  description: 'Created with yo-safouat',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
