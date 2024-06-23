import { useTheme } from '../../../hooks/UseTheme'
import { VideoSection, VideoTitles, VideoWrapper } from './Video.Styles'

const Video = () => {
  const { currentTheme } = useTheme()
  return (
    <VideoSection id='video'>
      <VideoTitles theme={{ currentTheme }}>
        <h3>¿Quieres saber más?</h3>
        <h4>Conoce nuestro canal de Youtube</h4>
      </VideoTitles>
      <VideoWrapper>
        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/pKVettDXmsE?si=VGWBJTiC_4Civ5UD'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
        ></iframe>
      </VideoWrapper>
    </VideoSection>
  )
}

export default Video
