import styled from 'styled-components'

export const Headers = styled.header`
  background-color: ${({ theme }) =>
    `rgba(${theme.currentTheme['--bg-100'].slice(1)}, 0.5)`};
  border-bottom: 1px solid ${({ theme }) => theme.currentTheme['--primary-300']};
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`
