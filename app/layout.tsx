'use client'

import '../styles/globals.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { IBM_Plex_Sans } from 'next/font/google'
import { Layout } from '@components/Layout'
import { ThemeProvider } from 'next-themes'

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const queryClient = new QueryClient()

  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.variable} font-sans transition-colors duration-250 bg-gray-50 dark:bg-gray-900`}
      >
        <main>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider attribute="class">
              <Layout>{children}</Layout>
            </ThemeProvider>
          </QueryClientProvider>
        </main>
      </body>
    </html>
  )
}
