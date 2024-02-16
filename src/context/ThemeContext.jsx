import { createContext, useState } from 'react'
import { darkPalette, lightPalette } from '../data/ColorPalette'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [isLightMode, setisLightMode] = useState(false)

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
