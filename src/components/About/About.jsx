import FlowChart from './02-FlowChart/FlowChart'
import Conversations from './03-Conversations/Conversations'
import Integrations from './03-Integrations/Integrations'
import { useTheme } from '../../hooks/UseTheme'
import { AboutSection } from './About.Styles'
import Assessment from './04-Assessment/Assessment'
import Video from './05-Video/Video'
import Brochure from './01-Brochure/Brochure'
import WhatsApp from './01-WhatsApp/WhatsApp'
import SocialMedia from './05-SocialMedia/SocialMedia'

const About = () => {
  const { currentTheme } = useTheme()

  return (
    <AboutSection id='about' theme={{ currentTheme }}>
      <Brochure />
      <WhatsApp />
      <Integrations />
      <FlowChart />
      <Conversations />
      <SocialMedia />
      <Assessment />
      <Video />
    </AboutSection>
  )
}

export default About
