import { createContext, useState } from 'react'
import { darkPalette, lightPalette } from '../data/ColorPalette'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const currentTheme = isDarkMode ? darkPalette : lightPalette

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
