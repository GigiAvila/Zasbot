import styled from 'styled-components'

export const ContactFooterContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 18vw;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.currentTheme['--bg-200']};
  padding: 0.5vw;

  @media (max-width: 768px) {
    display: none;
  }
`

export const ContactFooterTextWrapper = styled.div`
  padding: 1vw;

  > h3 {
    line-height: 2.5;
    font-weight: bold;
    font-size: 1vw;
    color: ${({ theme }) => theme.currentTheme['--text-100']};

    @media (max-width: 768px) {
      font-size: 2vw;
    }
  }
  > h4 {
    font-weight: 200;
    padding: 1vw 0;
    line-height: 2;
    font-size: 0.9vw;
    color: ${({ theme }) => theme.currentTheme['--text-200']};

    @media (max-width: 768px) {
      font-size: 2vw;
    }
  }
`
export const ContactButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3vw;
  height: 5vh;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.currentTheme['--primary-200']};

  > * {
    font-size: 0.8em;
    font-weight: 400;
    height: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.currentTheme['--bg-100']};
  }

  &:hover {
    background-color: ${({ theme }) => theme.currentTheme['--accent-300']};
    border-radius: 10px;
    color: ${({ theme }) => theme.currentTheme['--bg-100']};
  }
`
