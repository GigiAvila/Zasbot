import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const PaymentOptionsWrapper = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  padding: 4vw;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100vw;
    gap: 8vw;
    padding: 5vw 0;
  }
`

export const PlanTitle = styled.h4`
  font-size: 1.7vw;
  padding: 1vw 0;
  color: ${({ theme }) => theme.currentTheme['--text-100']};

  @media (max-width: 768px) {
    font-size: 5vw;
  }
`

export const Tag = styled.h6`
  width: 4vw;
  height: 3vh;
  background-color: ${({ theme }) => theme.currentTheme['--primary-100']};
  border-radius: 15px;
  font-size: 0.8vw;
  position: absolute;
  left: 1.8vw;
  text-align: center;
  margin: 1vw 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 20vw;
    height: 4vh;
    font-size: 3.5vw;
  }
`

export const PaymentOptionTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2vw;
  position: relative;

  @media (max-width: 768px) {
    &:nth-child(2) {
      padding: 7vw 2vw 2vw 3vw;
    }
  }
`

export const CustomBorder = styled.div`
  width: 80%;
  height: 1px;
  border-bottom: 1px solid grey;
`

export const PlanPriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5vw;
`

export const PlanPrice = styled.h2`
  font-size: 2vw;
  padding: 0.5vw 0;
  color: ${({ theme }) => theme.currentTheme['--primary-200']};

  @media (max-width: 768px) {
    font-size: 4vw;
  }
`

export const PriceFrequency = styled.h5`
  font-size: 0.7vw;
  color: ${({ theme }) => theme.currentTheme['--primary-200']};

  @media (max-width: 768px) {
    font-size: 4vw;
    padding-left: 1.5vw;
  }
`

export const PlanSubtitle = styled.h4`
  height: 8vh;
  font-size: 0.9vw;
  padding: 0.5vw 0;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.05vw;
  color: ${({ theme }) => theme.currentTheme['--text-100']};

  @media (max-width: 768px) {
    font-size: 4vw;
    padding: 4vw 2vw;
  }
`
export const Feature = styled.li`
  font-size: 1vw;
  padding: 0.1vw;
  display: flex;

  color: ${(props) =>
    props.textColor
      ? props.theme.currentTheme['--text-400']
      : props.theme.currentTheme['--text-100']};
  font-weight: ${(props) => (props.bold ? 'bold' : '300')};

  &::before {
    content: '✓';
    margin-right: 0.2vw;
  }

  @media (max-width: 768px) {
    font-size: 4vw;
    font-weight: 300;
  }
`

export const InfoIconWrapper = styled.div`
  width: 1vw;
  height: auto;
  filter: invert(50%);
  margin-left: 0.5vw;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  > img {
    width: 100%;
    height: auto;
  }
`

export const FeaturesList = styled.ul`
  width: 100%;
  list-style: none;
  line-height: 2;
  display: flex;
  flex-direction: column;
  padding: 1vw 2vw;
  @media (max-width: 768px) {
    margin-bottom: 10vw;
    text-align: start;
    padding-left: 2vw;
    gap: 1vw;
    padding: 4vw 2vw;
  }
`

export const BuyButton = styled.button`
  background-color: ${({ theme }) => theme.currentTheme['--primary-200']};
  color: ${({ theme }) => theme.currentTheme['--text-400']};
  border-radius: 4px;
  border-style: none;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  font-size: 0.8vw;
  font-weight: 700;
  margin: 0;
  outline: none;
  overflow: hidden;
  padding: 0.8vw;
  position: relative;
  text-align: center;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  z-index: 1;
  position: absolute;
  bottom: 2vw;
  height: auto;

  @media (max-width: 768px) {
    font-size: 4vw;
    width: 80vw;
    margin-bottom: 4vw;
    font-weight: 300;
    position: relative;
    padding: 4vw;
  }
`

export const PriceAnchor = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.currentTheme['--text-400']};
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.currentTheme['--text-400']};
`

export const PricingSale = styled(Link)`
  color: #FFD700;
  font-size: 0.8vw;
  position: absolute;
  left: 1.8vw;
  text-align: center;
  margin: 1vw 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor:pointer;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 3vw;
  
  }
}`

export const PaymentOption = styled.div`
  border-radius: 15px;
  border: 1px solid white;
  height: 80vh;
  width: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 1vw;
  align-items: center;
  position: relative;
  -webkit-animation: jello-vertical 0.9s both;
  animation: jello-vertical 0.9s both;

  @-webkit-keyframes jello-vertical {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    30% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
      transform: scale3d(0.75, 1.25, 1);
    }
    40% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
      transform: scale3d(1.25, 0.75, 1);
    }
    50% {
      -webkit-transform: scale3d(0.85, 1.15, 1);
      transform: scale3d(0.85, 1.15, 1);
    }
    65% {
      -webkit-transform: scale3d(1.05, 0.95, 1);
      transform: scale3d(1.05, 0.95, 1);
    }
    75% {
      -webkit-transform: scale3d(0.95, 1.05, 1);
      transform: scale3d(0.95, 1.05, 1);
    }
    100% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }
  @keyframes jello-vertical {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    30% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
      transform: scale3d(0.75, 1.25, 1);
    }
    40% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
      transform: scale3d(1.25, 0.75, 1);
    }
    50% {
      -webkit-transform: scale3d(0.85, 1.15, 1);
      transform: scale3d(0.85, 1.15, 1);
    }
    65% {
      -webkit-transform: scale3d(1.05, 0.95, 1);
      transform: scale3d(1.05, 0.95, 1);
    }
    75% {
      -webkit-transform: scale3d(0.95, 1.05, 1);
      transform: scale3d(0.95, 1.05, 1);
    }
    100% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }

  @media (max-width: 768px) {
    width: 90vw;
    height: auto;
  }

  &:hover {
    background: linear-gradient(
      ${({ theme }) => theme.currentTheme['--primary-100']},
      ${({ theme }) => theme.currentTheme['--primary-300']}
    );
  }

  &:hover ${Tag} {
    background-color: ${({ theme }) => theme.currentTheme['--text-400']};
    color: ${({ theme }) => theme.currentTheme['--text-100']};
  }

    &:hover ${PlanTitle} {
      color: ${({ theme }) => theme.currentTheme['--text-400']};
    }

    &:hover ${PlanSubtitle} {
      color: ${({ theme }) => theme.currentTheme['--text-400']};
    }

    &:hover ${PriceFrequency} {
      color: ${({ theme }) => theme.currentTheme['--text-400']};
    }

    &:hover ${PlanPrice} {
      color: ${({ theme }) => theme.currentTheme['--text-400']};
    }

    &:hover ${BuyButton} {
      background-color: ${({ theme }) => theme.currentTheme['--text-400']};
      color: ${({ theme }) => theme.currentTheme['--text-100']};
    }

    &:hover ${PriceAnchor} {
      color: ${({ theme }) => theme.currentTheme['--text-100']};
    }

    &:hover ${StyledLink} {
      color: ${({ theme }) => theme.currentTheme['--text-100']};
    }

    &:hover ${PricingSale} {
      color: ${({ theme }) => theme.currentTheme['--text-100']};
    }

    &:hover ${Feature} {
      color: ${(props) =>
        props.textColor
          ? props.theme.currentTheme['--text-100']
          : props.theme.currentTheme['--text-400']};
    }

    &::after {
      content: '';
      background-color: inherit;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: inherit;
      z-index: -1;
    }
  }


`

export const StyledText = styled.p`
  font-size: 0.7vw;
  position: absolute;
  bottom: 0;
  padding: 0.5vw;

  @media (max-width: 768px) {
    font-size: 3vw;
  }
`
