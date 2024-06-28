import styled from 'styled-components'

export const BrochureSection = styled.section`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const DownloadClipPath = styled.div`
  background: ${({ theme }) =>
    theme.currentTheme['--mode'] === 'dark'
      ? 'linear-gradient(180deg, rgba(3, 21, 33, 0) 0%, rgba(23, 41, 53, 1)  75%)'
      : 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ededed 75%)'};
  clip-path: ellipse(105% 100% at center top);
  height: auto;
  min-height: 370px;
  position: absolute;
  width: 100%;
  z-index: 1;

  @media (max-width: 768px) {
    clip-path: ellipse(150% 100% at center top);
  }
`

export const DownloadWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 3rem;
  z-index: 2;
  gap: 1vw;

  > p {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.currentTheme['--text-100']};

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5vh;
  }
`

export const BrochureButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3vw;
    background-color: ${({ theme }) => theme.currentTheme['--primary-200']};
    width: 15vw;
    height: 5vh;
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-weight: 500;
    cursor: pointer;
    outline: none;
    border: none;
    transition: font-weight 0.3s ease;

    &:hover {
    font-weight: 800;
    border-radius: 10px;
    border: none;

   
    }



    > a {
      color: ${({ theme }) => theme.currentTheme['--text-100']};
      text-decoration: none;
      font-size: 0.9rem;
    }

    @media (max-width: 768px) {
      width: 80vw;
      height: 6vh;
      gap: 1vw;
      padding: 0.6em;
    }
  }
`
