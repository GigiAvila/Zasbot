import { useState, useEffect } from 'react'
import { ES_SITEMAP } from '../../../../data/SiteMap'
import {
  SiteMapSection,
  SiteSection,
  SiteMapContainer,
  SitePage
} from './SiteMap.Styles'
import { useTheme } from '../../../../hooks/UseTheme'

const SiteMap = () => {
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
