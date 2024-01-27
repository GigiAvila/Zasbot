import {
  HOME_SLOGAN,
  FOOTER_COMPANY_EMAIL,
  FOOTER_COMPANY_PHONE
} from '../../../../data/SpanishText'
import CompanyName from '../../../Header/CompanyName/CompanyName'
import {
  CompanyContainer,
  CompanyDataContainer,
  CompanyTextFooter,
  CompanyContactInformationContainer
} from './CompanyInfo.Styles'

const CompanyInfo = () => {
  return (
    <CompanyContainer>
      <CompanyDataContainer>
        <CompanyName />
        <CompanyTextFooter>{HOME_SLOGAN}</CompanyTextFooter>
        <CompanyContactInformationContainer>
          <h3>{FOOTER_COMPANY_EMAIL}</h3>
          <h3>{FOOTER_COMPANY_PHONE}</h3>
        </CompanyContactInformationContainer>
      </CompanyDataContainer>
    </CompanyContainer>
  )
}

export default CompanyInfo
