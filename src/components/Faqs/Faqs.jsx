import { useTheme } from '../../hooks/UseTheme'
import WhatsappButton from '../WhatsappButton/WhatsappButton'
import FaqsList from './FaqsList/FaqsList'
import { FaqsSection, FaqsWrapper } from './Faqs.Styles'

const Faqs = () => {
  const { currentTheme } = useTheme()
  return (
    <FaqsSection theme={{ currentTheme }}>
      <FaqsWrapper theme={{ currentTheme }}>
        <h1>Preguntas frecuentes</h1>
        <FaqsList />
      </FaqsWrapper>
      <WhatsappButton />
    </FaqsSection>
  )
}

export default Faqs
