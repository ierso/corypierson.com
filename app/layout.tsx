import '../styles/globals.css'

import { AppProvider } from 'providers/app'
import { IBM_Plex_Sans } from 'next/font/google'
import { Layout } from '@components/Layout'

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
