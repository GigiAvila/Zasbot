import styled, { keyframes } from 'styled-components'

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
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
  animation: ${(props) => (props.animate ? fadeIn : 'none')} 3s ease-in-out;

  @media (max-width: 768px) {
    width: 90vw;
    gap: 6vw;
  }

  > h3 {
    background: linear-gradient(
      ${({ theme }) => theme.currentTheme['--primary-300']},
      ${({ theme }) => theme.currentTheme['--primary-200']}
    );
    -webkit-background-clip: text;
    color: transparent;
    font-size: 2.5vw;
    font-weight: bold;
    text-align: center;
    animation: ${(props) => (props.animate ? appearFromBelow : 'none')} 1s
      ease-in-out;

    @media (max-width: 768px) {
      font-size: 10vw;
    }
  }

  > p {
    font-size: 1.5vw;
    font-weight: 300;
    color: ${({ theme }) => theme.currentTheme['--text-100']};
    text-align: center;
    animation: ${(props) => (props.animate ? appearFromBelow : 'none')} 1.2s
      ease-in-out;

    @media (max-width: 768px) {
      font-size: 6vw;
    }
  }
`
export const ContactButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  width: 12vw;
  height: 6vh;
  align-self: center;
  border-radius: 8px;
  animation: ${(props) => (props.animate ? fadeIn : 'none')} 2.6s ease-in-out;
  background-color: ${({ theme }) => theme.currentTheme['--primary-200']};

  &:hover {
    background-color: ${({ theme }) => theme.currentTheme['--accent-300']};
    border-radius: 10px;

    border: none;
  }

  @media (max-width: 768px) {
    padding: 2vw;
    width: 80vw;
  }

  > * {
    text-decoration: none;
    font-size: 1.2vw;
    font-weight: 400;
    color: ${({ theme }) => theme.currentTheme['--bg-100']};
  }

  > *:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.currentTheme['--bg-100']};
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
