import styled from 'styled-components'

export const Headers = styled.header`
  background-color: ${({ theme }) => theme.currentTheme['--bg-100']};
  border-bottom: 1px solid ${({ theme }) => theme.currentTheme['--primary-100']};

  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  height: 10vh;
  padding: 0vw 1vw;

  @media (min-width: 768px) {
    height: auto;
  }
`
