import { useTheme } from '../../../hooks/UseTheme'
import {
  ConversationsSection,
  ConversationImageWrapper,
  ConversationsTitles,
  SpanText
} from './Conversations.Styles'
// import DesktopImage from './Assets/chat1.png'

const Conversations = () => {
  const { currentTheme } = useTheme()

  return (
    <ConversationsSection id='conversations' theme={{ currentTheme }}>
      <ConversationImageWrapper>
        <img
          src='https://res.cloudinary.com/dqdyvyknw/image/upload/v1719414767/ZASBOT_12_nxa9hj.png'
          alt='Desktop UX'
          loading='lazy'
        />
      </ConversationImageWrapper>
      <ConversationsTitles theme={{ currentTheme }}>
        <h3
        
        >
          Gestiona la comunicación
        </h3>
        <h4
          
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
