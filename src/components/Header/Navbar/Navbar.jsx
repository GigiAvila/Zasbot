import { Link, useLocation } from 'react-router-dom'
import {
  LoginAnchor,
  LoginButton,
  MenuIconContainer,
  Nav,
  NavElement,
  NavList
} from './Navbar.Styles.jsx'
import {
  NAVBAR_CONTACT,
  NAVBAR_INTEGRATIONS,
  NAVBAR_PRICES,
  NAVBAR_PRODUCT
} from '../../../data/SpanishText.js'

import CloseMenuIcon from './Assets/close.svg'
import MenuIcon from './Assets/menu.svg'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import { useState } from 'react'
import { useTheme } from '../../../hooks/UseTheme'

// import ColorModeToggle from './ColorMode/ColorModeToggle.jsx'
// import Language from './Language/Language'

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
        <MenuIconContainer theme={{ currentTheme }}>
          <img
            src={CloseMenuIcon}
            alt='Close Menu Icon'
            onClick={toggleMenu}
            style={{ cursor: 'pointer' }}
          />
        </MenuIconContainer>
      ) : (
        <MenuIconContainer theme={{ currentTheme }}>
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
        {/* <NavElement onClick={toggleMenu} theme={{ currentTheme }}>
          <Link to='/ia' onClick={handleScrollToTop}>
            IA
          </Link>
        </NavElement> */}
        `
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
