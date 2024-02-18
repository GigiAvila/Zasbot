import { FEATURES } from '../../data/PricingFeatures'
import {
  PaymentOptionsWrapper,
  PaymentOption,
  PlanTitle,
  PlanPriceContainer,
  PlanPrice,
  PriceFrequency,
  PaymentOptionTitle,
  CustomBorder,
  PlanSubtitle,
  FeaturesList,
  Feature,
  BuyButton,
  PriceAnchor,
  StyledLink,
  Tag
} from './PricingCards.Styles'
import { useTheme } from '../../hooks/UseTheme'

export const PricingCards = () => {
  const { currentTheme } = useTheme()

  const renderFeatures = (plan) => {
    return FEATURES[plan].map((feature, index) => (
      <Feature theme={{ currentTheme }} key={index}>
        {feature}
      </Feature>
    ))
  }

  return (
    <>
      <PaymentOptionsWrapper>
        <PaymentOption theme={{ currentTheme }}>
          <PaymentOptionTitle>
            <PlanTitle theme={{ currentTheme }}>Básico</PlanTitle>
            <PlanPriceContainer>
              <PlanPrice theme={{ currentTheme }}>19 UDS</PlanPrice>
              <PriceFrequency theme={{ currentTheme }}>
                / por mes
              </PriceFrequency>
            </PlanPriceContainer>
          </PaymentOptionTitle>
          <CustomBorder />
          <PlanSubtitle theme={{ currentTheme }}>
            Ideal para nuevos negocios
          </PlanSubtitle>
          <FeaturesList theme={{ currentTheme }}>
            {renderFeatures('basic')}
          </FeaturesList>
          <BuyButton theme={{ currentTheme }}>
            <PriceAnchor
              href='https://app.zasbot.com/register'
              target='_blank'
              rel='noopener noreferrer'
              theme={{ currentTheme }}
            >
              {' '}
              Inicia tu prueba gratuita ahora
            </PriceAnchor>
          </BuyButton>
        </PaymentOption>

        <PaymentOption theme={{ currentTheme }}>
          <Tag theme={{ currentTheme }}>Popular</Tag>
          <PaymentOptionTitle>
            <PlanTitle theme={{ currentTheme }}>Business</PlanTitle>
            <PlanPriceContainer>
              <PlanPrice theme={{ currentTheme }}>49 UDS</PlanPrice>
              <PriceFrequency theme={{ currentTheme }}>
                / por mes
              </PriceFrequency>
            </PlanPriceContainer>
          </PaymentOptionTitle>
          <CustomBorder />
          <PlanSubtitle theme={{ currentTheme }}>
            Perfecto para empresas en crecimiento
          </PlanSubtitle>
          <FeaturesList theme={{ currentTheme }}>
            {renderFeatures('business')}
          </FeaturesList>
          <BuyButton theme={{ currentTheme }}>
            <PriceAnchor
              href='https://app.zasbot.com/register'
              target='_blank'
              rel='noopener noreferrer'
              theme={{ currentTheme }}
            >
              {' '}
              Inicia tu prueba gratuita ahora
            </PriceAnchor>
          </BuyButton>
        </PaymentOption>

        <PaymentOption theme={{ currentTheme }}>
          <PaymentOptionTitle>
            <PlanTitle theme={{ currentTheme }}>Business Plus</PlanTitle>
            <PlanPriceContainer>
              <PlanPrice theme={{ currentTheme }}>149 UDS</PlanPrice>
              <PriceFrequency theme={{ currentTheme }}>
                / por mes
              </PriceFrequency>
            </PlanPriceContainer>
          </PaymentOptionTitle>
          <CustomBorder />
          <PlanSubtitle theme={{ currentTheme }}>
            Avanzado para empresas que quieren más
          </PlanSubtitle>
          <FeaturesList theme={{ currentTheme }}>
            {renderFeatures('businessPlus')}
          </FeaturesList>
          <BuyButton theme={{ currentTheme }}>
            <PriceAnchor
              href='https://app.zasbot.com/register'
              target='_blank'
              rel='noopener noreferrer'
              theme={{ currentTheme }}
            >
              {' '}
              Inicia tu prueba gratuita ahora
            </PriceAnchor>
          </BuyButton>
        </PaymentOption>

        <PaymentOption theme={{ currentTheme }}>
          <PaymentOptionTitle>
            <PlanTitle theme={{ currentTheme }}>Enterprise</PlanTitle>
            <PlanPriceContainer>
              <PlanPrice theme={{ currentTheme }}>Consultanos</PlanPrice>
            </PlanPriceContainer>
          </PaymentOptionTitle>
          <CustomBorder />
          <PlanSubtitle theme={{ currentTheme }}>
            El plan a tu medida
          </PlanSubtitle>
          <FeaturesList theme={{ currentTheme }}>
            {renderFeatures('enterprise')}
          </FeaturesList>
          <BuyButton theme={{ currentTheme }}>
            <StyledLink to='/contact' theme={{ currentTheme }}>
              Hablar con un asesor
            </StyledLink>
          </BuyButton>
        </PaymentOption>
      </PaymentOptionsWrapper>
    </>
  )
}

export default PricingCards
