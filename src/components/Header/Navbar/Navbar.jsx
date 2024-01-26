import { Link, useLocation } from 'react-router-dom'
import ColorModeToggle from './ColorMode/ColorModeToggle'
import Languaje from './Language/Languaje'
import { Nav, NavElement } from './Navbar.Styles'

const Navbar = () => {
  const location = useLocation()
  const isHome = location.pathname === '/home'

  return (
    <Nav>
      <ul>
        <NavElement>
          {!isHome ? (
            <Link to='/home'>Nosotros</Link>
          ) : (
            <a href='#resume'>Nosotros</a>
          )}
        </NavElement>
        <NavElement>
          {!isHome ? (
            <Link to='/home'>Clientes</Link>
          ) : (
            <a href='#testimonies'>Clientes</a>
          )}
        </NavElement>
        <NavElement>
          <Link to='/contact'>Contacto</Link>
        </NavElement>
        <NavElement>
          <Link to='/prices'>Precios</Link>
        </NavElement>
      </ul>
      <Languaje />
      <ColorModeToggle />
    </Nav>
  )
}

export default Navbar
