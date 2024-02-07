import { useState } from 'react'
import { CustomSelect, SelectTitle } from './Language.Styles'
import { useTheme } from '../../../../hooks/UseTheme'
import ArrowImg from './Assets/Arrow.png'
import { LANGUAGE_TEXT, LANGUAGE_OPTIONS } from '../../../../data/SpanishText'

const Language = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const { currentTheme } = useTheme()

  const options = LANGUAGE_OPTIONS

  const handleOptionClick = (option) => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  const titleText = selectedOption || LANGUAGE_TEXT

  return (
    <CustomSelect isOpen={isOpen} theme={{ currentTheme }}>
      <SelectTitle onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        {titleText}
        <div>
          <img src={ArrowImg} alt='Arrow icon selecting language' />
        </div>
      </SelectTitle>
      {isOpen && (
        <div className='options-container'>
          {options.map((option, index) => (
            <div
              className='option'
              key={index}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </CustomSelect>
  )
}

export default Language
