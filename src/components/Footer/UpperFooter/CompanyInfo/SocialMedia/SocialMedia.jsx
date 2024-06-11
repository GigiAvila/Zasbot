import FacebookLogo from '../../../assets/footer_logo_facebook.svg'
import InstagaramLogo from '../../../assets/footer_logo_instagram.svg'
import LinkedinLogo from '../../../assets/footer_logo_linkedin.svg'
import YoutubeLogo from '../../../assets/footer_logo_youtube.svg'

import { List, Element, Link } from './SocialMedia.Styles'
const SocialMedia = () => {
  return (
    <List>
      <Element>
        <Link
          href='https://www.facebook.com/zasbotapp'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={FacebookLogo} alt='facebook icon' />
        </Link>
      </Element>
      <Element>
        <Link
          href='https://www.instagram.com/zasbotapp'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={InstagaramLogo} alt='instagram icon' />
        </Link>
      </Element>
      <Element>
        <Link
          href='https://www.linkedin.com/company/zasbot'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={LinkedinLogo} alt='linkedIn icon' />
        </Link>
      </Element>
      <Element>
        <Link
          href='https://www.youtube.com/@Zasbotapp'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={YoutubeLogo} alt='youtube icon' />
        </Link>
      </Element>
    </List>
  )
}

export default SocialMedia
