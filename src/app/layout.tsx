import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Agosta.xyz',
  description: 'AWS Certified Java Application Developer at IBM, Agosta.xyz',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.ico'/>
        <meta name="author" content="Luca Agosta"/>
        {/* Open Graph */}
          <meta property="og:description" content="AWS Certified Java Application Developer at IBM, Agosta.xyz"/>
          <meta property="og:image" content="/preview.png" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:title" content="Agosta.xyz"/>
          <meta property="og:site_name" content="Agosta.xyz"/>
          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://agosta.xyz"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
