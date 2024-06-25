import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import getContent from '../../../fetch/BlogPost'
import {
  Blog,
  BlogTitles,
  PostContainer,
  Post,
  PostTitle,
  ImgWrapper,
  Details,
  Excerpt,
  Button,
  Pages,
  Pagination,
  Arrow
} from './BlogIndex.Styles'
import { useTheme } from '../../../hooks/UseTheme'
import ArrowImg from './Assets/Arrow.png'

const BlogIndex = () => {
  const { currentTheme } = useTheme()
  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6
  const navigate = useNavigate()

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const content = await getContent()
        const reversedPosts = content.reverse()
        setPosts(reversedPosts)
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    }

    fetchPosts()
  }, [])

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' }
    return new Date(dateString).toLocaleDateString('es-ES', options)
  }

  const handlePostClick = (slug) => {
    navigate(`/blog/${slug}`)
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(posts.length / postsPerPage)

  return (
    <Blog className='container' theme={{ currentTheme }}>
      <BlogTitles theme={{ currentTheme }}>
        <h1>Blog</h1>
      </BlogTitles>

      <PostContainer>
        {currentPosts.map((post) => (
          <Post
            key={post._id}
            onClick={() => handlePostClick(post.slug.current)}
          >
            <ImgWrapper>
              <img
                src={post.mainImage.asset.url}
                alt={post.title}
                loading='lazy'
              />
            </ImgWrapper>
            <Details theme={{ currentTheme }}>
              <div>
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
              </div>
              <PostTitle theme={{ currentTheme }}>
                <h2>{post.title}</h2>
              </PostTitle>
              <Excerpt theme={{ currentTheme }}>
                <p>{post.body[0].children[0].text}</p>
              </Excerpt>
              <div></div>
              <Button theme={{ currentTheme }}>
                <a href='#'>Continuar Leyendo</a>
              </Button>
            </Details>
          </Post>
        ))}
      </PostContainer>

      <Pagination>
        {currentPage > 1 && (
          <Arrow
            className='prev'
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            theme={{ currentTheme }}
          >
            <img src={ArrowImg} alt='Previous page icon' />
          </Arrow>
        )}
        {Array.from({ length: totalPages }, (_, index) => (
          <Pages
            key={index}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
            className={currentPage === index + 1 ? 'active' : ''}
            theme={{ currentTheme }}
          >
            {index + 1}
          </Pages>
        ))}
        {currentPage < totalPages && (
          <Arrow
            className='next'
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={
              currentPage === totalPages || posts.length <= postsPerPage
            }
            theme={{ currentTheme }}
          >
            <img src={ArrowImg} alt='Next page icon' />
          </Arrow>
        )}
      </Pagination>
    </Blog>
  )
}

export default BlogIndex
