import { useTheme } from '../../hooks/UseTheme'
import { PriceSection, PricingCardSection, TaxText } from './Prices.Styles'
import PrincingTitles from './PrincingTitles'
import PricingCards from './PricingCards'

const Prices = () => {
  const { currentTheme } = useTheme()

  return (
    <PriceSection theme={{ currentTheme }}>
      <PricingCardSection>
        <PrincingTitles />
        <PricingCards />
        <TaxText theme={{ currentTheme }}>
          * Los precios no incluyen impuestos
        </TaxText>
      </PricingCardSection>
    </PriceSection>
  )
}

export default Prices
