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

const appearFromBottom = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`
export const Blog = styled.section`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1vw 0 5vw 0;
  background-color: ${({ theme }) => theme.currentTheme['--bg-100']};

  @media (max-width: 768px) {
    padding-top: 10vw;
  }
`

export const BlogTitles = styled.section`
  width: 80%;

  @media (max-width: 768px) {
    width: 100%;
  }

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

export const PostContainer = styled.section`
  width: 80vw;
  height: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4vw;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Post = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  animation: ${appearFromBottom} 1.5s ease-in-out;
`

export const ImgWrapper = styled.div`
  width: 100%;
  height: 280px;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  }
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2vw;
  width: 100%;
  padding-top: 1vw;

  > * {
    color: ${({ theme }) => theme.currentTheme['--text-200']};
    font-size: 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
    line-height: 16px;
  }
`

export const PostTitle = styled.div`
  > * {
    color: ${({ theme }) => theme.currentTheme['--text-100']};
    text-decoration: none;
    line-height: 23px;
  }
`
export const Excerpt = styled.div`
  > * {
    color: ${({ theme }) => theme.currentTheme['--text-100']};
    text-transform: capitalize;
    line-height: 23px;
    font-size: 12px;
    font-weight: 300;
  }
`

export const Button = styled.div`
  padding: 0.5vw 1vw;
  border: none;
  cursor: pointer;
  width: auto;
  background-color: ${({ theme }) => theme.currentTheme['--primary-200']};
  color: ${({ theme }) => theme.currentTheme['--bg-100']};

  &:hover {
    background-color: ${({ theme }) => theme.currentTheme['--accent-300']};
    border-radius: 10px;
    color: ${({ theme }) => theme.currentTheme['--bg-100']};
    border: none;
  }

  @media (max-width: 768px) {
    padding: 3vw;
  }

  > a {
    text-decoration: none;
    color: ${({ theme }) => theme.currentTheme['--text-300']};
    font-size: 0.9em;
  }
`

export const Pagination = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2vw;
`

export const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.5vw;
  background-color: transparent;
  color: ${({ theme }) => theme.currentTheme['--text-100']};
  border: none;
  cursor: pointer;
  width: 1.5vw;
  height: 1.5vw;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  > img {
    width: 100%;
    height: auto;
    filter: invert(100%);
    transition: transform 0.3s ease-in-out;
  }

  &.prev > img {
    transform: rotate(90deg);
  }

  &.next > img {
    transform: rotate(-90deg);
  }
`

export const Pages = styled.button`
  border: transparent;
  cursor: pointer;
  background-color: transparent;
  color: ${({ theme }) => theme.currentTheme['--text-100']};
  outline: none;

  &:focus {
    outline: none;
  }

  &.active {
    text-decoration: underline;
    font-weight: bold;
  }
`
