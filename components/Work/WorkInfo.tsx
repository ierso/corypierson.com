type WorkInfoProps = {
  title: string
  description: string
  url: string
}

export function WorkInfo({ title, description, url }: WorkInfoProps) {
  return (
    <a
      href={url}
      target="_blank"
      className="bg-red-500 flex [&:nth-of-type(2n+2)]:row-span-2"
      rel="noreferrer"
    >
      <div className="p-6 text-white place-self-end">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="mt-1 text-sm leading-5">{description}</p>
      </div>
    </a>
  )
}
