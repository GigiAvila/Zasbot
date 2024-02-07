import {
  HomeSection,
  HomeTextArticle,
  HomeImgArticle,
  HomeInput,
  HomeButton,
  HomeButtonImgWrapper,
  HomeForm
} from './Home.Styles'
import {
  HOME_TEXT,
  HOME_SLOGAN,
  HOME_BUTTON_TEXT,
  HOME_INPUT_TEXT
} from '../../data/SpanishText'
import HomeImg from './Assets/Home.png'
import ArrowImg from './Assets/Arrow.png'
import WhatsappButton from '../WhatsappButton/WhatsappButton'
import { useTheme } from '../../hooks/UseTheme'

const Home = () => {
  const { currentTheme } = useTheme()

  return (
    <HomeSection id='home' theme={{ currentTheme }}>
      <HomeTextArticle theme={{ currentTheme }}>
        <h1>{HOME_TEXT}</h1>
        <h3>{HOME_SLOGAN}</h3>
        <HomeForm action='POST' theme={{ currentTheme }}>
          <HomeInput
            type='email'
            placeholder={HOME_INPUT_TEXT}
            theme={{ currentTheme }}
          />
          <HomeButton type='submit' theme={{ currentTheme }}>
            <p>{HOME_BUTTON_TEXT}</p>
            <HomeButtonImgWrapper>
              <img src={ArrowImg} alt='Send Icon' />
            </HomeButtonImgWrapper>
          </HomeButton>
        </HomeForm>
      </HomeTextArticle>
      <HomeImgArticle>
        <img src={HomeImg} alt='Chatbot image preview' />
      </HomeImgArticle>
      <WhatsappButton />
    </HomeSection>
  )
}

export default Home
