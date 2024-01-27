import { useState } from 'react'
import { WS_PHONE_NUMBER } from '../../data/WhatsappPhoneNumer'
import {
  AssistantContainer,
  AssistantTitleArticle,
  AssistantImageContainer,
  VirtualAssistantText,
  VirtualAssistantButton
} from './VirtualAssistant.Styles'
import AssistantImg from './Assests/Assistant.png'

const VirtualAssistant = ({ toggleAssistant }) => {
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
    <AssistantContainer toggleAssistant={toggleAssistant}>
      <AssistantTitleArticle>
        <AssistantImageContainer>
          <img src={AssistantImg} alt='AsistantAvatar' />
        </AssistantImageContainer>
        <h5>Virtual Assistant</h5>
      </AssistantTitleArticle>
      <VirtualAssistantText
        rows='6'
        cols='40'
        placeholder='Write whatever you need'
        value={message}
        onChange={handleInputChange}
      ></VirtualAssistantText>
      <VirtualAssistantButton onClick={handleSendClick}>
        Send
      </VirtualAssistantButton>
    </AssistantContainer>
  )
}

export default VirtualAssistant
