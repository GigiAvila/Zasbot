import { useState, useEffect } from 'react'
import { useTheme } from '../../../hooks/UseTheme'
import {
  FlowChartSection,
  TextWrapper,
  FlowBG,
  QuoteLogoWrapper,
  FlowChartTitles,
  FlowVideo,
  SpanText
} from './FlowChart.Styles'
import WorldImage from './Assets/World.svg'
import QuoteImage from './Assets/quote.png'
import FlowChartVideo from './Assets/video.mp4'

const FlowChart = () => {
  const [scrollY, setScrollY] = useState(0)
  const [animate, setAnimate] = useState(false)
  const isDesktop = window.innerWidth > 768
  const { currentTheme } = useTheme()

  const handleScroll = () => {
    const newScrollY = window.scrollY
    setScrollY(newScrollY)

    const startScrollY = isDesktop ? 1000 : 1100

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
    <FlowChartSection id='flowChart' theme={{ currentTheme }}>
      <FlowBG WorldImage={WorldImage} theme={{ currentTheme }}>
        <TextWrapper>
          <QuoteLogoWrapper
            theme={{ currentTheme }}
            scrollY={scrollY}
            animate={animate}
          >
            <img src={QuoteImage} alt='Quote logo' />
          </QuoteLogoWrapper>
          <FlowChartTitles
            theme={{ currentTheme }}
            scrollY={scrollY}
            animate={animate}
          >
            <h1>Diseña tus conversaciones</h1>
            <h2>
              Con nuestra herramienta{' '}
              <SpanText theme={{ currentTheme }}>No-Code</SpanText> puedes
              diseñar tus flujos conversacionales a medida, para mayor
              satisfacción de tus clientes
            </h2>
          </FlowChartTitles>
        </TextWrapper>
      </FlowBG>
      <FlowVideo scrollY={scrollY} animate={animate}>
        <video src={FlowChartVideo} autoPlay loop muted></video>
      </FlowVideo>
    </FlowChartSection>
  )
}

export default FlowChart
