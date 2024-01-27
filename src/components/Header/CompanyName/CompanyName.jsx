import { Link } from 'react-router-dom'
import CompanyLogo from './Assets/CompanyLogo.png'
import { CompanyLogoWrapper } from './CompanyName.Styles'

const CompanyName = () => {
  return (
    <Link to='/home'>
      <CompanyLogoWrapper>
        <img src={CompanyLogo} alt='Zasbot company Logo' />
      </CompanyLogoWrapper>
    </Link>
  )
}

export default CompanyName
