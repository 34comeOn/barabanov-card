import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import Footer from './components/organizms/footer/footer'
import Header from './components/organizms/header/header'
import './globals.css'

export const metadata: Metadata = {
  title: 'Barabanov-Dev',
  description: 'My personal card',
  manifest: '/site.webmanifest',
  icons: [
    {url: '',
    rel:'apple-touch-icon', 
    sizes: '180x180', 
    href: '/apple-touch-icon.png'},
    {url: '',
    rel:'icon', 
    sizes: '32x32', 
    href: '/favicon-32x32.png'},
    {url: '',
    rel:'icon', 
    sizes: '16x16', 
    href: '/favicon-16x16.png'},
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className='min-h-screen flex flex-col items-center justify-between p-4 sm:px-10 lg:px-14'>
          <Header />
            {children}
          <Footer />
        </body>
    </html>
  )
}
