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

export const ConversationsSection = styled.section`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2vw;
  background-image: url(${(props) => props.BGVector});
  background-size: cover;
  padding: 2vw;

  @media (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    flex-direction: column-reverse;
    gap: 4vh;
  }
`
export const ConversationsTitles = styled.article`
  display: flex;
  flex-direction: column;
  gap: 3vw;
  width: 50%;

  > h1 {
    background: radial-gradient(
      circle at center,
      ${({ theme }) => theme.currentTheme['--primary-100']},
      ${({ theme }) => theme.currentTheme['--primary-200']}
    );
    -webkit-background-clip: text;
    color: transparent;
    font-size: 3vw;
    font-weight: bold;
    animation: ${appearFromRight} 1.3s ease-in-out;

    @media (max-width: 768px) {
      font-size: 10vw;
      text-align: center;
    }
  }

  > h2 {
    font-size: 1.7vw;
    font-weight: 300;
    color: ${({ theme }) => theme.currentTheme['--text-100']};
    animation: ${appearFromRight} 1.6s ease-in-out;

    @media (max-width: 768px) {
      font-size: 6vw;
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    width: 90vw;
    gap: 4vw;
  }
`
export const ConversationImageWrapper = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  animation: ${fadeIn} 3s ease-in-out;

  > img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 90vw;
  }
`
export const SpanText = styled.span`
  color: ${({ theme }) => theme.currentTheme['--primary-100']};
  font-weight: bold;
`