import { ReactNode } from 'react'
import { About } from '@components/About'
import { ThemeToggle } from '@components/ThemeToggle'

type LayoutProps = {
  children?: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <main className="max-w-[75rem] mx-auto">
      <div className="flex p-8">
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </div>
      <div className="grid-cols-12 md:grid">
        <aside className="top-0 flex items-center col-span-5 md:h-screen md:sticky lg:col-span-4">
          <About />
        </aside>
        <section className="col-span-7 lg:col-span-8">
          <div className="px-8 py-10">{children}</div>
        </section>
      </div>
    </main>
  )
}
