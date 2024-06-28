import { FooterSection } from './Footer.Styles'
import UpperFooter from './UpperFooter/UpperFooter'
import { useTheme } from '../../hooks/UseTheme'
import { LowerFooter } from './LowerFooter/LowerFooter'

const Footer = () => {
  const { currentTheme } = useTheme()

  return (
    <FooterSection theme={{ currentTheme }}>
      <UpperFooter />
      <div
        style={{
          width: '99%',
          height: '1px',
          borderBottom: `1px solid ${currentTheme['--accent-400']}`
        }}
      ></div>

      <LowerFooter />
    </FooterSection>
  )
}

export default Footer
