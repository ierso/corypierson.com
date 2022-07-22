import { WorkInfo } from './WorkInfo'

export function Work() {
  return (
    <div
      className="grid gap-4 grid-flow-dense mt-6 auto-rows-[minmax(150px,_3fr)]"
      style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))' }}
    >
      <WorkInfo
        title="JK Design"
        description="Agency web-build made with Gatsby and headless WordPress."
      />
      <WorkInfo title="" description="" />
      <div className="bg-red-500 [&:nth-of-type(2n+2)]:row-span-2	"></div>
      <div className="bg-red-500 flex [&:nth-of-type(2n+2)]:row-span-2">
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
  )
}
