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
  position: relative;

  @media (max-width: 768px) {
    border-bottom: 1px solid #f2f2f2;
    padding: 2vw 0;
  }

  > * {
    text-decoration: none;
    color: ${({ theme }) => theme.currentTheme['--text-100']};
    font-size: 1vw;
    padding: 0.3vw 0.7vw;
    position: relative;
    z-index: 1;
  }

  > *::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background-color: ${({ theme }) => theme.currentTheme['--accent-400']};
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.1s;
    z-index: -1;
    border-radius: 20px;
  }

  > *:hover::before {
    width: 100%;
    height: 100%;
  }

  > *:hover {
    color: ${({ theme }) => theme.currentTheme['--text-400']};
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
