import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin"] })
const _playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'ImplantesCali | Implantes Dentales de por Vida en Cali, Colombia',
  description:
    'Recupera tu sonrisa con implantes dentales enfocados a durar toda la vida en Cali, Colombia. Cirugia guiada, tecnologia 3D y tasas de exito superiores al 95%. Agenda tu valoracion.',
  keywords: [
    'implantes dentales Cali',
    'implantologia oral Cali',
    'cirugia guiada dental',
    'implantes sin dolor Cali',
    'clinica dental Cali Colombia',
  ],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a6fb5',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
