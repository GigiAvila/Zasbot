import { useEffect, useState } from 'react'
import getContent from '../../../fetch/BlogPost'
import { PortableText } from '@portabletext/react'
import Loading from '../../Loading/Loading'
import Error404 from '../../../pages/404/Error404'
import {
  PostSection,
  PostWrapper,
  ImageWrapper,
  Titles,
  Details,
  Content
} from './BlogPost.Styles'
import { useTheme } from '../../../hooks/UseTheme'
import { urlFor } from '../../../sanity/client' // Import the correct urlFor

const serializers = {
  types: {
    image: ({ value }) => {
      return (
        <article className='image-article'>
          <div className='image-wrapper'>
            <img src={urlFor(value).url()} alt='Post image' />
          </div>
        </article>
      )
    }
  },
  block: {
    h1: ({ children }) => <h1>{children}</h1>,
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
    ul: ({ children }) => <ul>{children}</ul>,
    ol: ({ children }) => <ol>{children}</ol>
  },
  marks: {
    link: ({ children, value }) => {
      return (
        <a href={value.href} target='_blank' rel='noopener noreferrer'>
          {children}
        </a>
      )
    }
  }
}

const BlogPost = ({ slug }) => {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const { currentTheme } = useTheme()

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const content = await getContent(slug)
        if (content && content.length > 0) {
          const foundPost = content.find((post) => post.slug.current === slug)
          if (foundPost) {
            setPost(foundPost)
          } else {
            setError(true)
          }
        } else {
          setError(true)
        }
      } catch (error) {
        console.error('Error fetching post:', error)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [slug])

  if (error) {
    return <Error404 />
  }

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' }
    return new Date(dateString).toLocaleDateString('es-ES', options)
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <PostSection theme={{ currentTheme }}>
          <PostWrapper>
            <ImageWrapper>
              <img src={post.mainImage.asset.url} alt='Post main image' />
            </ImageWrapper>
            <Titles theme={{ currentTheme }}>
              <h1>{post.title}</h1>
              <Details theme={{ currentTheme }}>
                Posted by <span>{post.author.name}</span> |{' '}
                <span>{formatDate(post._createdAt)}</span>
                {post.categories && post.categories.length > 0 && (
                  <span>
                    {' '}
                    |{' '}
                    {post.categories.map((category, index) => (
                      <span key={index}>
                        {category.title}
                        {index < post.categories.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </span>
                )}
              </Details>
            </Titles>
            <Content theme={{ currentTheme }}>
              <PortableText
                value={post?.body}
                components={serializers}
                theme={{ currentTheme }}
              />
            </Content>
          </PostWrapper>
        </PostSection>
      )}
    </>
  )
}

export default BlogPost
