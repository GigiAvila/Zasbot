import {
  PricingTitleContainer,
  PricingTitle,
  PricingSubtitle
} from './PricingTitles.Styles'
import { useTheme } from '../../hooks/UseTheme'

const PrincingTitles = () => {
  const { currentTheme } = useTheme()

  return (
    <PricingTitleContainer>
      <PricingTitle theme={{ currentTheme }}>
        Nuestro servicio tiene paquetes amigables
      </PricingTitle>
      <PricingSubtitle theme={{ currentTheme }}>
        Elige el plan mensual que mejor se adapte a tus necesidades
      </PricingSubtitle>
    </PricingTitleContainer>
  )
}

export default PrincingTitles
