import styled from 'styled-components'

export const VideoSection = styled.section`
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5vw;
`

export const VideoTitles = styled.article`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1vw;

  > h3 {
    background: linear-gradient(
      ${({ theme }) => theme.currentTheme['--primary-300']},
      ${({ theme }) => theme.currentTheme['--primary-200']}
    );
    -webkit-background-clip: text;
    color: transparent;
    font-size: 4vw;
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 10vw;
      text-align: center;
    }
  }

  > h4 {
    font-size: 1.7vw;
    font-weight: 300;
    color: ${({ theme }) => theme.currentTheme['--text-100']};
    text-align: center;

    @media (max-width: 768px) {
      font-size: 6vw;
    }
  }

  @media (max-width: 768px) {
    width: 90vw;
    gap: 4vw;
  }
`

export const VideoWrapper = styled.article`
  @media (max-width: 768px) {
    width: 90vw;

    > iframe {
      width: 100%;
    }
  }
`

export const VideoButton = styled.button``
