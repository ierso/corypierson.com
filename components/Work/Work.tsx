import { WorkInfo } from './WorkInfo'
import { WorkType } from '@lib/types'

type WorkProps = {
  work: WorkType[]
}

type WorkInfoProps = {
  _id: string
  title: string
  url: string
  description: string
}

export function Work({ work }: WorkProps) {
  return (
    <div className="grid gap-4 grid-flow-dense mt-6 auto-rows-[minmax(200px,_3fr)] grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]">
      {work.map((work: WorkInfoProps) => {
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
