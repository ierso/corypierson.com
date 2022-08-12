import { Work } from '@components/Work'
import { workQuery } from '@lib/queries'
import { sanityClient } from '@lib/sanity-server'
import { WorkType } from '@lib/types'

type HomeProps = {
  allWork: WorkType[]
}

export default function Home({ allWork }: HomeProps) {
  return (
    <>
      <h2 className="text-2xl font-bold">Client work</h2>
      {allWork.length > 0 && <Work allWork={allWork} />}
    </>
  )
}

export async function getStaticProps() {
  const allWork = await sanityClient.fetch(workQuery)
  return {
    props: { allWork },
    revalidate: 10,
  }
}
