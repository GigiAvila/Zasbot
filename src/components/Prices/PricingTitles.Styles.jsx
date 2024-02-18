import styled, { keyframes } from 'styled-components'

const appearFromTop = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const PricingTitleContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1vw;

  @media (max-width: 768px) {
    width: 90vw;
    gap: 5vw;
  }
`
export const PricingTitle = styled.h1`
  font-size: 4vw;
  color: ${({ theme }) => theme.currentTheme['--primary-100']};
  animation: ${appearFromTop} 1s ease-in-out;

  @media (max-width: 768px) {
    font-size: 7vw;
    text-align: center;
  }
`

export const PricingSubtitle = styled.h2`
  font-size: 2vw;
  width: 100%;
  height: 4vh;
  color: ${({ theme }) => theme.currentTheme['--text-100']};
  text-align: center;
  text-transform: uppercase;
  animation: ${fadeIn} 1s ease-in-out;

  @media (max-width: 768px) {
    font-size: 4vw;
    text-align: center;
  }
`
