import styled from 'styled-components'

export const ErrorSection = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.currentTheme['--bg-100']};
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ErrorArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
  height: 100%;


  
  @media (max-width: 768px) {
    align-items: center;
    width: 100%;
    height: 60%;
    position: absolute;
  }

  > img {
    width: auto;
    height: 70%;

    @media (max-width: 768px) {
     width: 100%;
     height: auto;
     position: absolute;
     left: -10vw;

    }
   
  }

  > h2 {
    font-size: 5rem;
    font-weight: bold;
    color: ${({ theme }) => theme.currentTheme['--text-100']};


    @media (max-width: 768px) {
      font-size: 3rem;
      position: absolute;
      right: 10px;
      top: 40vh;
      

    }
  }

  > p {
    font-size: 4rem;
    font-weight: 300;
    color: ${({ theme }) => theme.currentTheme['--text-100']};
    
    @media (max-width: 768px) {
      font-size: 2rem;
      position: absolute;
      right: 10px;
      top: 48vh;

    }
  }
  }
`
