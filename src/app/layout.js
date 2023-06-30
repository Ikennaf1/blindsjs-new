"use client";

import { blindsInit, blindsToggle, setBlindsStyles } from 'blinds';
import { useEffect } from 'react';
import DarkModeStyle from './DarkModeStyle.json';
import './globals.css';
import Head from 'next/head';
import Footer from './Footer';

export const metadata = {
  title: 'Blinds',
  description: 'The best dark mode package for all websites',
  openGraph: {
    title: 'Blinds',
    description: 'The best dark mode package for all websites',
    image: 'https://raw.githubusercontent.com/Ikennaf1/staticrepo/master/imgs/og-blinds.jpg'
  }
}

export default function RootLayout({ children }) {

  useEffect(() => {
    setBlindsStyles(DarkModeStyle);

    blindsInit();

    document.querySelector('#blinds_id').onclick = () => {
      blindsToggle();
    }

    return ( () => {
      blindsInit();
    });
  });

  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="keywords" content="dark mode night mode" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        <link rel="manifest" href="/site.webmanifest.json" />
      </Head>
      <body className="">
        {children}
        <Footer />
      </body>
    </html>
  )
}
