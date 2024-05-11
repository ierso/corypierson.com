export type WorkType = {
  _id?: string
  title: string
  url: string
  description: string
  image: Image
}

interface Image {
  asset: Asset
}

interface Asset {
  url: string
  _rev: string
  _type: string
  _updatedAt: Date
  metadata: Metadata
  size: number
  _id: string
}

interface Metadata {
  lqip: string
}
