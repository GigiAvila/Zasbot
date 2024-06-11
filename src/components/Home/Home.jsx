import {
  HomeSection,
  HomeTextArticle,
  HomeImgArticle,
  HomeSpan,
  // HomeInput,
  HomeAnchor,
  HomeButton,
  HomeButtonImgWrapper,
  HeroWrapper,
  HomeForm
} from './Home.Styles'
import {
  HOME_SLOGAN,
  HOME_BUTTON_TEXT
  // HOME_INPUT_TEXT
} from '../../data/SpanishText'
import HeroBG from './Assets/HeroBG.png'
import ArrowImg from './Assets/Arrow.png'
import { useTheme } from '../../hooks/UseTheme'
import HomeVideo from './Assets/HomeVideo.mp4'

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
          <HomeForm theme={{ currentTheme }}>
            {/* <HomeInput
            type='email'
            placeholder={HOME_INPUT_TEXT}
            theme={{ currentTheme }}
          /> */}
            <HomeButton theme={{ currentTheme }}>
              <HomeAnchor
                href='https://app.zasbot.com/register'
                target='_blank'
                rel='noopener noreferrer'
              >
                {' '}
                <p>{HOME_BUTTON_TEXT}</p>
              </HomeAnchor>
              <HomeButtonImgWrapper>
                <img src={ArrowImg} alt='Send Icon' />
              </HomeButtonImgWrapper>
            </HomeButton>
            <p>* No requiere tarjeta de crédito</p>
          </HomeForm>
        </HomeTextArticle>
        <HomeImgArticle theme={{ currentTheme }}>
          <video src={HomeVideo} autoPlay muted loop></video>
        </HomeImgArticle>
      </HeroWrapper>
    </HomeSection>
  )
}

export default Home
