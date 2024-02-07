import styled from 'styled-components'

export const CustomSelect = styled.div`
  position: relative;
  width: 10vw;
  height: 2vw;
  font-size: 0.7vw;
  color: ${({ theme }) => theme.currentTheme['--text-100']};
  background-color: ${({ theme }) => theme.currentTheme['--bg-300']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5vw;
  cursor: pointer;
  border-radius: 20px;

  &:hover {
    background-color: ${({ theme }) => theme.currentTheme['--accent-400']};
    color: ${({ theme }) => theme.currentTheme['--text-400']};
  }

  @media (max-width: 768px) {
    display: none;
  }

  .options-container {
    width: 10vw;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: ${({ theme }) => theme.currentTheme['--bg-300']};
    color: ${({ theme }) => theme.currentTheme['--text-100']};
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    margin-top: 0.3vw;
    border-radius: 20px;
  }

  .option {
    padding: 0.7vw;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.currentTheme['--accent-400']};
      color: ${({ theme }) => theme.currentTheme['--text-400']};
      border-radius: 20px;
    }
  }
`

export const SelectTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5vw;
  width: 100%;
  justify-content: space-between;

  > div {
    width: 1.2vw;
    transition: transform 0.5s ease;
    transform: ${(props) => (props.isOpen ? 'rotate(-180deg)' : null)};
    display: flex;

    > img {
      width: 100%;
      height: auto;
    }
  }
`
