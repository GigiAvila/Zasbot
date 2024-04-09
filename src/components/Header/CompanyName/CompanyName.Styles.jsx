import styled from 'styled-components'

export const CompanyLogoWrapper = styled.div`
  width: 10vw;
  height: auto;
  display: flex;
  margin-left: 2vw;

  > img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 30vw;
  }
`
