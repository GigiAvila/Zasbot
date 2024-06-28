import styled, { keyframes } from 'styled-components'

const autoRun = keyframes`
  from {
    left: 100%;
  }
  to {
    left: calc(9vw * -1);
  }
`

const autoRunMobile = keyframes`
  from {
    left: 100%;
  }
  to {
    left: calc(30vw * -1);
  }
`

const floatingImage = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`

const moveBackground = keyframes`
  0% {
    background-position: right center;
  }
  50% {
    background-position: left center;
  }
  100% {
    background-position: right center;
  }
`

export const WhatsAppSection = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.currentTheme['--bg-100']};
  background-image: url(https://res.cloudinary.com/dqdyvyknw/image/upload/v1719417775/FONDO_NUBES_1_xoxsij.png);
  background-size: cover;
  background-blend-mode: ${({ theme }) => theme.currentTheme['--blend-mode']};
  animation: ${moveBackground} 20s linear infinite;

  @media (max-width: 768px) {
    animation: ${moveBackground} 100s linear infinite;
    justify-content: center;
  }
`

export const WhatsAppWrapper = styled.article`
  width: 40vw;
  height: auto;

  > img {
    width: 100%;
    height: auto;
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.9));
    animation: ${floatingImage} 3s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const WhatsappTextArticle = styled.article`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 60vw;
  height: auto;

  > h3 {
    color: ${({ theme }) => theme.currentTheme['--text-300']};
    font-size: 4vw;
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 9vw;
      text-align: center;
    }
  }
  @media (max-width: 768px) {
    width: 90vw;
    justify-content: center;
    align-items: center;
  }
`

export const WhatsappFeatures = styled.div`
  margin-top: 3rem;
  width: 60vw;
  height: 30vh;
  position: relative;
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    transparent,
    black 10%,
    black 90%,
    transparent
  );

  @media (max-width: 768px) {
    width: 90vw;
    margin-top: 0;
  }
`

export const WhatsappFeaturesWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: auto;
  margin-top: 3rem;
  gap: 2vw;
  width: 100%;
  min-width: calc(9vw * 4);
  position: relative;

  @media (max-width: 768px) {
    min-width: calc(30vw * 4);
    gap: 10vw;
  }

  > div {
    position: absolute;
    left: 100%;
  }
`

export const LocationText = styled.div`
  font-size: 1.1vw;
  font-weight: 300;
  color: ${({ theme }) => theme.currentTheme['--text-300']};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15vw;
  animation: ${autoRun} 10s linear infinite;
  animation-delay: calc((10s / 4) * -1);

  @media (max-width: 768px) {
    width: 30vw;
    animation: ${autoRunMobile} 30s linear infinite;
    animation-delay: calc((30s / 4) * -1);
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 15vw;

    > span:first-of-type {
      font-weight: bold;

      @media (max-width: 768px) {
        font-size: 4vw;
      }
    }
    > span:last-of-type {
      font-weight: 300;
      letter-spacing: 0.1rem;

      @media (max-width: 768px) {
        font-size: 4vw;
      }
    }
  }
`

export const CarouselText = styled.div`
  font-size: 1.1vw;
  font-weight: 300;
  color: ${({ theme }) => theme.currentTheme['--text-300']};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 15vw;
  animation: ${autoRun} 10s linear infinite;
  animation-delay: calc((10s / 4) * -2);

  @media (max-width: 768px) {
    width: 30vw;
    animation: ${autoRunMobile} 30s linear infinite;
    animation-delay: calc((30s / 4) * -2);
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 15vw;

    > span:first-of-type {
      font-weight: bold;

      @media (max-width: 768px) {
        font-size: 4vw;
      }
    }
    > span:last-of-type {
      font-weight: 300;
      letter-spacing: 0.1rem;

      @media (max-width: 768px) {
        font-size: 4vw;
      }
    }
  }
`

export const VideoWrapper = styled.div`
  width: auto;
  height: 8vh;
  border-radius: 8px;

  > video {
    width: auto;
    height: 100%;
    border-radius: 8px;
  }
`

export const PromoText = styled.div`
  font-size: 1.1vw;
  font-weight: 300;
  color: ${({ theme }) => theme.currentTheme['--text-300']};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15vw;
  animation: ${autoRun} 10s linear infinite;
  animation-delay: calc((10s / 4) * -3);

  @media (max-width: 768px) {
    width: 30vw;
    animation: ${autoRunMobile} 30s linear infinite;
    animation-delay: calc((30s / 4) * -3);
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > span:first-of-type {
      font-weight: bold;

      @media (max-width: 768px) {
        font-size: 4vw;
      }
    }
    > span:last-of-type {
      font-weight: 300;
      letter-spacing: 0.1rem;

      @media (max-width: 768px) {
        font-size: 4vw;
      }
    }
  }
`

export const AgendaText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15vw;
  animation: ${autoRun} 10s linear infinite;
  animation-delay: calc((10s / 4) * -4);

  @media (max-width: 768px) {
    width: 30vw;
    animation: ${autoRunMobile} 30s linear infinite;
    animation-delay: calc((30s / 4) * -4);
  }

  > * {
    font-size: 1.1vw;
    font-weight: bold;
    color: ${({ theme }) => theme.currentTheme['--text-300']};
  }

  > div {
    display: flex;
  }
`

export const AgendaList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  list-style: none;

  @media (max-width: 768px) {
    font-size: 4vw;
  }

  > li {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    > * {
      font-size: 0.9vw;
      font-weight: 300;
      letter-spacing: 0.1rem;
      color: ${({ theme }) => theme.currentTheme['--text-300']};

      @media (max-width: 768px) {
        font-size: 4vw;
      }
    }
  }
`

export const MoreText = styled.h4`
  color: ${({ theme }) => theme.currentTheme['--text-300']};
  font-size: 1.7vw;
  font-weight: 300;
  letter-spacing: 0.09vw;

  @media (max-width: 768px) {
    font-size: 6vw;
    text-align: center;
    padding: 1vw;
    margin-top: 2vw;
  }
`

export const MessageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`

export const MessageText = styled.div`
  font-size: 2vw;
  font-weight: bold;
  color: ${({ theme }) => theme.currentTheme['--text-300']};
`
export const IaText = styled.h4`
  font-size: 1.7vw;
  font-weight: bold;
  letter-spacing: 0.09vw;
  color: ${({ theme }) => theme.currentTheme['--primary-200']};

  @media (max-width: 768px) {
    font-size: 6vw;
    text-align: center;
    padding: 1vw;
    margin-top: 5vw;
  }
`
