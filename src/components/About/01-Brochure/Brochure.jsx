import { useTheme } from '../../../hooks/UseTheme'
import {
  BrochureSection,
  DownloadWrapper,
  DownloadClipPath,
  BrochureButton
} from './Brochure.Styles'

const Brochure = () => {
  const { currentTheme } = useTheme()

  return (
    <BrochureSection theme={{ currentTheme }}>
      <DownloadClipPath theme={{ currentTheme }}> </DownloadClipPath>
      <DownloadWrapper theme={{ currentTheme }}>
        <p>Conoce más sobre nuestros servicios</p>
        <BrochureButton theme={{ currentTheme }}>
          <a
            href='https://zasbot-back-alpha.vercel.app/api/brochure/view-brochure'
            target='_blank'
            rel='noreferrer'
          >
            DESCARGAR BROCHURE
          </a>
        </BrochureButton>
      </DownloadWrapper>
    </BrochureSection>
  )
}

export default Brochure
