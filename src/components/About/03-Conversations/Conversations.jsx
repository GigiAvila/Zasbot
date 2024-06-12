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
  const { currentTheme } = useTheme()

  return (
    <ConversationsSection
      id='conversations'
      theme={{ currentTheme }}
      BGVector={BGVector}
    >
      <ConversationImageWrapper>
        <img src={DesktopImage} alt='Desktop UX' loading='lazy' />
      </ConversationImageWrapper>
      <ConversationsTitles theme={{ currentTheme }}>
        <h3
          data-scroll
          data-scroll-direction='horizontal'
          data-scroll-speed='1'
          data-scroll-delay='1.5'
        >
          Gestiona la comunicación
        </h3>
        <h4
          data-scroll
          data-scroll-direction='horizontal'
          data-scroll-speed='1'
          data-scroll-delay='0.8'
        >
          Zasbot ofrece su herramienta{' '}
          <SpanText theme={{ currentTheme }}>Live-Chat</SpanText> para que tu
          equipo pueda interactuar con tus clientes, centralizando todos los
          canales de comunicación, con proceso{' '}
          <SpanText theme={{ currentTheme }}>Hand-Off</SpanText>
        </h4>
      </ConversationsTitles>
    </ConversationsSection>
  )
}

export default Conversations
