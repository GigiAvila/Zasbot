import Resume from './01-Resume/Resume'
import Cases from './02-Cases/Cases'
import Integrations from './03-Integrations/Integrations'
import Testimonies from './04-Testimonies/Testimonies'
import { useTheme } from '../../hooks/UseTheme'
import { AboutSection } from './About.Styles'

const About = () => {
  const { currentTheme } = useTheme()

  return (
    <AboutSection id='about' theme={{ currentTheme }}>
      <Resume />
      <Cases />
      <Integrations />
      <Testimonies />
    </AboutSection>
  )
}

export default About
