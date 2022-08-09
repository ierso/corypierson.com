const workFields = `
  _id,
  title,
  description,
  url,
  order
`

export const workQuery = `
*[_type == "work"] | order(order asc) {
  ${workFields}
}`
