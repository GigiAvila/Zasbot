import { useState, useEffect } from 'react'
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
import OpenIAImg from './Assets/openIA.png'
import PaypalImg from './Assets/paypal.svg'
import SheetsImg from './Assets/sheets.svg'
import StripeImg from './Assets/stripe.svg'
import TwillioImg from './Assets/twillio.svg'
import ZapierImg from './Assets/zapier.svg'
import WhatsappImg from './Assets/whatsapp.svg'
import SlackImg from './Assets/slack.svg'

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
    SlackImg
  ]
  const [scrollY, setScrollY] = useState(0)
  const [animate, setAnimate] = useState(false)
  const isDesktop = window.innerWidth > 768

  const handleScroll = () => {
    const newScrollY = window.scrollY
    setScrollY(newScrollY)

    const startScrollY = isDesktop ? 100 : 600

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
    <IntegrationsSection id='integrations' theme={{ currentTheme }}>
      <IntegracionsTitles
        theme={{ currentTheme }}
        scrollY={scrollY}
        animate={animate}
      >
        {' '}
        <h1>Integraciones</h1>
        <h2>{INTEGRATION_TEXT}</h2>
      </IntegracionsTitles>
      <LogosArticle
        theme={{ currentTheme }}
        scrollY={scrollY}
        animate={animate}
      >
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
