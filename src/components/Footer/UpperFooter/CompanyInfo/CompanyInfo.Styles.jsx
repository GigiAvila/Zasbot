import styled from 'styled-components'

export const CompanyContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  width: auto;

  @media (max-width: 768px) {
    width: 50vw;
    padding: 1vw 0;
  }
`
export const CompanyDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.6vw;
  width: 25vw;

  > p {
    font-size: 0.8vw;
    color: white;

    @media (max-width: 768px) {
      font-size: 2.5vw;
      font-weight: 300;
    }
  }

  @media (max-width: 768px) {
    width: 50vw;
    padding: 1vw 0;
  }
`

export const CompanyTextFooter = styled.h2`
  font-weight: 300;
  font-size: 1vw;
  color: ${({ theme }) => theme.currentTheme['--text-100']};

  @media (max-width: 768px) {
    display: none;
  }
`
export const CompanyContactInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5vw;
  width: 100%;
  margin-top: 1vw;

  > h1 {
    font-weight: 700;
    font-size: 1vw;
    letter-spacing: 0.07rem;
    color: ${({ theme }) => theme.currentTheme['--primary-100']};

    @media (max-width: 768px) {
      font-size: 3.5vw;
      font-weight: 400;
    }
  }
`
