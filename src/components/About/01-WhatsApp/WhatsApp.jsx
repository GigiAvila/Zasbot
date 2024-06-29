import { useTheme } from '../../../hooks/UseTheme'
import {
  WhatsAppSection,
  WhatsAppWrapper,
  WhatsappTextArticle,
  WhatsappFeatures,
  WhatsappFeaturesWrapper,
  LocationText,
  CarouselText,
  VideoWrapper,
  PromoText,
  AgendaText,
  AgendaList,
  IaText,
  MoreText
} from './WhatsApp.Styles'
import { WHATSAPP_FEATURES } from '../../../data/WhatsappFeatures'

const WhatsApp = () => {
  const { currentTheme } = useTheme()

  const renderFeature = (feature, index) => {
    switch (feature.type) {
      case 'LocationText':
        return (
          <LocationText key={index} theme={{ currentTheme }}>
            <div>
              <img
                src={feature.imgSrc}
                alt={feature.imgAlt}
                style={{ height: '8vh' }}
              />
            </div>
            <div>
              <span>{feature.text1}</span>
              <span>{feature.text2}</span>
            </div>
          </LocationText>
        )
      case 'AgendaText':
        return (
          <AgendaText key={index} theme={{ currentTheme }}>
            <div>
              <img
                src={feature.imgSrc}
                alt={feature.imgAlt}
                style={{ height: '8vh' }}
              />
            </div>
            <AgendaList theme={{ currentTheme }}>
              {feature.text1}
              {feature.listItems.map((item, index) => (
                <li key={index}>
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </AgendaList>
          </AgendaText>
        )
      case 'CarouselText':
        return (
          <CarouselText key={index} theme={{ currentTheme }}>
            <VideoWrapper>
              <video src={feature.videoSrc} alt='' autoPlay loop muted />
            </VideoWrapper>
            <div>
              <span>{feature.text1}</span>
              <span>{feature.text2}</span>
            </div>
          </CarouselText>
        )
      case 'PromoText':
        return (
          <PromoText key={index} theme={{ currentTheme }}>
            <div>
              <img
                src={feature.imgSrc}
                alt={feature.imgAlt}
                style={{ height: '8vh' }}
              />
            </div>
            <div>
              <span>{feature.text1}</span>
              <span>{feature.text2}</span>
            </div>
          </PromoText>
        )
      default:
        return null
    }
  }

  return (
    <WhatsAppSection id='whatsapp' theme={{ currentTheme }}>
      <WhatsAppWrapper>
        <img
          src='https://res.cloudinary.com/dqdyvyknw/image/upload/v1719411420/WHATSAPP_2_qxhcip.png'
          alt='WhatsApp balloon image'
        />
      </WhatsAppWrapper>
      <WhatsappTextArticle theme={{ currentTheme }}>
        <h3>Optimiza WhatsApp al máximo</h3>
        <WhatsappFeatures theme={{ currentTheme }}>
          <WhatsappFeaturesWrapper>
            {WHATSAPP_FEATURES.map((feature, index) =>
              renderFeature(feature, index)
            )}
          </WhatsappFeaturesWrapper>
        </WhatsappFeatures>
        <IaText theme={{ currentTheme }}>
          ¡Integra inteligencia artificial con ChatGPT a tus conversaciones!
        </IaText>
        <MoreText theme={{ currentTheme }}>y mucho más ...</MoreText>
      </WhatsappTextArticle>
    </WhatsAppSection>
  )
}

export default WhatsApp
