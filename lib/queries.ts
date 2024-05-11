const workFields = `
  _id,
  title,
  description,
  image {
    asset->,
  },
  url
`

export const workQuery = `
*[_type == "work"] | order(orderRank) {
  ${workFields}
}`
