import { useState } from 'react'
import {
  ContactArticle,
  TopPart,
  ContactPersonInfo,
  ImgWrapper,
  CallToAction,
  CopyIconWrapper
} from './ContactBg.Styles'
import JoaquinImg from '../Assets/joacoFoto.png'
import { useTheme } from '../../../hooks/UseTheme'

const ConctactBg = () => {
  const { currentTheme } = useTheme()
  const [isCopied, setIsCopied] = useState(false)

  const handleCopyEmail = () => {
    const emailText = 'joaquin@zasbot.com'
    const tempInput = document.createElement('input')
    tempInput.value = emailText
    document.body.appendChild(tempInput)

    tempInput.select()
    document.execCommand('copy')
    document.body.removeChild(tempInput)

    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false)
    }, 1500)
  }

  return (
    <ContactArticle theme={{ currentTheme }}>
      <TopPart>
        <ContactPersonInfo theme={{ currentTheme }}>
          <ImgWrapper>
            <img src={JoaquinImg} alt='Contact Person Image' />
          </ImgWrapper>
          <h4>Joaquin Castro Madero</h4>
          <h5>Project Coordinator</h5>
        </ContactPersonInfo>
        <CallToAction theme={{ currentTheme }}>
          <button type='button' onClick={handleCopyEmail}>
            joaquin@zasbot.com
          </button>
          {isCopied && (
            <CopyIconWrapper theme={{ currentTheme }}>
              <p>Copied</p>
            </CopyIconWrapper>
          )}

          <button>Send Message</button>
        </CallToAction>
      </TopPart>
      <h2>Every project starts with a plan.</h2>
    </ContactArticle>
  )
}

export default ConctactBg
