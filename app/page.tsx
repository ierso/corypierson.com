import { Work } from '@components/Work'
import { WorkType } from '@lib/types'
import { sanityClient } from '@lib/sanity-server'
import { workQuery } from '@lib/queries'

export default async function Home() {
  const allWork = await getSeverSideProps()

  return (
    <>
      <h2 className="text-2xl font-bold">Client work</h2>
      {allWork?.[0] && <Work allWork={allWork} />}
    </>
  )
}

async function getSeverSideProps(): Promise<WorkType[]> {
  const allWork = await sanityClient.fetch(workQuery)

  return allWork
}
