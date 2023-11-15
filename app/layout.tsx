import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from './components/organizms/footer/footer'
import Header from './components/organizms/header/header'
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
