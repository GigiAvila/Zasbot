import styled, { keyframes } from 'styled-components'

export const HomeSection = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.currentTheme['--bg-100']};
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

export const HomeTextArticle = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2vw;
  padding: 2vw;
  width: 50vw;

  > h1 {
    font-size: 5vw;
    color: ${({ theme }) => theme.currentTheme['--primary-100']};
    animation: ${fadeIn} 1.5s ease-in-out;
  }

  > h3 {
    font-size: 1.5vw;
    color: ${({ theme }) => theme.currentTheme['--primary-200']};
    animation: ${appearFromBelow} 1s ease-in-out;
  }
`

export const HomeImgArticle = styled.article`
  padding: 2vw;
  wwidth: 50vw;
  height: auto;

  > img {
    width: 100%;
    height: auto;
  }
`

export const HomeForm = styled.form`
  display: flex;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.currentTheme['--accent-100']};
  padding: 0.3vw;
  width: 30vw;
  animation: ${appearFromBelow} 1s ease-in-out;
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
  height: 5vh;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  border: none;

  > p {
    font-size: 0.8vw;
    height: 100%;
    display: flex;
    align-items: center;
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
`
