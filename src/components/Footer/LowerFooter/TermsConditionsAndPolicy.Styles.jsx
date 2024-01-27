import styled from 'styled-components'

export const ConditionsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 100%;
  padding: 1vw 0.5vw;
`

export const TermsConditionsAndPolicyContainer = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1vw;
`

export const TermsConditionsAndPolicyText = styled.p`
  font-weight: bold;
  font-size: 0.8vw;

  @media (max-width: 768px) {
    font-size: 1.8vw;
  }
`

export const CopyrightText = styled.p`
  font-weight: 400;
  font-size: 0.8vw;

  @media (max-width: 768px) {
    font-size: 1.8vw;
  }
`
