import { useTheme } from '../../../hooks/UseTheme'
import {
  SocialMediaSection,
  SocialMediaWrapper,
  ConversationImageWrapper,
  SocialMediaTitles,
  SpanText,
  PromoImages,
  TopImages,
  List,
  TopPart,
  BottomPart,
  BottomImages
} from './SocialMedia.Styles'

const SocialMedia = () => {
  const { currentTheme } = useTheme()

  return (
    <SocialMediaSection id='socialMedia' theme={{ currentTheme }}>
      <SocialMediaTitles theme={{ currentTheme }}>
        <h3>Escala tu negocio</h3>
        <h4>
          automatizando todas las{' '}
          <SpanText theme={{ currentTheme }}> acciones digitales</SpanText>
        </h4>
      </SocialMediaTitles>
      <SocialMediaWrapper>
        <TopPart>
          <List theme={{ currentTheme }}>
            <li>
              Responde automáticamente en las{' '}
              <SpanText theme={{ currentTheme }}> redes sociales</SpanText>
            </li>
            <li>INTERACCIONES</li>
            <li>MENCIONES</li>
            <li>
              <SpanText theme={{ currentTheme }}>@</SpanText>ETIQUETAS
            </li>
          </List>
          <ConversationImageWrapper>
            <div>
              <img
                src='https://res.cloudinary.com/dqdyvyknw/image/upload/v1719513100/MARKETING2_a9qdlt.png'
                alt='Social Media Mock up '
                loading='lazy'
              />
            </div>
          </ConversationImageWrapper>
        </TopPart>
        <BottomPart>
          <List theme={{ currentTheme }}>
            <li>
              y<SpanText theme={{ currentTheme }}> enviales</SpanText>
            </li>
            <li>DESCUENTOS ✔️</li>
            <li>PROMOCIONES ✔️</li>
            <li>PRODUCTOS ✔️</li>
          </List>
          <PromoImages>
            <TopImages>
              <div>
                <img
                  src='https://res.cloudinary.com/dqdyvyknw/image/upload/v1719516636/descuentos-removebg-preview_wgqvqr.png'
                  alt=''
                />
              </div>
              <div>
                <img
                  src='https://res.cloudinary.com/dqdyvyknw/image/upload/v1719516645/desceunto-removebg-preview_yervdy.png'
                  alt=''
                />
              </div>
            </TopImages>
            <BottomImages>
              <div>
                <img
                  src='https://res.cloudinary.com/dqdyvyknw/image/upload/v1719594578/info-removebg-preview_lnned1.png'
                  alt=''
                />
              </div>
              <div>
                <img
                  src='https://res.cloudinary.com/dqdyvyknw/image/upload/v1719578334/ZASBOT_13_y2op6w.png'
                  alt=''
                />
              </div>
            </BottomImages>
          </PromoImages>
        </BottomPart>
      </SocialMediaWrapper>
    </SocialMediaSection>
  )
}

export default SocialMedia
