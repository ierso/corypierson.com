import { InferGetStaticPropsType } from 'next'
import { Work } from '@components/Work'

export default function Home({
  work,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(work)
  return (
    <>
      <h2 className="text-2xl font-bold">Client work</h2>
      <Work />
    </>
  )
}

export async function getStaticProps() {
  const work = [{ name: 'cory p' }]
  return {
    props: {
      work,
    },
  }
}
