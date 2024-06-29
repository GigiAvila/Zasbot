import { Link } from 'react-router-dom'
import { CompanyLogoWrapper } from './CompanyName.Styles'
import { useTheme } from '../../../hooks/UseTheme'

const CompanyName = () => {
  const { currentTheme } = useTheme()

  return (
    <Link to='/home'>
      <CompanyLogoWrapper>
        <img
          src={currentTheme['--companyImage'].slice(4, -1)}
          alt='Zasbot company Logo'
        />
      </CompanyLogoWrapper>
    </Link>
  )
}

export default CompanyName
