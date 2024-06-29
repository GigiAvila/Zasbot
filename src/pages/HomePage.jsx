import About from '../components/About/About'
import Home from '../components/Home/Home'
import { useTheme } from '../hooks/UseTheme'
import { HomePageSection } from './HomePage.Styles'

const HomePage = () => {
  const { currentTheme } = useTheme()
  return (
    <HomePageSection theme={{ currentTheme }}>
      <Home />
      <About />
    </HomePageSection>
  )
}

export default HomePage
