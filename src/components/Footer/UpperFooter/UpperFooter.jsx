import CompanyInfo from './CompanyInfo/CompanyInfo'
import FooterContact from './Contact/FooterContact'
import SiteMap from './SiteMap/SiteMap'
import { UpperFooterContainer, UpperFooterWrapper } from './UpperFooter.Styles'

const UpperFooter = () => {
  return (
    <UpperFooterContainer>
      <UpperFooterWrapper>
        <CompanyInfo />
        <SiteMap />
        <FooterContact />
      </UpperFooterWrapper>
    </UpperFooterContainer>
  )
}

export default UpperFooter
