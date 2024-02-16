import styled from 'styled-components'

export const AssessmentSection = styled.section`
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 4vw;
`

export const AssesmentArticle = styled.article`
  width: 60%;
  padding: 4vw;
  display: flex;
  flex-direction: column;
  gap: 3vw;
  border-radius: 8px;
  border: 3px solid ${({ theme }) => theme.currentTheme['--accent-400']};

  @media (max-width: 768px) {
    width: 90vw;
    gap: 6vw;
  }

  > h1 {
    background: radial-gradient(
      circle at center,
      ${({ theme }) => theme.currentTheme['--primary-100']},
      ${({ theme }) => theme.currentTheme['--primary-200']}
    );
    -webkit-background-clip: text;
    color: transparent;
    font-size: 2.5vw;
    font-weight: bold;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 10vw;
    }
  }

  > p {
    font-size: 1.5vw;
    font-weight: 300;
    color: ${({ theme }) => theme.currentTheme['--text-100']};
    text-align: center;

    @media (max-width: 768px) {
      font-size: 6vw;
    }
  }
`
export const ContactButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  color: ${({ theme }) => theme.currentTheme['--text-400']};
  background-color: ${({ theme }) => theme.currentTheme['--accent-400']};
  width: 10vw;
  height: 6vh;
  align-self: center;
  border-radius: 8px;

  @media (max-width: 768px) {
    padding: 2vw;
    width: 80vw;
  }

  > * {
    text-decoration: none;
    font-size: 1.2vw;
    font-weight: 400;
    color: black;
  }

  > *:hover {
    font-size: 1vw;
    text-decoration: none;
    color: black;
  }

  > * {
    @media (max-width: 768px) {
      font-size: 5vw;
      width: 90vw;
      padding: 0.5vw;
    }
  }
`
export const BgWrapper = styled.div`
  width: 100vw;
  height: auto;
  overflow: hidden;

  > img {
    width: 100%;
    height: auto;

    @media (max-width: 768px) {
      width: 300%;
      overflow: hidden;
    }
  }
`
