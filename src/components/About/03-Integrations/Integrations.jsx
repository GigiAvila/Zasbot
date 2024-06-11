import { INTEGRATION_TEXT } from '../../../data/SpanishText'
import {
  IntegrationsSection,
  IntegracionsTitles,
  LogosArticle,
  LogoWrapper,
  LogoBg,
  LogoImage
} from './Integrations.Styles'
import { useTheme } from '../../../hooks/UseTheme'

import FacebookImg from './Assets/facebook.svg'
import GmailImg from './Assets/gmail.svg'
import InstagramImg from './Assets/instagram.svg'
import MailChimpImg from './Assets/mailchimp.svg'
import OpenIAImg from './Assets/openIA1.png'
import PaypalImg from './Assets/paypal.svg'
import SheetsImg from './Assets/sheets.svg'
import StripeImg from './Assets/stripe.svg'
import TwillioImg from './Assets/twillio.svg'
import ZapierImg from './Assets/zapier.svg'
import WhatsappImg from './Assets/whatsapp.svg'
import SlackImg from './Assets/slack.svg'
import ShopifyImg from './Assets/shopify.svg'
import GoogleTagImg from './Assets/googleTag.png'

const Integrations = () => {
  const { currentTheme } = useTheme()
  const integrationImages = [
    FacebookImg,
    GmailImg,
    InstagramImg,
    MailChimpImg,
    OpenIAImg,
    PaypalImg,
    SheetsImg,
    StripeImg,
    TwillioImg,
    ZapierImg,
    WhatsappImg,
    SlackImg,
    ShopifyImg,
    GoogleTagImg
  ]

  return (
    <IntegrationsSection id='integrations' theme={{ currentTheme }}>
      <IntegracionsTitles theme={{ currentTheme }}>
        {' '}
        <h1>Integraciones</h1>
        <h2>{INTEGRATION_TEXT}</h2>
      </IntegracionsTitles>
      <LogosArticle theme={{ currentTheme }}>
        {integrationImages.map((image, index) => (
          <LogoBg key={index} theme={{ currentTheme }}>
            <LogoWrapper theme={{ currentTheme }}>
              <LogoImage src={image} alt={`Integration Logo ${index + 1}`} />
            </LogoWrapper>
          </LogoBg>
        ))}
      </LogosArticle>
    </IntegrationsSection>
  )
}

export default Integrations
