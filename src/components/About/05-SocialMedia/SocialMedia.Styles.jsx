import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const appearFromRight = keyframes`
  from {
    transform: translateX(300%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

export const SocialMediaSection = styled.section`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2vw;

  @media (max-width: 768px) {
    width: 100vw;
    flex-direction: column;
    gap: 4vh;
    min-height: 100vh;
  }
`

export const SocialMediaTitles = styled.article`
  display: flex;
  flex-direction: column;
  width: 80%;

  > h3 {
    background: linear-gradient(
      ${({ theme }) => theme.currentTheme['--primary-300']},
      ${({ theme }) => theme.currentTheme['--primary-200']}
    );
    -webkit-background-clip: text;
    color: transparent;
    font-size: 3vw;
    font-weight: bold;
    animation: ${(props) => (props.animate ? appearFromRight : 'none')} 1.3s
      ease-in-out;

    @media (max-width: 768px) {
      font-size: 10vw;
      text-align: center;
    }
  }

  > h4 {
    font-size: 2vw;
    font-weight: 300;
    color: ${({ theme }) => theme.currentTheme['--text-100']};
    animation: ${(props) => (props.animate ? appearFromRight : 'none')} 1.6s
      ease-in-out;

    > span {
      font-size: 2vw;
      color: ${({ theme }) => theme.currentTheme['--primary-200']};

      @media (max-width: 768px) {
        font-size: 6vw;
      }
    }

    @media (max-width: 768px) {
      font-size: 6vw;
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    width: 92vw;
    gap: 4vw;
  }
`

export const SocialMediaWrapper = styled.article`
  width: 80%;
  height: 100vh;
  position: relative;

  @media (max-width: 768px) {
    width: 95%;
    height: 50vh;
  }
`
export const TopPart = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: row-reverse;
  position: absolute;
  top: 0vw;
`
export const ConversationImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  max-height: 100vh;
  overflow: hidden;

  > div {
    width: 30vw;
    height: auto;
    display: flex;
    animation: ${(props) => (props.animate ? fadeIn : 'none')} 3s ease-in-out;
    perspective: 500px;

    > img {
      width: 100%;
      height: auto;
      filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.7));
      transform: rotateY(30deg) rotateX(5deg);
    }

    @media (max-width: 768px) {
      width: 45vw;
    }
  }
`

export const BottomPart = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 0;

  @media (max-width: 768px) {
    margin-top: 15vh;
  }
`

export const PromoImages = styled.div`
  width: 30vw;
  height: auto;
  display: flex;
  animation: ${(props) => (props.animate ? fadeIn : 'none')} 3s ease-in-out;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`

export const BottomImages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: auto;
  position: relative;

  > div:first-child {
    width: 25%;
    height: auto;

    > img {
      width: 100%;
      height: auto;
      filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.7));
    }
  }

  > div:last-child {
    width: 35%;
    height: auto;
    margin-right: 3vw;

    > img {
      width: 100%;
      height: auto;
      filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.9));
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const TopImages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: auto;

  > div {
    width: 35%;
    height: auto;
    display: flex;

    > img {
      width: 100%;
      height: auto;
      filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.9));
    }
  }

  @media (max-width: 768px) {
    > div:first-child {
      display: none;
    }

    > div:last-child {
      width: 50vw;
      height: auto;
    }
  }
`

export const SpanText = styled.span`
  color: ${({ theme }) => theme.currentTheme['--primary-200']};
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 4vw;
  }
`

export const List = styled.ul`
  font-weight: 300;
  list-style: none;
  margin-top: 7vw;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    font-size: 4vw;
    width: 55vw;
    margin-top: 0vw;
  }

  > li {
    font-size: 1.2vw;
    color: ${({ theme }) => theme.currentTheme['--text-100']};
    font-weight: 300;
    letter-spacing: 0.1rem;
    padding: 0.5vw;

    @media (max-width: 768px) {
      font-size: 4vw;
    }
  }

  > li:first-child {
    font-size: 1.4vw;
    font-weight: bold;
    text-transform: uppercase;
    color: ${({ theme }) => theme.currentTheme['--text-100']};
    margin-bottom: 1vw;

    @media (max-width: 768px) {
      font-size: 4vw;
    }

    > span {
      color: ${({ theme }) => theme.currentTheme['--primary-200']};

      @media (max-width: 768px) {
        font-size: 4vw;
      }
    }
  }
`
