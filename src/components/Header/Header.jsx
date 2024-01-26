import CompanyName from './CompanyName/CompanyName'
import Navbar from './Navbar/Navbar'
import { Headers } from './Header.Styles'

const Header = () => {
  return (
    <Headers>
      <CompanyName />
      <Navbar />
    </Headers>
  )
}

export default Header
