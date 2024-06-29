import { createClient } from '@sanity/client'
import ImageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'wy7hl7dq',
  dataset: 'production',
  apiVersion: '2024-03-11',
  useCdn: true
})

const builder = ImageUrlBuilder(client)

export const urlFor = (source) => {
  return builder.image(source)
}
