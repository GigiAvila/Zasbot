import { useTheme } from '../../../hooks/UseTheme'
import {
  BrochureSection,
  DownloadWrapper,
  DownloadClipPath,
  BrochureButton
} from './Brochure.Styles'

const Brochure = () => {
  const { currentTheme } = useTheme()

  const viewBrochure = () => {
    window.open('https://www.zasbot.com/api/brochure/view-brochure', '_blank')
  }

  return (
    <BrochureSection theme={{ currentTheme }}>
      <DownloadClipPath theme={{ currentTheme }}> </DownloadClipPath>
      <DownloadWrapper theme={{ currentTheme }}>
        <p>Conoce más sobre nuestros servicios</p>
        <BrochureButton theme={{ currentTheme }}>
          <a onClick={viewBrochure}>DESCARGAR BROCHURE</a>
        </BrochureButton>
      </DownloadWrapper>
    </BrochureSection>
  )
}

export default Brochure
