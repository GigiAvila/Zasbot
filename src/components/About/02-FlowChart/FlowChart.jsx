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
  const { currentTheme } = useTheme()

  const subContainer = {
    hidden: {
      opacity: 0
    },
    reveal: {
      opacity: 1,

      transition: {
        duration: 2,
        delay: 1,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <FlowChartSection id='flowChart' theme={{ currentTheme }}>
      <FlowBG WorldImage={WorldImage} theme={{ currentTheme }}>
        <TextWrapper>
          <QuoteLogoWrapper
            theme={{ currentTheme }}
            data-scroll
            data-scroll-direction='horizontal'
            data-scroll-speed='-2'
          >
            <img src={QuoteImage} alt='Quote logo' />
          </QuoteLogoWrapper>
          <FlowChartTitles theme={{ currentTheme }}>
            <h1
              data-scroll
              data-scroll-direction='horizontal'
              data-scroll-speed='-1'
              data-scroll-delay='1.2'
            >
              Diseña tus conversaciones
            </h1>
            <h2
              data-scroll
              data-scroll-direction='horizontal'
              data-scroll-speed='-1'
              data-scroll-delay='0.8'
            >
              Con nuestra herramienta{' '}
              <SpanText theme={{ currentTheme }}>No-Code</SpanText> puedes
              diseñar tus flujos conversacionales a medida, para mayor
              satisfacción de tus clientes
            </h2>
          </FlowChartTitles>
        </TextWrapper>
      </FlowBG>
      <FlowVideo variants={subContainer} initial='hidden' animate='reveal'>
        <video src={FlowChartVideo} autoPlay loop muted></video>
      </FlowVideo>
    </FlowChartSection>
  )
}

export default FlowChart
