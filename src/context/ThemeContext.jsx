import { createContext, useState, useEffect } from 'react'
import { darkPalette, lightPalette } from '../data/ColorPalette'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const userPrefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches
  const [isLightMode, setisLightMode] = useState(!userPrefersDarkMode)

  useEffect(() => {
    const changeTheme = (e) => {
      setisLightMode(!e.matches)
    }

    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    darkModeMediaQuery.addEventListener('change', changeTheme)

    return () => darkModeMediaQuery.removeEventListener('change', changeTheme)
  }, [])

  const toggleTheme = () => {
    setisLightMode(!isLightMode)
  }

  const currentTheme = isLightMode ? lightPalette : darkPalette

  return (
    <ThemeContext.Provider value={{ isLightMode, toggleTheme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
