import styled from 'styled-components'

export const UpperFooterContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 30vh;
  padding: 0.5vw;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 5vw;
    padding-left: 5vw;
  }
`
