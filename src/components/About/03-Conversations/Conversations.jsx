import { useState, useEffect } from 'react'
import { useTheme } from '../../../hooks/UseTheme'
import {
  ConversationsSection,
  ConversationImageWrapper,
  ConversationsTitles,
  SpanText
} from './Conversations.Styles'
import DesktopImage from './Assets/chat1.png'
import BGVector from './Assets/Vector.png'

const Conversations = () => {
  const [scrollY, setScrollY] = useState(0)
  const [animate, setAnimate] = useState(false)
  const isDesktop = window.innerWidth > 768
  const { currentTheme } = useTheme()

  const handleScroll = () => {
    const newScrollY = window.scrollY
    setScrollY(newScrollY)
    console.log(newScrollY)
    const startScrollY = isDesktop ? 1600 : 10000

    if (newScrollY > startScrollY) {
      setAnimate(true)
    } else {
      setAnimate(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <ConversationsSection
      id='conversations'
      theme={{ currentTheme }}
      BGVector={BGVector}
    >
      <ConversationImageWrapper scrollY={scrollY} animate={animate}>
        <img src={DesktopImage} alt='Desktop UX' />
      </ConversationImageWrapper>
      <ConversationsTitles
        theme={{ currentTheme }}
        scrollY={scrollY}
        animate={animate}
      >
        <h1>Gestiona la comunicación</h1>
        <h2>
          Zasbot ofrece su herramienta{' '}
          <SpanText theme={{ currentTheme }}>Live-Chat</SpanText> para que tu
          equipo pueda interactuar con tus clientes, centralizando todos los
          canales de comunicación, con proceso{' '}
          <SpanText theme={{ currentTheme }}>Hand-Off</SpanText>
        </h2>
      </ConversationsTitles>
    </ConversationsSection>
  )
}

export default Conversations
