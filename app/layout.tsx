import '../styles/globals.css'

import { Layout } from '@components/Layout'
import { Metadata } from 'next'
import { IBM_Plex_Sans } from 'next/font/google'
import { AppProvider } from 'providers/app'

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm',
})

export const metadata: Metadata = {
  title: 'Cory Pierson',
  description:
    'Cory Pierson is a senior front end engineer based in New Jersey focusing on development with modern front end technologies and practices.',
  keywords: [
    'TypeScript',
    'JavaScript',
    'React',
    'Next.js',
    'GraphQL',
    'HTML',
    'CSS',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.variable} font-sans transition-colors duration-250 bg-gray-50 dark:bg-gray-900`}
      >
        <main>
          <AppProvider>
            <Layout>{children}</Layout>
          </AppProvider>
        </main>
      </body>
    </html>
  )
}
