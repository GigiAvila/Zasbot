import { FooterSection } from './Footer.Styles'
import TermsConditionsAndPolicy from './LowerFooter/TermsConditionsAndPolicy'
import UpperFooter from './UpperFooter/UpperFooter'

const Footer = () => {
  return (
    <FooterSection>
      <UpperFooter />
      <div
        style={{
          width: '99%',
          height: '1px',
          borderBottom: '1px solid rgb(242, 242, 242)'
        }}
      ></div>

      <TermsConditionsAndPolicy />
    </FooterSection>
  )
}

export default Footer
