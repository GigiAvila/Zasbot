import styled from 'styled-components'

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

    @media (max-width: 768px) {
      font-size: 10vw;
      text-align: center;
    }
  }

  > h2 {
    font-size: 1.7vw;
    font-weight: 300;
    color: ${({ theme }) => theme.currentTheme['--text-100']};

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
