import styled from 'styled-components'

export const LanguageContainer = styled.select`
  display: flex;
  width: 8vw;
  height: 2vw;
  font-size: 0.7vw;
  color: ${({ theme }) => theme.currentTheme['--text-100']};
  background-color: ${({ theme }) => theme.currentTheme['--bg-300']};

  &:hover {
    background-color: ${({ theme }) => theme.currentTheme['--accent-200']};
  }

  > option {
    font-size: 0.8vw;
    background-color: ${({ theme }) => theme.currentTheme['--bg-300']};
    color: ${({ theme }) => theme.currentTheme['--text-100']};

    &:hover {
      background-color: ${({ theme }) => theme.currentTheme['--accent-200']};
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`
