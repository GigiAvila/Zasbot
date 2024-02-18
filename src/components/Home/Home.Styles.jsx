import styled, { keyframes } from 'styled-components'

export const HomeSection = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.currentTheme['--bg-100']};
  background-image: url(${(props) => props.HeroBG});
  background-size: cover;

  @media (max-width: 768px) {
    height: auto;
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
  }
`
export const HomeTextArticle = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2vw;
  padding: 2vw;
  width: 50vw;

  > h1 {
    font-size: 6vw;
    font-weight: 800;
    letter-spacing: 0.05vw;
    color: ${({ theme }) => theme.currentTheme['--text-100']};
    animation: ${fadeIn} 1.5s ease-in-out;

    @media (max-width: 768px) {
      font-size: 11vw;
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
    height: 100vh;
    width: 90vw;
    justify-content: center;
    align-items: center;
    gap: 8vw;
  }
`

export const HomeSpan = styled.span`
  color: ${({ theme }) => theme.currentTheme['--accent-400']};
`

export const HomeImgArticle = styled.article`
  padding: 2vw;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  > video {
    width: 65%;
    height: 100%;
    border: 6px solid black;
    border-radius: 8px;
    box-shadow: 10px 5px 40px 5px
      ${({ theme }) => `${theme.currentTheme['--bg-400']}80`};
  }
`

export const HomeForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5vw;
  width: 30vw;
  animation: ${appearFromBelow} 1s ease-in-out;

  > p {
    color: ${({ theme }) => theme.currentTheme['--text-200']};
    font-size: 0.8vw;

    @media (max-width: 768px) {
      text-align: center;
      font-size: 4vw;
    }
  }

  @media (max-width: 768px) {
    width: 80vw;
    height: auto;
    gap: 1vw;
  }
`

export const HomeInput = styled.input`
  width: 18vw;
  height: 5vh;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.currentTheme['--bg-100']};
  color: ${({ theme }) => theme.currentTheme['--text-200']};

  &::placeholder {
    color: ${({ theme }) => theme.currentTheme['--text-200']};
  }

  &::focus {
  }
`

export const HomeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3vw;
  background-color: ${({ theme }) => theme.currentTheme['--accent-400']};
  width: 20vw;
  height: 5vh;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  border: none;

  @media (max-width: 768px) {
    width: 80vw;
    height: 10vh;
    gap: 1vw;
  }
`
export const HomeAnchor = styled.a`
  text-decoration: none;
  color: black;

  &:hover {
    color: black;
  }

  > p {
    font-size: 0.8vw;
    height: 100%;
    display: flex;
    align-items: center;

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
