import styled from 'styled-components'

export const ContactFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 20vw;
  padding-right: 2vw;
  border-radius: 10px;
  background-color: #f2f2f2;
  border-top: 1vw;

  @media (max-width: 768px) {
    display: none;
  }
`

export const ContactFooterTextWrapper = styled.div`
  padding: 1vw;
`

export const ContactFooterTitle = styled.h3`
  line-height: 2.5;
  font-weight: bold;
  font-size: 1vw;
  color: black;

  @media (max-width: 768px) {
    font-size: 2vw;
  }
`
export const ContactFooterText = styled.h5`
  font-weight: 200;
  padding: 1vw 0;
  line-height: 2;
  font-size: 0.9vw;
  color: black;

  @media (max-width: 768px) {
    font-size: 2vw;
  }
`
export const ContactButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3vw;
  background-color: #ffd700;
  height: 5vh;

  > p {
    font-size: 0.8vw;
    height: 100%;
    display: flex;
    align-items: center;
  }
`
