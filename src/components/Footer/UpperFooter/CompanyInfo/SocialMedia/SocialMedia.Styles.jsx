import styled from 'styled-components'

export const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5vw;
  width: 100%;
  list-style: none;

  @media (max-width: 768px) {
    margin: 2vw 0;
    gap: 1vw;
  }
`

export const Element = styled.li`
  width: 1.8vw;

  @media (max-width: 768px) {
    width: 6vw;
  }
`

export const Link = styled.a`
  display: flex;
  width: 100%;
  height: 100%;

  > img {
    width: 100%;
    height: auto;
    filter: ${({ theme }) => theme.currentTheme['--filter']};
  }
`
