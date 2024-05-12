'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { ThemeProvider } from 'next-themes'
import { createContext } from 'react'

export const ThemeContext = createContext({})

export function AppProvider({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </QueryClientProvider>
  )
}
