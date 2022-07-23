import { WorkType } from '@lib/types'

type WorkProps = {
  allWork: WorkType[]
}

export function Work({ allWork }: WorkProps) {
  return (
    <div className="grid gap-4 grid-flow-dense mt-6 auto-rows-[minmax(200px,_3fr)] grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]">
      {allWork.map((work) => {
        const { _id, title, url, description } = work
        return (
          <WorkInfo
            key={_id}
            title={title}
            url={url}
            description={description}
          />
        )
      })}
    </div>
  )
}

type WorkInfoProps = {
  title: string
  description: string
  url: string
}

function WorkInfo({ title, description, url }: WorkInfoProps) {
  return (
    <a
      href={url}
      target="_blank"
      className="bg-red-500 flex [&:nth-of-type(2n+2)]:row-span-2"
      rel="noreferrer"
    >
      <div className="p-6 text-white place-self-end">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="mt-1 text-sm leading-5">{description}</p>
      </div>
    </a>
  )
}
