import { client } from '../sanity/client'

async function getContent() {
  const CONTENT_QUERY = `*[_type == "post"] {
    ...,
    author->,
    mainImage {
      ...,
      asset->
    },
    categories[]->,
    body
  }`

  try {
    const content = await client.fetch(CONTENT_QUERY)
    return content
  } catch (error) {
    console.error('Error fetching content:', error)
    return []
  }
}
export default getContent
