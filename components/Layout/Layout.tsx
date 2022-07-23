import { ReactNode } from 'react'
import { About } from '../About'

type LayoutProps = {
  children?: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <main className="max-w-[75rem] mx-auto">
      <div className="grid grid-cols-12">
        <aside className="sticky top-0 flex items-center h-screen col-span-4">
          <About />
        </aside>
        <section className="col-span-8">
          <div className="px-8 py-10">{children}</div>
        </section>
      </div>
    </main>
  )
}
