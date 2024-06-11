import { useState } from 'react'
import { WS_PHONE_NUMBER } from '../../data/WhatsappPhoneNumer'
import {
  AssistantContainer,
  AssistantTitleArticle,
  AssistantImageContainer,
  VirtualAssistantText,
  VirtualAssistantButton,
  VirtualAssistantContent
} from './VirtualAssistant.Styles'
import AssistantImg from './Assests/Assistant1.png'
import { useTheme } from '../../hooks/UseTheme'
import {
  WHATSAPP_BUTTON_TEXT,
  WHATSAPP_TEXT,
  WHATSAPP_TITLE
} from '../../data/SpanishText'

const VirtualAssistant = (toggleAssistant) => {
  const { currentTheme } = useTheme()
  const [message, setMessage] = useState('')

  const handleInputChange = (event) => {
    setMessage(event.target.value)
  }

  const handleSendClick = () => {
    const myMessage = encodeURIComponent(message)
    const whatsappLink = `https://wa.me/${WS_PHONE_NUMBER}?text=${myMessage}`
    window.location.href = whatsappLink
  }

  return (
    <AssistantContainer
      toggleAssistant={toggleAssistant}
      theme={{ currentTheme }}
      id='virtualAssistant'
    >
      <AssistantTitleArticle theme={{ currentTheme }}>
        <AssistantImageContainer>
          <img src={AssistantImg} alt='AsistantAvatar' />
        </AssistantImageContainer>
        <h5>{WHATSAPP_TITLE}</h5>
      </AssistantTitleArticle>
      <VirtualAssistantContent>
        <VirtualAssistantText
          rows='6'
          cols='40'
          placeholder={WHATSAPP_TEXT}
          value={message}
          onChange={handleInputChange}
          theme={{ currentTheme }}
        ></VirtualAssistantText>
        <VirtualAssistantButton
          onClick={handleSendClick}
          theme={{ currentTheme }}
        >
          {WHATSAPP_BUTTON_TEXT}
        </VirtualAssistantButton>
      </VirtualAssistantContent>
    </AssistantContainer>
  )
}

export default VirtualAssistant
