import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const appearFromBelow = keyframes`
  from {
    transform: translateY(300%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

export const IntegrationsSection = styled.section`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2vw;

  @media (max-width: 768px) {
    height: 100vh;
    gap: 5vh;
  }
`
export const IntegracionsTitles = styled.article`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1vw;

  > h1 {
    background: radial-gradient(
      circle at center,
      ${({ theme }) => theme.currentTheme['--primary-100']},
      ${({ theme }) => theme.currentTheme['--primary-200']}
    );
    -webkit-background-clip: text;
    color: transparent;
    font-size: 4vw;
    font-weight: bold;
    animation: ${appearFromBelow} 1.3s ease-in-out;

    @media (max-width: 768px) {
      font-size: 10vw;
    }
  }

  > h2 {
    font-size: 1.7vw;
    font-weight: 300;
    color: ${({ theme }) => theme.currentTheme['--text-100']};
    text-align: center;
    animation: ${appearFromBelow} 1.6s ease-in-out;

    @media (max-width: 768px) {
      font-size: 6vw;
    }
  }

  @media (max-width: 768px) {
    width: 90vw;
    gap: 4vw;
  }
`

export const LogosArticle = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 60%;
  height: 2auto;
  gap: 3vw;
  margin-top: 5vw;
  animation: ${fadeIn} 3s ease-in-out;

  @media (max-width: 768px) {
    width: 90vw;
    gap: 3vw;
  }
`
export const LogoBg = styled.div`
  position: relative;
  padding: 1.5vw;
  border-radius: 8px;
  backdrop-filter: blur(10px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.currentTheme['--bg-300']};
    opacity: 0.3;
    border-radius: 8px;
    z-index: -1;
  }
`

export const LogoWrapper = styled.div`
  width: auto;
  height: 9vh;
  display: flex;

  @media (max-width: 768px) {
    height: 6vh;
  }
`

export const LogoImage = styled.img`
  width: auto;
  height: 100%;
`
