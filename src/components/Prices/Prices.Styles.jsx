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

export const TaxText = styled.p`
  color: ${({ theme }) => theme.currentTheme['--text-100']};
  padding: 0vw 4vw 2vw 0vw;
  align-self: flex-end;
  font-size: 1vw;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 3vw;
  }
`
