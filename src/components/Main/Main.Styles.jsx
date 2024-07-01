import styled from 'styled-components'

export const MainSection = styled.main`
  background-image: url(https://res.cloudinary.com/dqdyvyknw/image/upload/v1719592958/Desktop_-_1_3_ke963m.svg);
  background-position: 0 0;
  background-repeat: repeat;
  background-blend-mode: ${({ theme }) => theme.currentTheme['--blend-mode']};
  background-color: ${({ theme }) => theme.currentTheme['--bg-100']};

  @media (min-width: 768px) {
    padding-top: 10vh;
    background-image: ${({ theme }) =>
      theme.currentTheme === 'darkPalette'
        ? 'none'
        : 'url(https://res.cloudinary.com/dqdyvyknw/image/upload/v1719592958/Desktop_-_1_3_ke963m.svg)'};
  }
`
