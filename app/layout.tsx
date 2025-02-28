import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Brigadeiro',
  description: 'Los lazos que importan resisten cualquier tempestad.',
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
