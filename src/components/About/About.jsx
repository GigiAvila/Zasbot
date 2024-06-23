import FlowChart from './02-FlowChart/FlowChart'
import Conversations from './03-Conversations/Conversations'
import Integrations from './03-Integrations/Integrations'
import { useTheme } from '../../hooks/UseTheme'
import { AboutSection } from './About.Styles'
import Assessment from './04-Assessment/Assessment'
import Video from './05-Video/Video'

const About = () => {
  const { currentTheme } = useTheme()

  return (
    <AboutSection id='about' theme={{ currentTheme }}>
      <Integrations />
      <FlowChart />
      <Conversations />
      <Assessment />
      <Video />
    </AboutSection>
  )
}

export default About
