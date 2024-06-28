import { useLocomotiveScroll } from 'react-locomotive-scroll'
import { ToTopButton } from './ScrollToTop.Styles'
import { useTheme } from '../../hooks/UseTheme'

const ScrollToTop = () => {
  const { currentTheme } = useTheme()
  const { scroll } = useLocomotiveScroll()

  const handleScrollToTop = () => {
    scroll.scrollTo(0, {
      duration: 500,
      disableLerp: true
    })
  }

  return (
    <ToTopButton onClick={handleScrollToTop} theme={{ currentTheme }}>
      <div></div>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='m7.012 18.069 9.702-9.702v7.298l1.499.028-.014-8.81-1.132-1.132-8.81-.014.028 1.499h7.298L5.88 16.937l1.131 1.132Z'></path>
      </svg>
    </ToTopButton>
  )
}

export default ScrollToTop
