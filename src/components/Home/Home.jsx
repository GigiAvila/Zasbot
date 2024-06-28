import {
  HomeSection,
  HomeTextArticle,
  HomeImgArticle,
  HomeSpan,
  // HomeInput,
  HomeAnchor,
  // HomeButton,
  FreeTrialButton,
  DemoButton,
  ButtonLeft,
  // HomeButtonImgWrapper,
  HeroWrapper,
  CtaArticle
} from './Home.Styles'
import {
  HOME_SLOGAN,
  HOME_BUTTON_TEXT,
  HOME_BUTTON_DEMO
  // HOME_INPUT_TEXT
} from '../../data/SpanishText'
import HeroBG from './Assets/HeroBG.png'
// import ArrowImg from './Assets/Arrow.png'
import { useTheme } from '../../hooks/UseTheme'
// import HomeVideo from './Assets/HomeVideo.mp4'

const Home = () => {
  const { currentTheme } = useTheme()

  return (
    <HomeSection id='home' theme={{ currentTheme }} HeroBG={HeroBG}>
      <HeroWrapper>
        <HomeTextArticle theme={{ currentTheme }}>
          <h1>
            Automatiza tu empresa{' '}
            <HomeSpan theme={{ currentTheme }}>
              {' '}
              con Chatbots inteligentes
            </HomeSpan>{' '}
          </h1>
          <h2>{HOME_SLOGAN}</h2>
          <CtaArticle>
            <ButtonLeft theme={{ currentTheme }}>
              <FreeTrialButton theme={{ currentTheme }}>
                <HomeAnchor
                  href='https://app.zasbot.com/register'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {' '}
                  {HOME_BUTTON_TEXT}
                </HomeAnchor>
                {/* <HomeButtonImgWrapper>
                <img src={ArrowImg} alt='Send Icon' />
              </HomeButtonImgWrapper> */}
              </FreeTrialButton>
              <p>* No requiere tarjeta de crédito</p>
            </ButtonLeft>
            <DemoButton theme={{ currentTheme }}>
              <HomeAnchor
                href='https://calendly.com/nestor-zasbot'
                target='_blank'
                rel='noopener noreferrer'
              >
                {' '}
                {HOME_BUTTON_DEMO}
              </HomeAnchor>
              {/* <HomeButtonImgWrapper>
                <img src={ArrowImg} alt='Send Icon' />
              </HomeButtonImgWrapper> */}
            </DemoButton>
          </CtaArticle>
        </HomeTextArticle>
        <HomeImgArticle theme={{ currentTheme }}>
          {/* <video src={HomeVideo} autoPlay muted loop loading='lazy'></video> */}
          <img
            src='https://res.cloudinary.com/dqdyvyknw/image/upload/v1719342554/ZASBOT_7_lxpwru.png'
            alt='Zasbot Home logo'
          />
        </HomeImgArticle>
      </HeroWrapper>
    </HomeSection>
  )
}

export default Home
