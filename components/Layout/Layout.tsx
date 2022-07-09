import { ReactNode } from 'react'

type LayoutProps = {
  children?: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="max-w-[75rem] mx-auto border">
      <div className="grid grid-cols-12">
        <aside className="col-span-4">
          <h1>Cory Pierson</h1>
          <p>
            I build, maintain, and troubleshoot all things web. I currently work
            at JK Design as a Senior Front-End Developer.
          </p>
        </aside>
        <section className="col-span-8">{children}</section>
      </div>
    </main>
  )
}
