'use client'

import { useEffect, useState } from 'react'

import { DarkIcon } from './DarkIcon'
import { LightIcon } from './LightIcon'
import clsx from 'clsx'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <button
        className={clsx(
          resolvedTheme === 'dark' ? 'border-white' : 'border-black',
          'p-2 border rounded-full flex'
        )}
        aria-label="Toggle Dark Mode"
        type="button"
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      >
        <span className="w-[20px]">
          {resolvedTheme === 'dark' ? <LightIcon /> : <DarkIcon />}
        </span>
      </button>
    </>
  )
}
