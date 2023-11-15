import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Barabanov-Dev',
  description: 'My personal card',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='min-h-screen flex flex-col items-center justify-between p-4'>
        <header>
          Header
        </header>
        {children}
        <footer>
          Footer
        </footer>
      </body>
    </html>
  )
}
