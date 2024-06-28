import styled from 'styled-components'

export const FooterSection = styled.footer`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px -5px 5px -1px
    ${({ theme }) => `${theme.currentTheme['--accent-400']}60`};
  background-color: ${({ theme }) => theme.currentTheme['--bg-100']};
`
