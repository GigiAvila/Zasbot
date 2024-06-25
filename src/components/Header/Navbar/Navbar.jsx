import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
// import ColorModeToggle from './ColorMode/ColorModeToggle'
// import Language from './Language/Language'
import {
  NAVBAR_PRODUCT,
  NAVBAR_INTEGRATIONS,
  NAVBAR_CONTACT,
  NAVBAR_PRICES
} from '../../../data/SpanishText.js'
import {
  Nav,
  NavList,
  NavElement,
  MenuIconContainer,
  LoginButton,
  LoginAnchor
} from './Navbar.Styles.jsx'
import MenuIcon from './Assets/menu.svg'
import CloseMenuIcon from './Assets/close.svg'
import { useTheme } from '../../../hooks/UseTheme'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

const Navbar = () => {
  const { currentTheme } = useTheme()
  const { scroll } = useLocomotiveScroll()

  const location = useLocation()
  const isHome = location.pathname === '/home'
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleScrollToTop = () => {
    scroll.scrollTo(0, {
      duration: 500,
      disableLerp: true
    })
  }
  const handleScrollToIntegrations = () => {
    handleScrollToTop()
    scroll.scrollTo(1000, {
      duration: 500,
      disableLerp: true
    })
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
      <NavList menuOpen={menuOpen} theme={{ currentTheme }}>
        <NavElement onClick={toggleMenu} theme={{ currentTheme }}>
          {!isHome ? (
            <Link to='/home' onClick={handleScrollToTop}>
              {NAVBAR_PRODUCT}
            </Link>
          ) : (
            <a href='#flowChart'>{NAVBAR_PRODUCT}</a>
          )}
        </NavElement>
        <NavElement onClick={toggleMenu} theme={{ currentTheme }}>
          {!isHome ? (
            <Link to='/home' onClick={handleScrollToIntegrations}>
              {NAVBAR_INTEGRATIONS}
            </Link>
          ) : (
            <a href='#integrations'>{NAVBAR_INTEGRATIONS}</a>
          )}
        </NavElement>
        <NavElement onClick={toggleMenu} theme={{ currentTheme }}>
          <Link to='/contact' onClick={handleScrollToTop}>
            {NAVBAR_CONTACT}
          </Link>
        </NavElement>
        <NavElement onClick={toggleMenu} theme={{ currentTheme }}>
          <Link to='/prices' onClick={handleScrollToTop}>
            {NAVBAR_PRICES}
          </Link>
        </NavElement>
        <NavElement onClick={toggleMenu} theme={{ currentTheme }}>
          <Link to='/faqs' onClick={handleScrollToTop}>
            FAQs
          </Link>
        </NavElement>
        <NavElement onClick={toggleMenu} theme={{ currentTheme }}>
          <Link to='/blog' onClick={handleScrollToTop}>
            Blog
          </Link>
        </NavElement>
        <li>
          <LoginAnchor
            href='https://app.zasbot.com/login'
            target='_blank'
            rel='noopener noreferrer'
            theme={{ currentTheme }}
          >
            <LoginButton onClick={toggleMenu} theme={{ currentTheme }}>
              LOGIN
            </LoginButton>
          </LoginAnchor>
        </li>
      </NavList>
      {/* <Language /> */}
      {/* <ColorModeToggle /> */}
    </Nav>
  )
}

export default Navbar
