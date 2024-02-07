import WhatsappButton from '../WhatsappButton/WhatsappButton'
import ContactForm from './ContactForm/ContactForm'
import { FormSection, ContactWrapper } from './Contact.Styles.jsx'
import { useTheme } from '../../hooks/UseTheme.jsx'
import { CONTACT_TITLE } from '../../data/SpanishText.js'

const Contact = () => {
  const { currentTheme } = useTheme()
  return (
    <FormSection theme={{ currentTheme }}>
      <ContactWrapper theme={{ currentTheme }}>
        <h1>{CONTACT_TITLE}</h1>
        <ContactForm />
      </ContactWrapper>
      <WhatsappButton />
    </FormSection>
  )
}

export default Contact
