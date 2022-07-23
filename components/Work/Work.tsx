import { WorkInfo } from './WorkInfo'

// type Work = {
//   allWork:
// }

type WorkInfoProps = {
  _id: string
  title: string
  url: string
  description: string
}

export function Work({ allWork }: { allWork: [] }) {
  return (
    <div className="grid gap-4 grid-flow-dense mt-6 auto-rows-[minmax(200px,_3fr)] grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]">
      {allWork.map((work: WorkInfoProps) => {
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
