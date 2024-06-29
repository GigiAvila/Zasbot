import styled from 'styled-components'

export const UpperFooterContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 1vw;
`

export const UpperFooterWrapper = styled.article`
  width: 90vw;
  display: flex;
  gap: 4vw;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 5vw;
  }
`
