import styled from 'styled-components'

export const LowerFooterContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 1vw;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 5vw;
  }
`

export const LowerFooterWrapper = styled.article`
  width: 90vw;
  display: flex;
  justify-content: space-between;
  position: relative;
`

export const ActionsWrapper = styled.div`
  display: flex;
  gap: 1vw;

  @media (max-width: 768px) {
    display: none;
  }
`
