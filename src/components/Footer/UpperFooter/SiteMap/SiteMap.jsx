import { useState, useEffect } from 'react'

import {
  SiteMapSection,
  SiteSection,
  SiteMapContainer,
  SitePage
} from './SiteMap.Styles'
import { useTheme } from '../../../../hooks/UseTheme'
import { ES_SITEMAP } from '../../../../data/SiteMap'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

const SiteMap = () => {
  const { scroll } = useLocomotiveScroll()
  const { currentTheme } = useTheme()
  const [openSections, setOpenSections] = useState(
    window.innerWidth > 768
      ? Array(ES_SITEMAP.length).fill(true)
      : Array(ES_SITEMAP.length).fill(false)
  )

  const toggleSection = (index) => {
    if (window.innerWidth <= 768) {
      const updatedSections = [...openSections]
      updatedSections[index] = !updatedSections[index]
      setOpenSections(updatedSections)
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setOpenSections(Array(ES_SITEMAP.length).fill(false))
      } else {
        setOpenSections(Array(ES_SITEMAP.length).fill(true))
      }
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleScroll = (height) => {
    scroll.scrollTo(height, {
      duration: 500,
      disableLerp: true
    })
  }

  const handleScrollToSection = (section) => {
    window.location.href = '/home'
    handleScroll(0)
    if (section === 'Flujograma') {
      handleScroll(1000)
    } else handleScroll(2000)
  }

  const handleSubrouteClick = (subroute) => {
    switch (subroute) {
      case 'Flujograma':
        handleScrollToSection('Flujograma')
        break
      case 'Live-chat':
        handleScrollToSection('Live-chat')
        break
      case 'Precios':
        window.location.href = '/prices'
        break
      case 'Preguntas frecuentes':
        window.location.href = '/faqs'
        break
      case 'Tutoriales':
        window.open(
          'https://www.youtube.com/channel/UCiCyOh5u3JXzl6sNsFFSSzg',
          '_blank'
        )
        break
      case 'Contáctanos':
        window.location.href = '/contact'
        break
      case 'Prueba gratuita':
        window.open('https://app.zasbot.com/register', '_blank')
        break
      case 'Login':
        window.open('https://app.zasbot.com/login', '_blank')
        break

      default:
        break
    }
  }

  return (
    <SiteMapSection>
      {ES_SITEMAP.map((section, index) => (
        <SiteMapContainer key={index}>
          <SiteSection
            onClick={() => toggleSection(index)}
            theme={{ currentTheme }}
          >
            {section.title}
          </SiteSection>
          {openSections[index] && (
            <>
              {section.subroutes.map((subroute, subIndex) => (
                <SitePage
                  key={subIndex}
                  isOpen={openSections[index]}
                  theme={{ currentTheme }}
                  onClick={() => handleSubrouteClick(subroute)}
                >
                  {subroute}
                </SitePage>
              ))}
            </>
          )}
        </SiteMapContainer>
      ))}
    </SiteMapSection>
  )
}

export default SiteMap
