import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ColorModeToggle from './ColorMode/ColorModeToggle'
import Language from './Language/Language'
import { Nav, NavList, NavElement, MenuIconContainer } from './Navbar.Styles'
import MenuIcon from './Assets/menu.svg' // Importa directamente como cadena
import CloseMenuIcon from './Assets/close.svg' // Importa directamente como cadena

const Navbar = () => {
  const location = useLocation()
  const isHome = location.pathname === '/home'
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <Nav>
      {menuOpen ? (
        <MenuIconContainer>
          <img
            src={CloseMenuIcon}
            alt='Close Menu Icon'
            onClick={toggleMenu}
            style={{ cursor: 'pointer' }}
          />
        </MenuIconContainer>
      ) : (
        <MenuIconContainer>
          <img
            src={MenuIcon}
            alt='Open Menu Icon'
            onClick={toggleMenu}
            style={{ cursor: 'pointer' }}
          />
        </MenuIconContainer>
      )}
      <NavList menuOpen={menuOpen}>
        <NavElement onClick={toggleMenu}>
          {!isHome ? (
            <Link to='/home'>Nosotros</Link>
          ) : (
            <a href='#resume'>Nosotros</a>
          )}
        </NavElement>
        <NavElement onClick={toggleMenu}>
          {!isHome ? (
            <Link to='/home'>Clientes</Link>
          ) : (
            <a href='#testimonies'>Clientes</a>
          )}
        </NavElement>
        <NavElement onClick={toggleMenu}>
          <Link to='/contact'>Contacto</Link>
        </NavElement>
        <NavElement onClick={toggleMenu}>
          <Link to='/prices'>Precios</Link>
        </NavElement>
      </NavList>
      <Language />
      <ColorModeToggle />
    </Nav>
  )
}

export default Navbar
