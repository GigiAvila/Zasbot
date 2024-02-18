import styled from 'styled-components'

export const PriceSection = styled.section`
  background-color: ${({ theme }) => theme.currentTheme['--bg-100']};
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10vh;
`
export const PricingCardSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    gap: 10vw;
  }
`
