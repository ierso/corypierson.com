const workFields = `
  _id,
  title,
  description,
  image,
  url,
  order
`

export const workQuery = `
*[_type == "work"] | order(order asc) {
  ${workFields}
}`
