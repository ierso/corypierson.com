interface Props {
  title: string
  description: string
}

export const WorkInfo = ({ title, description }: Props) => {
  return (
    <div className="p-6 text-white place-self-end">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-1 text-sm leading-5">{description}</p>
    </div>
  )
}
