import WhatsappButton from '../WhatsappButton/WhatsappButton'
import { useTheme } from '../../hooks/UseTheme'
import { PriceSection } from './Prices.Styles'

const Prices = () => {
  const { currentTheme } = useTheme()
  return (
    <PriceSection theme={{ currentTheme }}>
      Prices
      <WhatsappButton />
    </PriceSection>
  )
}

export default Prices
