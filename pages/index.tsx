import { InferGetStaticPropsType } from 'next'
import { Work } from '@components/Work'
import { workQuery } from '@lib/queries'
import { getClient, overlayDrafts } from '@lib/sanity-server'

export default function Home({
  allWork,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <h2 className="text-2xl font-bold">Client work</h2>
      <Work allWork={allWork} />
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allWork = overlayDrafts(await getClient(preview).fetch(workQuery))
  return {
    props: { allWork },
  }
}
