import styled from 'styled-components'

export const ToTopButton = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1000;

  @media (max-width: 768px) {
    width: 10vw;
    height: 10vw;
  }

  > div {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transition: transform 0.2s cubic-bezier(0.5, 0.7, 0.4, 1);
    background-color: white;
    box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.1);
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
