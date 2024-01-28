import { FooterSection } from './Footer.Styles'
import TermsConditionsAndPolicy from './LowerFooter/TermsConditionsAndPolicy'
import UpperFooter from './UpperFooter/UpperFooter'
import { useTheme } from '../../hooks/UseTheme'

const Footer = () => {
  const { currentTheme } = useTheme()

  return (
    <FooterSection theme={{ currentTheme }}>
      <UpperFooter />
      <div
        style={{
          width: '99%',
          height: '1px',
          borderBottom: `1px solid ${currentTheme['--primary-100']}`
        }}
      ></div>

      <TermsConditionsAndPolicy />
    </FooterSection>
  )
}

export default Footer
