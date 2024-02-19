import { Outlet } from 'react-router-dom'
import { useTheme } from '../../hooks/UseTheme'
import { MainSection } from './Main.Styles'

const Main = () => {
  const { currentTheme } = useTheme()
  return (
    <MainSection theme={{ currentTheme }}>
      <Outlet />
    </MainSection>
  )
}

export default Main
