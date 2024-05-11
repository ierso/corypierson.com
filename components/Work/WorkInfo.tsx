import Image from 'next/image'
import { WorkType } from '@lib/types'
import { sanityClient } from '@lib/sanity-server'
import { useNextSanityImage } from 'next-sanity-image'

export function WorkInfo({ title, description, url, image }: WorkType) {
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
          sizes="(min-width: 680px) 50vw, (min-width: 1024px) 33vw, 100vw"
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
