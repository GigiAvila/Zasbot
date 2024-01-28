import styled from 'styled-components'

export const ConditionsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 100%;
  padding: 1vw 0.5vw;
`

export const TermsConditionsAndPolicyText = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1vw;
  font-weight: bold;
  font-size: 0.8vw;
  letter-spacing: 0.07rem;

  > p {
    color: ${({ theme }) => theme.currentTheme['--text-200']};
  }

  @media (max-width: 768px) {
    font-size: 1.8vw;
  }
`

export const CopyrightText = styled.p`
  font-weight: 400;
  font-size: 0.8vw;
  letter-spacing: 0.07rem;
  color: ${({ theme }) => theme.currentTheme['--text-100']};

  @media (max-width: 768px) {
    font-size: 1.8vw;
  }
`
