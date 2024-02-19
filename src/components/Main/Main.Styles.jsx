import styled from 'styled-components'

export const MainSection = styled.main`
  background-color: ${({ theme }) => theme.currentTheme['--bg-100']};
  padding-top: 10vh;

  @media (min-width: 768px) {
    padding-top: 10vh;
  }
`
