import CompanyName from './CompanyName/CompanyName'
import Navbar from './Navbar/Navbar'
import { Headers } from './Header.Styles'
import { useTheme } from '../../hooks/UseTheme'

const Header = () => {
  const { currentTheme } = useTheme()

  return (
    <Headers theme={{ currentTheme }}>
      <CompanyName />
      <Navbar />
    </Headers>
  )
}

export default Header
