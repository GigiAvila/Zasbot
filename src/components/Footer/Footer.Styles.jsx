import styled from 'styled-components'

export const FooterSection = styled.footer`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-shadow: 0px -5px 5px -1px rgba(50, 50, 93, 0.25);
  background-color: ${({ theme }) => theme.currentTheme['--bg-100']};
`
