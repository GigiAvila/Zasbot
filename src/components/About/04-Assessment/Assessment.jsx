import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../../hooks/UseTheme'
import {
  AssessmentSection,
  AssesmentArticle,
  ContactButton,
  BgWrapper
} from './Assessment.Styles'
import BgImage from './Assets/BGImage.png'

const Assessment = () => {
  const [scrollY, setScrollY] = useState(0)
  const [animate, setAnimate] = useState(false)
  const { currentTheme } = useTheme()
  const isDesktop = window.innerWidth > 768

  const handleScroll = () => {
    const newScrollY = window.scrollY
    setScrollY(newScrollY)
    console.log(newScrollY)
    const startScrollY = isDesktop ? 2400 : 2280

    if (newScrollY > startScrollY) {
      setAnimate(true)
    } else {
      setAnimate(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <AssessmentSection id='assessment' theme={{ currentTheme }}>
      <AssesmentArticle
        theme={{ currentTheme }}
        scrollY={scrollY}
        animate={animate}
      >
        <h1>¿Necesitas ayuda con tu proyecto?</h1>
        <p>
          Nuestro equipo está preparado para relevar las necesidades de su
          negocio y diseñar las mejores soluciones. Realizamos proyectos
          especiales para cualquier tamaño de empresa
        </p>
        <ContactButton
          theme={{ currentTheme }}
          scrollY={scrollY}
          animate={animate}
        >
          <Link to='/contact'>Contáctanos</Link>
        </ContactButton>
      </AssesmentArticle>
      <BgWrapper>
        <img src={BgImage} alt='' />
      </BgWrapper>
    </AssessmentSection>
  )
}

export default Assessment
