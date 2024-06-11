import styled from 'styled-components'

export const AssistantContainer = styled.section`
  position: fixed;

  bottom: 7vw;
  right: 2vw;
  background-color: ${({ theme }) => theme.currentTheme['--bg-100']};
  border: 1px solid ${({ theme }) => theme.currentTheme['--bg-100']};
  padding: 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  z-index: 2;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  display: ${({ toggleAssistant }) => (toggleAssistant ? 'block' : 'none')};

  @media (max-width: 768px) {
    bottom: 10vh;
    width: 75vw;

`

export const AssistantTitleArticle = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  > h5 {
    line-height: 2.5;
    font-weight: bold;
    font-size: 1vw;
    border-bottom: 1px solid
      ${({ theme }) => theme.currentTheme['--primary-100']};
    color: ${({ theme }) => theme.currentTheme['--text-100']};

    @media (max-width: 768px) {
      font-size: 4vw;
    }
  }
`

export const VirtualAssistantContent = styled.article`
  display: flex;
  gap: 0.5vw;

  @media (max-width: 768px) {
    gap: 1vw;
  }
`
export const AssistantImageContainer = styled.div`
  width: 6vw;

  > img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 25vw;
  
  > img {
    width: 25vw;
    height: auto;
    border-radius: 50%;
  }
`

export const VirtualAssistantText = styled.textarea`
  font-weight: 200;
  padding: 1vw 0.3vw;
  line-height: 2;
  font-size: 0.9vw;
  color: ${({ theme }) => theme.currentTheme['--primary-200']};
  background-color: ${({ theme }) => theme.currentTheme['--bg-300']};
  border-color: ${({ theme }) => theme.currentTheme['--bg-300']};

  @media (max-width: 768px) {
    font-size: 3vw;
  }
`

export const VirtualAssistantButton = styled.button`
  font-size: 0.8vw;
  padding: 0.5vw 0.5vw;
  margin: 0.2vw;
  width: 4vw;
  height: 5vh;
  text-align: center;
  align-self: flex-end;
  background-color: ${({ theme }) => theme.currentTheme['--primary-200']};
  color: ${({ theme }) => theme.currentTheme['--bg-100']};

  &:hover {
    background-color: ${({ theme }) => theme.currentTheme['--accent-300']};
    border-radius: 10px;
    color: ${({ theme }) => theme.currentTheme['--bg-100']};
    border: none;
  }

  @media (max-width: 768px) {
    font-size: 3vw;
    width: 15vw;
    padding: 1vw 2vw;
    margin: 0 2vw;
  }
`
