import styled from 'styled-components'

export const HomeSection = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const HomeTextArticle = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2vw;
  padding: 2vw;

  > h1 {
    font-size: 4vw;
  }

  > h3 {
    font-size: 1.5vw;
  }
`

export const HomeImgArticle = styled.article`
  padding: 2vw;
  width: 70vw;
  height: auto;

  > img {
    width: 100%;
    height: auto;
  }
`

export const HomeForm = styled.form`
  display: flex;
  border-radius: 5px;
  border: 1px solid grey;
  padding: 0.3vw;
  width: 30vw;
`

export const HomeInput = styled.input`
  width: 18vw;
  height: 5vh;
  border-radius: 5px;
  border: none;
  outline: none;

  &::placeholder {
  }
`

export const HomeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3vw;
  background-color: #ffd700;
  height: 5vh;

  > p {
    font-size: 0.8vw;
    height: 100%;
    display: flex;
    align-items: center;
  }
`

export const HomeButtonImgWrapper = styled.div`
  width: 1.3vw;
  height: auto;
  display: flex;

  > img {
    width: 100%;
    height: auto;
    transform: rotate(240deg);
  }
`
