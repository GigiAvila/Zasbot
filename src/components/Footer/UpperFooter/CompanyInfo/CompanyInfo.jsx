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
import { useTheme } from '../../../../hooks/UseTheme'

const CompanyInfo = () => {
  const { currentTheme } = useTheme()
  return (
    <CompanyContainer>
      <CompanyDataContainer>
        <CompanyName />
        <CompanyTextFooter theme={{ currentTheme }}>
          {HOME_SLOGAN}
        </CompanyTextFooter>
        <CompanyContactInformationContainer theme={{ currentTheme }}>
          <h1>{FOOTER_COMPANY_EMAIL}</h1>
          <h1>{FOOTER_COMPANY_PHONE}</h1>
        </CompanyContactInformationContainer>
      </CompanyDataContainer>
    </CompanyContainer>
  )
}

export default CompanyInfo
