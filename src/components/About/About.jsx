import { useState } from 'react'
import FlowChart from './02-FlowChart/FlowChart'
import Conversations from './03-Conversations/Conversations'
import Integrations from './03-Integrations/Integrations'
import { useTheme } from '../../hooks/UseTheme'
import { AboutSection } from './About.Styles'
import Assessment from './04-Assessment/Assessment'

const About = () => {
  const { currentTheme } = useTheme()
  const [integrationsInView, setIntegrationsInView] = useState(false)
  const [flowChartInView, setFlowChartInView] = useState(false)
  const [conversationsInView, setConversationsInView] = useState(false)
  const [assessmentInView, setAssessmentInView] = useState(false)

  return (
    <AboutSection id='about' theme={{ currentTheme }}>
      <Integrations
        setInView={setIntegrationsInView}
        inView={integrationsInView}
      />
      <FlowChart setInView={setFlowChartInView} inView={flowChartInView} />
      <Conversations
        setInView={setConversationsInView}
        inView={conversationsInView}
      />
      <Assessment setInView={setAssessmentInView} inView={assessmentInView} />
    </AboutSection>
  )
}

export default About
