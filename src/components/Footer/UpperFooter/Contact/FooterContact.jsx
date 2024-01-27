import {
  FOOTER_CONTACT_BUTTON_TEXT,
  FOOTER_CONTACT_TEXT,
  FOOTER_CONTACT_TITLE
} from '../../../../data/SpanishText'
import {
  ContactFooterContainer,
  ContactFooterTextWrapper,
  ContactFooterTitle,
  ContactFooterText,
  ContactButton
} from './FooterContact.Styles'

const FooterContact = () => {
  return (
    <ContactFooterContainer>
      <ContactFooterTextWrapper>
        <ContactFooterTitle>{FOOTER_CONTACT_TITLE}</ContactFooterTitle>
        <ContactFooterText>{FOOTER_CONTACT_TEXT}</ContactFooterText>
        <ContactButton>{FOOTER_CONTACT_BUTTON_TEXT}</ContactButton>
      </ContactFooterTextWrapper>
    </ContactFooterContainer>
  )
}

export default FooterContact
