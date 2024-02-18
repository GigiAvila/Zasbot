import WhatsappButton from '../WhatsappButton/WhatsappButton'
import { useTheme } from '../../hooks/UseTheme'
import { PriceSection, PricingCardSection } from './Prices.Styles'
import PrincingTitles from './PrincingTitles'
import PricingCards from './PricingCards'

const Prices = () => {
  const { currentTheme } = useTheme()

  return (
    <PriceSection theme={{ currentTheme }}>
      <PricingCardSection>
        <PrincingTitles />
        <PricingCards />
      </PricingCardSection>

      <WhatsappButton />
    </PriceSection>
  )
}

export default Prices
