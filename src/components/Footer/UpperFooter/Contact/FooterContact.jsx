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

const FooterContact = () => {
  const { currentTheme } = useTheme()

  return (
    <ContactFooterContainer theme={{ currentTheme }}>
      <ContactFooterTextWrapper theme={{ currentTheme }}>
        <h3>{FOOTER_CONTACT_TITLE}</h3>
        <h5>{FOOTER_CONTACT_TEXT}</h5>
        <ContactButton>{FOOTER_CONTACT_BUTTON_TEXT}</ContactButton>
      </ContactFooterTextWrapper>
    </ContactFooterContainer>
  )
}

export default FooterContact
