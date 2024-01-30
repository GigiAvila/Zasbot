import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 1vw;
  padding: 1vw;
`

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 1vw;
  width: 30vw;

  @media (max-width: 768px) {
    display: ${(props) => (props.menuOpen ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    top: 100%;
    right: 0;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    width: 100%;
    background-color: white;
    height: 100vh;
    padding: 2rem;
    background-color: ${({ theme }) => theme.currentTheme['--bg-100']};
  }
`
export const NavElement = styled.li`
  display: flex;

  @media (max-width: 768px) {
    border-bottom: 1px solid #f2f2f2;
    padding: 2vw 0;
  }

  > * {
    color: ${({ theme }) => theme.currentTheme['--text-100']};
    font-size: 1vw;
    padding: 0.5vw;
  }

  > *:hover {
    color: ${({ theme }) => theme.currentTheme['--accent-300']};
  }

  > * {
    @media (max-width: 768px) {
      font-size: 4vw;
      width: 90vw;
      padding: 0.5vw;
    }
  }
`
export const MenuIconContainer = styled.div`
width: 6vw;
height: auto;
display: flex;
justify-content: center;
align-items: center;

> img {
  width: 100%;
  height: auto;
}

@media (min-width:1023px) {
  display: none;
`
