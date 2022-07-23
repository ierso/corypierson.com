import { Work } from '@components/Work'
import { workQuery } from '@lib/queries'
import { getClient, overlayDrafts } from '@lib/sanity-server'
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

export async function getStaticProps({ preview = false }) {
  const allWork = overlayDrafts(await getClient(preview).fetch(workQuery))

  return {
    props: { allWork },
  }
}
