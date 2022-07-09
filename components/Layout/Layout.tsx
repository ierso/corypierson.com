import { ReactNode } from 'react'
import { About } from '../About'

type LayoutProps = {
  children?: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="max-w-[75rem] mx-auto border">
      <div className="grid grid-cols-12">
        <aside className="flex col-span-4">
          <About />
        </aside>
        <section className="col-span-8">
          <div className="p-8">{children}</div>
        </section>
      </div>
    </main>
  )
}
