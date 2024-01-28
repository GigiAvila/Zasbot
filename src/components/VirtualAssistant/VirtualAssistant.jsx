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
import AssistantImg from './Assests/Assistant.png'
import { useTheme } from '../../hooks/UseTheme'

const VirtualAssistant = ({ toggleAssistant }) => {
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
    >
      <AssistantTitleArticle theme={{ currentTheme }}>
        <AssistantImageContainer>
          <img src={AssistantImg} alt='AsistantAvatar' />
        </AssistantImageContainer>
        <h5>Virtual Assistant</h5>
      </AssistantTitleArticle>
      <VirtualAssistantContent>
        <VirtualAssistantText
          rows='6'
          cols='40'
          placeholder='Write whatever you need'
          value={message}
          onChange={handleInputChange}
          theme={{ currentTheme }}
        ></VirtualAssistantText>
        <VirtualAssistantButton
          onClick={handleSendClick}
          theme={{ currentTheme }}
        >
          Send
        </VirtualAssistantButton>
      </VirtualAssistantContent>
    </AssistantContainer>
  )
}

export default VirtualAssistant
