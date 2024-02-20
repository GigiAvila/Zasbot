import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const appearFromLeft = keyframes`
  from {
    transform: translateX(-300%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

export const FlowChartSection = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.currentTheme['--bg-100']};
  gap: 2vw;
  padding: 2vw;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const FlowBG = styled.div`
  height: 57vh;
  width: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${(props) => props.WorldImage}) center/80% no-repeat;
    opacity: 0.05;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    width: 90vw;
  }
`
export const TextWrapper = styled.div`
  height: auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`
export const QuoteLogoWrapper = styled.div`
  width: 5vw;
  height: auto;
  border-radius: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.currentTheme['--accent-400']};
  align-self: flex-start;
  animation: ${(props) => (props.animate ? appearFromLeft : 'none')} 1.3s
    ease-in-out;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 12vw;
  }
`

export const FlowChartTitles = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2vw;
  width: 85%;

  @media (max-width: 768px) {
    width: 100%;
    gap: 4vw;
  }

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
    animation: ${(props) => (props.animate ? appearFromLeft : 'none')} 1.3s
      ease-in-out;

    @media (max-width: 768px) {
      font-size: 10vw;
      text-align: center;
    }
  }

  > h2 {
    font-size: 1.7vw;
    font-weight: 300;
    color: ${({ theme }) => theme.currentTheme['--text-100']};
    animation: ${(props) => (props.animate ? appearFromLeft : 'none')} 1.6s
      ease-in-out;

    @media (max-width: 768px) {
      font-size: 6vw;
      text-align: center;
    }
  }
`
export const FlowVideo = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  padding: 0 2vw;
  animation: ${(props) => (props.animate ? fadeIn : 'none')} 3s ease-in-out;

  > video {
    width: 100%;
    height: 100%;
    border: 6px solid black;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    width: 95vw;
  }
`
export const SpanText = styled.span`
  color: ${({ theme }) => theme.currentTheme['--primary-100']};
  font-weight: bold;
`
