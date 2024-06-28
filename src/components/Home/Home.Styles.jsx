import styled, { keyframes } from 'styled-components'

export const HomeSection = styled.section`
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: auto;
  }
`

const floatingImage = keyframes`
  0% {
   transform: translateY(1000px);
}
  100% {
    transform: translateY(0);
  }
  `

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
export const HeroWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100vw;
    margin-top: 10vh;
  }
`
export const HomeTextArticle = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2vw;
  padding: 2vw;
  width: 65vw;

  > h1 {
    font-size: 4vw;
    font-weight: 800;
    letter-spacing: 0.05vw;
    color: ${({ theme }) => theme.currentTheme['--text-500']};
    animation: ${fadeIn} 1.5s ease-in-out;

    @media (max-width: 768px) {
      font-size: 10vw;
      text-align: center;
    }
  }

  > h2 {
    font-size: 1.7vw;
    font-weight: 300;
    letter-spacing: 0.09vw;
    color: ${({ theme }) => theme.currentTheme['--text-100']};
    animation: ${appearFromBelow} 1s ease-in-out;

    @media (max-width: 768px) {
      font-size: 6vw;
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    height: 90vh;
    width: 90vw;
    justify-content: center;
    align-items: center;
    gap: 8vw;
  }
`

export const HomeSpan = styled.span`
  color: ${({ theme }) => theme.currentTheme['--accent-200']};
  font-size: 4vw;

  @media (max-width: 768px) {
    font-size: 10vw;
  }
`

export const HomeImgArticle = styled.article`
  padding: 2vw;
  width: 35vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  

  > video {
    width: 65%;
    height: 100%;
    border: 6px solid black;
    border-radius: 8px;
    box-shadow: 10px 5px 40px 5px
      ${({ theme }) => `${theme.currentTheme['--primary-100']}80`};
  }

  > img {
  width: 150%;
  height: auto;
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.9));
    animation: ${floatingImage} 1.5s ease-in-out;
  }

  @media (max-width: 768px) {
    width: auto;
    height: 80vh;
    display: none;

    > video {
      width: auto;
      height: 100%;
  }
`

export const CtaArticle = styled.article`
  display: flex;
  flex-direction: row;
  gap: 1vw;
  width: 30vw;
  animation: ${appearFromBelow} 1s ease-in-out;

  @media (max-width: 768px) {
    width: 90vw;
    height: auto;
    gap: 5vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const ButtonLeft = styled.div`
  display: flex;
  flex-direction: column;

  > p {
    color: ${({ theme }) => theme.currentTheme['--text-200']};
    font-size: 0.8vw;
    margin-top: 0.5vw;

    @media (max-width: 768px) {
      text-align: center;
      font-size: 4vw;
    }
  }
`

// export const HomeInput = styled.input`
//   width: 18vw;
//   height: 5vh;
//   border-radius: 5px;
//   border: none;
//   outline: none;
//   background-color: ${({ theme }) => theme.currentTheme['--bg-100']};
//   color: ${({ theme }) => theme.currentTheme['--text-200']};

//   &::placeholder {
//     color: ${({ theme }) => theme.currentTheme['--text-200']};
//   }

//   &::focus {
//   }
// `

export const FreeTrialButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3vw;
  background-color: ${({ theme }) => theme.currentTheme['--primary-200']};
  width: 15vw;
  height: 5vh;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  border: none;
  transition: font-weight 0.3s ease;

  &:hover {
    font-weight: 800;
  }

  > a {
    color: ${({ theme }) => theme.currentTheme['--text-100']};
    text-decoration: none;
  }

  @media (max-width: 768px) {
    width: 80vw;
    height: 6vh;
    gap: 1vw;
    padding: 0.6em;
  }
`

export const DemoButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3vw;
  background-color: transparent;
  width: 15vw;
  height: 5vh;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.currentTheme['--primary-200']};
  padding: 0.6em 1.2em;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  transition: font-weight 0.3s ease;

  &:hover {
    border: 1px solid ${({ theme }) => theme.currentTheme['--primary-200']};
    font-weight: 800;
  }

  > a {
    color: ${({ theme }) => theme.currentTheme['--primary-200']};
    text-decoration: none;
  }

  @media (max-width: 768px) {
    width: 80vw;
    height: 6vh;
    gap: 1vw;
    padding: 0.6em;
  }
`

export const HomeAnchor = styled.a`
  text-decoration: none;
  font-size: 0.8vw;

    @media (max-width: 768px) {
      font-size: 4vw;
      text-align: center;
      font-weight: 500;
    }
  }
`

export const HomeButtonImgWrapper = styled.div`
  width: 1.3vw;
  height: auto;
  display: flex;

  > img {
    width: 100%;
    height: auto;
    transform: rotate(240deg);
  }

  @media (max-width: 768px) {
    display: none;
  }
`
