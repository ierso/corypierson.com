import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <h2 className="text-2xl font-bold">Client work</h2>
      <div
        className="grid gap-4 grid-flow-dense mt-6 auto-rows-[minmax(150px,_3fr)]"
        style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))' }}
      >
        <div className="bg-red-500 [&:nth-of-type(2n+2)]:row-span-2	"></div>
        <div className="bg-red-500 flex [&:nth-of-type(2n+2)]:row-span-2	">
          <div className="p-6 text-white place-self-end">
            <h3 className="text-lg font-bold">JK Design</h3>
            <p className="mt-1 text-sm leading-5">
              Agency web-build made with Gatsby and headless WordPress.
            </p>
          </div>
        </div>
        <div className="bg-red-500 [&:nth-of-type(2n+2)]:row-span-2	"></div>
        <div className="bg-red-500 [&:nth-of-type(2n+2)]:row-span-2	"></div>
        <div className="bg-red-500 [&:nth-of-type(2n+2)]:row-span-2	"></div>
        <div className="bg-red-500 [&:nth-of-type(2n+2)]:row-span-2	"></div>
        <div className="bg-red-500 [&:nth-of-type(2n+2)]:row-span-2	"></div>
        <div className="bg-red-500 [&:nth-of-type(2n+2)]:row-span-2	"></div>
      </div>
    </>
  )
}

export default Home
