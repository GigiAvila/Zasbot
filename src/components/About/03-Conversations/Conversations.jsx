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
        <img src={DesktopImage} alt='Desktop UX' />
      </ConversationImageWrapper>
      <ConversationsTitles theme={{ currentTheme }}>
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
