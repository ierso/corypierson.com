import { WorkInfo } from './WorkInfo'
import { WorkType } from '@lib/types'

type WorkProps = {
  allWork: WorkType[]
}

export function Work({ allWork }: WorkProps) {
  return (
    <div className="grid gap-4 grid-flow-dense mt-6 auto-rows-[minmax(275px,_3fr)] grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]">
      {allWork.map((work) => {
        const { _id, title, url, description, image } = work

        return (
          <WorkInfo
            key={_id}
            title={title}
            url={url}
            description={description}
            image={image}
          />
        )
      })}
    </div>
  )
}
