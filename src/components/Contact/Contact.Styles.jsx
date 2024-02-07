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
export const FormSection = styled.section`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4vw 0;
  background-color: ${({ theme }) => theme.currentTheme['--bg-100']};
`

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 4vw;
    align-self: flex-start;
    color: ${({ theme }) => theme.currentTheme['--text-100']};
    letter-spacing: 0.1vw;
    padding: 1vw 0;
    animation: ${appearFromTop} 1s ease-in-out;
  }
`
