import Image from 'next/image'
import { WorkType } from '@lib/types'
import { sanityClient } from '@lib/sanity-server'
import { useNextSanityImage } from 'next-sanity-image'

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

function WorkInfo({ title, description, url, image }: WorkType) {
  const sanityImage = useNextSanityImage(sanityClient, image)

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="overflow-hidden relative flex [&:nth-of-type(2n+2)]:row-span-2 rounded-md transform sm:hover:scale-[1.01] sm:hover:shadow-sm transition-all"
      aria-label={title}
    >
      {image && (
        <Image
          src={sanityImage?.src}
          className="object-cover w-full"
          fill
          placeholder="blur"
          blurDataURL={image?.asset?.metadata?.lqip}
          alt={title}
          priority={true}
        />
      )}
      <div
        className="relative w-full p-6 text-white place-self-end"
        style={{ background: 'linear-gradient(0deg,#000,transparent)' }}
      >
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="mt-1 text-sm leading-5">{description}</p>
      </div>
    </a>
  )
}
