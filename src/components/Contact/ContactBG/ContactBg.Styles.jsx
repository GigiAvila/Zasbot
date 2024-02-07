import styled from 'styled-components'

export const ContactArticle = styled.article`
  width: 45vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2vw;
  border-radius: 8px;
  position: relative;
  background-color: ${({ theme }) => theme.currentTheme['--primary-300']};
  z-index: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  > h2 {
    font-size: 4vw;
    color: ${({ theme }) => theme.currentTheme['--text-400']};
    letter-spacing: 0.1vw;
  }
`

export const TopPart = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ContactPersonInfo = styled.div`
  display: flex;
  flex-direction: column;

  > h4 {
    font-size: 1.8vw;
    color: ${({ theme }) => theme.currentTheme['--text-400']};
    letter-spacing: 0.1vw;
  }
  > h5 {
    font-size: 1vw;
    color: ${({ theme }) => theme.currentTheme['--text-400']};
    letter-spacing: 0.1vw;
  }
`

export const ImgWrapper = styled.div`
  width: 10vw;
  height: auto;

  > img {
    width: 100%;
    height: auto;
    border-radius: 100%;
    filter: grayscale(1);
  }
`

export const CallToAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1vw;
  height: 100%;

  > button {
    width: 10vw;
    height: 6vh;
    padding: 1vw;
    background-color: ${({ theme }) => theme.currentTheme['--bg-100']};
    color: ${({ theme }) => theme.currentTheme['--text-100']};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #ffd700;
      color: black;
    }
  }
`

export const CopyIconWrapper = styled.div`
  width: 1.2vw;
  height: auto;
  position: absolute;
  top: 0px;

  > img {
    width: 100%;
    height: auto;
  }
`
