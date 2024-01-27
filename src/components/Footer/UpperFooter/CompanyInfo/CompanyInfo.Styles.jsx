import styled from 'styled-components'

export const CompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;

  width: 25vw;
  padding-left: 2vw @media (max-width: 768px) {
    width: 30%;
  }
`
export const CompanyDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.6vw;
  width: 25vw;
`

export const CompanyTextFooter = styled.h5`
  font-weight: 300;
  font-size: 1vw;

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

  > h3 {
    font-weight: 700;
    font-size: 1vw;
  }
`
