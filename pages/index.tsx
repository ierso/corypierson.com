import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div
      className="grid gap-4 grid-flow-dense auto-rows-[minmax(150px,_3fr)]"
      style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))' }}
    >
      <div className="bg-red-500 [&:nth-of-type(2n+2)]:row-span-2	"></div>
      <div className="bg-red-500 [&:nth-of-type(2n+2)]:row-span-2	"></div>
      <div className="bg-red-500 [&:nth-of-type(2n+2)]:row-span-2	"></div>
      <div className="bg-red-500 [&:nth-of-type(2n+2)]:row-span-2	"></div>
      <div className="bg-red-500 [&:nth-of-type(2n+2)]:row-span-2	"></div>
      <div className="bg-red-500 [&:nth-of-type(2n+2)]:row-span-2	"></div>
      <div className="bg-red-500 [&:nth-of-type(2n+2)]:row-span-2	"></div>
      <div className="bg-red-500 [&:nth-of-type(2n+2)]:row-span-2	"></div>
    </div>
  )
}

export default Home
