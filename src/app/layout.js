import './globals.css'
import { Inter } from 'next/font/google'
// import Head from 'next/head';
import Footer from './Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blinds',
  description: 'The best dark mode package for all websites',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="keywords" content="dark mode night mode" />
        <meta property="og:title" content="Blinds Dark Mode Package" />
        <meta property="og:url" content="https://blindsjs.dev" />
        <meta property="og:description" content="The best dark mode package for your website" />
        <meta property="og:image" content="https://raw.githubusercontent.com/Ikennaf1/staticrepo/master/imgs/og-blinds.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        <link rel="manifest" href="/site.webmanifest.json" />
      </head>
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
