import CompanyInfo from './CompanyInfo/CompanyInfo'
import FooterContact from './Contact/FooterContact'
import SiteMap from './SiteMap/SiteMap'
import { UpperFooterContainer } from './UpperFooter.Styles'

const UpperFooter = () => {
  return (
    <UpperFooterContainer>
      <CompanyInfo />
      <SiteMap />
      <FooterContact />
    </UpperFooterContainer>
  )
}

export default UpperFooter
