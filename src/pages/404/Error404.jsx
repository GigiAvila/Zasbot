import { useTheme } from '../../hooks/UseTheme'
import errorImg from './assets/error.png'
import { ErrorSection, ErrorArticle } from './Error404.Styles'

const Error404 = () => {
  const { currentTheme } = useTheme()

  return (
    <ErrorSection theme={{ currentTheme }}>
      <ErrorArticle theme={{ currentTheme }}>
        <img src={errorImg} alt='Error Image' />
      </ErrorArticle>
      <ErrorArticle theme={{ currentTheme }}>
        <h2>Error 404</h2>
        <p>Page not found</p>
      </ErrorArticle>
    </ErrorSection>
  )
}

export default Error404
