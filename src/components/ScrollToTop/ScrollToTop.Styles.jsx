import styled from 'styled-components'

export const ToTopButton = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.8vw;
  height: 2.8vw;
  border-radius: 50%;
  bottom: 1.5vw;
  right: 70px;
  cursor: pointer;
  z-index: 1000;

  @media (max-width: 768px) {
    width: 10vw;
    height: 10vw;
    bottom: 80px;
    right: 10px;
  }

  > div {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transition: transform 0.2s cubic-bezier(0.5, 0.7, 0.4, 1);
    background-color: rgba(255, 255, 255, 0.8);
  }

  > svg {
    opacity: 1;
    width: 1.5em;
    height: 1.5em;
    mix-blend-mode: normal;
    transform: rotate(-45deg);

    > path {
      fill: #000000;
    }
  }
`
