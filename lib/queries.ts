const workFields = `
  _id,
  title,
  description,
  url
`

export const workQuery = `
*[_type == "work"] | order(date desc, _updatedAt desc) {
  ${workFields}
}`
