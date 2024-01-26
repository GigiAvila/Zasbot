import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 1vw;
  padding: 1vw;
  background-color: yellow;

  > ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    gap: 1vw;
    width: 30vw;
  }
`
export const NavElement = styled.li`
  display: flex;

  > * {
    color: black;
    font-size: 1vw;
    padding: 0.5vw;
  }

  > *:hover {
    color: red;
  }
`
