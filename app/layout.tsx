import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kaido <3',
  description: 'Para cuando estes triste',
  generator: 'Rodri',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
