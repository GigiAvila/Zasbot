import {
  FOOTER_CONTACT_BUTTON_TEXT,
  FOOTER_CONTACT_TEXT,
  FOOTER_CONTACT_TITLE
} from '../../../../data/SpanishText'
import {
  ContactFooterContainer,
  ContactFooterTextWrapper,
  ContactButton
} from './FooterContact.Styles'
import { useTheme } from '../../../../hooks/UseTheme'
import { Link } from 'react-router-dom'

const FooterContact = () => {
  const { currentTheme } = useTheme()

  return (
    <ContactFooterContainer theme={{ currentTheme }}>
      <ContactFooterTextWrapper theme={{ currentTheme }}>
        <h1>{FOOTER_CONTACT_TITLE}</h1>
        <p>{FOOTER_CONTACT_TEXT}</p>
        <ContactButton theme={{ currentTheme }}>
          <Link to='/contact'>{FOOTER_CONTACT_BUTTON_TEXT}</Link>
        </ContactButton>
      </ContactFooterTextWrapper>
    </ContactFooterContainer>
  )
}

export default FooterContact
