import * as React from 'react'
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
  Tag,
  InfoIconWrapper
} from './PricingCards.Styles'
import { useTheme } from '../../hooks/UseTheme'
import { styled } from '@mui/material/styles'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import InfoIcon from './Assets/InfoIcon.png'

export const PricingCards = () => {
  const { currentTheme } = useTheme()

  const renderFeatures = (plan) => {
    return FEATURES[plan].map((feature, index) => {
      let tooltipTitle = ''
      let tooltipText = ''

      if (feature.toLowerCase().includes('bot users')) {
        tooltipTitle = 'Bot User'
        tooltipText =
          'Usuarios que interactúan con tus bots. Cantidad de conversaciones ilimitadas por Bot User.'
      } else if (feature.toLowerCase().includes('omnicanal')) {
        tooltipTitle = 'Omnicanal'
        tooltipText =
          'Con esta función podrás centralizar todos los canales en un único bot.'
      } else if (feature.toLowerCase().includes('bot')) {
        tooltipTitle = 'Bot'
        tooltipText =
          'Es un robot que automatiza flujos de conversaciones con capacidad de integrarse a diversas aplicaciones. Posibilita el hand-off a un humano.'
      } else if (feature.toLowerCase().includes('incluye todos los canales')) {
        tooltipTitle = 'Canales'
        tooltipText = 'Incluye Whatsapp.'
      } else if (
        feature.toLowerCase().includes('incluye todas las integraciones')
      ) {
        tooltipTitle = 'Integraciones'
        tooltipText = (
          <>
            Para más información, haz click{' '}
            <a
              href='https://www.zasbot.com/home#integrations'
              target='_blank'
              rel='noopener noreferrer'
              style={{ color: 'white' }}
            >
              aquí
            </a>
            .
          </>
        )
      }

      return (
        <Feature theme={{ currentTheme }} key={index}>
          {tooltipTitle ? <span>{feature}</span> : <span>{feature}</span>}
          {tooltipTitle && (
            <CustomTooltip
              title={
                <React.Fragment>
                  <Typography color='inherit'>{tooltipTitle}</Typography>
                  {tooltipText && <em>{tooltipText}</em>}
                </React.Fragment>
              }
            >
              <InfoIconWrapper>
                <img
                  src={InfoIcon}
                  alt='Pasa el cursor por arriba del elemento para más información'
                />
              </InfoIconWrapper>
            </CustomTooltip>
          )}
        </Feature>
      )
    })
  }

  const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#2d2d2d',
      color: '#f2f2f2',
      maxWidth: 300,
      fontSize: theme.typography.pxToRem(15),
      border: '1px solid #ddb900'
    }
  }))

  return (
    <>
      <PaymentOptionsWrapper>
        <PaymentOption theme={{ currentTheme }}>
          <PaymentOptionTitle>
            <PlanTitle theme={{ currentTheme }}>Básico</PlanTitle>
            <PlanPriceContainer>
              <PlanPrice theme={{ currentTheme }}>19 USD</PlanPrice>
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
              <PlanPrice theme={{ currentTheme }}>49 USD</PlanPrice>
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
              <PlanPrice theme={{ currentTheme }}>149 USD</PlanPrice>
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
