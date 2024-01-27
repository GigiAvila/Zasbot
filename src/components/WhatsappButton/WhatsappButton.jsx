import { useState } from 'react'
import WhatsappLogo from './Assets/WhatsappLogo.png'
import { WhatsappLogoWrapper } from './WhatsappButton.Styles'
import VirtualAssistant from '../VirtualAssistant/VirtualAssistant'
const WhatsappButton = () => {
  const [toggleAssistant, setToggleAssistant] = useState(false)

  const handleWhatsAppClick = () => {
    setToggleAssistant(!toggleAssistant)
  }
  return (
    <>
      <WhatsappLogoWrapper onClick={handleWhatsAppClick}>
        <img
          src={WhatsappLogo}
          alt='Whatsapp logo for virtual assitant or contact'
        />
      </WhatsappLogoWrapper>
      <VirtualAssistant toggleAssistant={toggleAssistant} />
    </>
  )
}

export default WhatsappButton
