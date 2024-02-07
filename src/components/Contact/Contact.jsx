import WhatsappButton from '../WhatsappButton/WhatsappButton'
import ContactForm from './ContactForm/ContactForm'
import { FormSection, ContactWrapper } from './Contact.Styles.jsx'
import { useTheme } from '../../hooks/UseTheme.jsx'

const Contact = () => {
  const { currentTheme } = useTheme()
  return (
    <FormSection theme={{ currentTheme }}>
      <ContactWrapper theme={{ currentTheme }}>
        <h1>Contacto</h1>
        <ContactForm />
      </ContactWrapper>
      <WhatsappButton />
    </FormSection>
  )
}

export default Contact
