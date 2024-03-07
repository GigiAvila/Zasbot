import { useState } from 'react'
import { FAQS } from '../../../data/Faqs'
import {
  FaqList,
  NavElement,
  NavElementTitle,
  Title,
  AccordionIcon,
  AccordionInformation,
  NavNumber,
  SpanWrapper,
  SpanWrapperInfoNumber
} from './FaqsList.Styles'
import PlusIcon from './Assets/plusIcon.png'
import { useTheme } from '../../../hooks/UseTheme'

const FaqsList = () => {
  const { currentTheme } = useTheme()
  const [isOpen, setIsOpen] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ])

  const handleOpenAccordion = (index) => {
    const newIsOpen = [...isOpen]
    newIsOpen[index] = !newIsOpen[index]
    setIsOpen(newIsOpen)
  }
  return (
    <>
      <FaqList>
        {FAQS.map((faq, index) => (
          <NavElement
            key={index}
            onClick={() => handleOpenAccordion(index)}
            theme={{ currentTheme }}
          >
            <NavElementTitle theme={{ currentTheme }}>
              <NavNumber>
                <SpanWrapper theme={{ currentTheme }}>
                  <span>{faq.number[0]}</span>
                  <span>{faq.number[0]}</span>
                </SpanWrapper>
                <SpanWrapperInfoNumber theme={{ currentTheme }}>
                  <span>{faq.number[1]}</span>
                  <span>{faq.number[1]}</span>
                </SpanWrapperInfoNumber>
              </NavNumber>
              <Title theme={{ currentTheme }}>{faq.question}</Title>
              <AccordionIcon theme={{ currentTheme }}>
                <img src={PlusIcon} alt='icon' />
              </AccordionIcon>
            </NavElementTitle>
            <AccordionInformation
              isOpen={{ isOpen }}
              style={{ display: isOpen[index] ? 'block' : 'none' }}
              theme={{ currentTheme }}
            >
              {faq.answer.map((answer, index) => (
                <p key={index}>{answer}</p>
              ))}
            </AccordionInformation>
          </NavElement>
        ))}
      </FaqList>
    </>
  )
}

export default FaqsList
