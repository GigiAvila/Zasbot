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

export const PostSection = styled.section`
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

export const PostWrapper = styled.section`
  width: 50vw;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 5vw;

  @media (max-width: 768px) {
  width: 90vw;
  
`

export const ImageWrapper = styled.article`
  width: 100%;
  height: 400px;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Titles = styled.article`
  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 2vw;
    align-self: flex-start;
    letter-spacing: 0.1vw;
    padding: 1vw 0;
    animation: ${appearFromTop} 1s ease-in-out;
    text-transform: uppercase;
    color: ${({ theme }) => theme.currentTheme['--text-100']};

    @media (max-width: 768px) {
      font-size: 10vw;
      padding: 3vw 0;
    }
  }
`

export const Details = styled.div`
  color: ${({ theme }) => theme.currentTheme['--text-200']};
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  line-height: 16px;
  animation: ${appearFromTop} 1s ease-in-out;

  > * {
    color: ${({ theme }) => theme.currentTheme['--text-200']};
    font-size: 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
    line-height: 16px;
  }
`

export const Content = styled.article`
  > * {
    color: ${({ theme }) => theme.currentTheme['--text-100']};
    line-height: 23px;
    animation: ${appearFromTop} 1.5s ease-in-out;
  }

  > h1 {
    font-size: 1.8vw;
    font-weight: bold;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 6vw;
    }
  }

  > h2 {
    font-size: 1.5vw;
    font-weight: 600;
    margin-bottom: 16px;

    @media (max-width: 768px) {
      font-size: 5vw;
    }
  }

  > h3 {
    font-size: 1.5vw;
    font-weight: 400;
    margin-bottom: 14px;

    @media (max-width: 768px) {
      font-size: 5vw;
    }
  }

  p {
    margin-bottom: 12px;
  }

  > blockquote {
    font-size: 1.2vw;
    border-left: 4px solid
      ${({ theme }) => theme.currentTheme['--accent-color']};
    padding-left: 10px;
    margin: 0 0 12px 0;
    font-style: italic;

    @media (max-width: 768px) {
      font-size: 4vw;
    }
  }

  > ul,
  ol {
    font-size: 1.2vw;
    margin-bottom: 12px;
    margin-left: 20px;

    @media (max-width: 768px) {
      font-size: 4vw;
    }
  }

  > li {
    font-size: 1.1vw;
    margin-bottom: 8px;

    @media (max-width: 768px) {
      font-size: 3.5vw;
    }
  }

  > .image-article {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > .image-article .image-wrapper {
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  > .image-article .image-wrapper img {
    max-width: 100%;
    height: auto;
  }

  > p a.link {
    color: ${({ theme }) => theme.currentTheme['--accent-100']};
    text-decoration: none;
  }
`
