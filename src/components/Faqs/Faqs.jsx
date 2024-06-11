import { useTheme } from '../../hooks/UseTheme'
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
    </FaqsSection>
  )
}

export default Faqs
