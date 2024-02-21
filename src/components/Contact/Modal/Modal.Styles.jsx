import styled from 'styled-components'

export const ModalPopover = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(30, 30, 30, 0.7);
`

export const ModalContainer = styled.div`
  width: 50vw;
  height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 15px;
  background-color: #2d2d2d;
  position: relative;

  @media (max-width: 768px) {
    width: 90vw;
    height: 75vh;
  }
`

export const ModalTitle = styled.h1`
  padding: 1vw;
  color: #ffd700;
  font-size: 2.5vw;

  @media (max-width: 768px) {
    font-size: 10vw;
    text-align: center;
    padding: 4vw 2vw;
  }
`

export const ModalSubtitle = styled.div`
  padding: 1vw;
  color: white;
  font-size: 1.5vw;

  @media (max-width: 768px) {
    font-size: 6vw;
    text-align: center;
    padding: 4vw 2vw;
  }
`

export const CloseButtonContainer = styled.div`
  align-self: flex-end;
  height: auto;
  width: 2vw;
  height: auto;
  margin: 1vw;
  cursor: pointer;
  display: flex;

  @media (max-width: 768px) {
    width: 8vw;
  }

  > img {
    width: 100%;
    height: auto;
    filter: invert(100%);
  }
`

export const ModalContactFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2vw;
  gap: 1vw;
  position: absolute;
  bottom: 0;
  left: 0;

  @media (max-width: 768px) {
    padding: 2vw;
  }
`

export const CompanyInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }

  > h3 {
    font-weight: 300;
    font-size: 1vw;
    color: white;
    text-align: start;

    @media (max-width: 768px) {
      font-size: 4vw;
      padding: 1vw;
    }
  }
`
export const CompanyLogoWrapper = styled.div`
  width: 10vw;
  height: auto;
  display: flex;

  @media (max-width: 768px) {
    width: 30vw;
  }

  img {
    width: 100%;
    height: auto;
  }
`
export const InfotextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5vw;

  @media (max-width: 768px) {
    gap: 2vw;
  }

  > h4 {
    font-weight: 700;
    font-size: 1vw;
    letter-spacing: 0.07rem;
    color: #ffd700;

    @media (max-width: 768px) {
      font-size: 3.5vw;
      font-weight: 400;
    }
  }

  @media (max-width: 768px) {
    padding: 2vw;
  }
`
