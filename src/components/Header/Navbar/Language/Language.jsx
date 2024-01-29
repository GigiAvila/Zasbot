import { LanguageContainer } from './Language.Styles'
import { useTheme } from '../../../../hooks/UseTheme'

const Language = () => {
  const { currentTheme } = useTheme()

  return (
    <LanguageContainer theme={{ currentTheme }}>
      <option value='spanish'>Spanish</option>
      <option value='english'>English</option>
    </LanguageContainer>
  )
}

export default Language
