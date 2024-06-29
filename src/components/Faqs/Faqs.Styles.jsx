import styled, { keyframes } from 'styled-components'

const appearFromTop = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

export const FaqsSection = styled.section`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1vw 0;
  background-image: url(https://res.cloudinary.com/dqdyvyknw/image/upload/v1719592958/Desktop_-_1_3_ke963m.svg);
  background-position: 0 0;
  background-repeat: repeat;
  background-blend-mode: ${({ theme }) => theme.currentTheme['--blend-mode']};
  background-color: ${({ theme }) => theme.currentTheme['--bg-100']};

  @media (max-width: 768px) {
    padding-top: 10vw;
  }
`

export const FaqsWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: 4vw;
    align-self: flex-start;
    color: ${({ theme }) => theme.currentTheme['--text-100']};
    letter-spacing: 0.1vw;
    padding: 1vw 0;
    animation: ${appearFromTop} 1s ease-in-out;

    @media (max-width: 768px) {
      font-size: 10vw;
      padding: 3vw 0;
    }
  }
`
