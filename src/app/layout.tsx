import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ashish Lamichhane | Portfolio',
  description: 'Electrical & Electronics Engineer | Educator | Innovator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className={inter.className}>
        <main className="min-h-screen bg-white dark:bg-dark">
          {children}
        </main>
      </body>
    </html>
  )
} 