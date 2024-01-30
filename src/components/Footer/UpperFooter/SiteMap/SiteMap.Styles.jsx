import styled from 'styled-components'

export const SiteMapSection = styled.article`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 5vw;
  width: auto;
  padding-right: 2vw;

  @media (max-width: 768px) {
    width: 100vw;
    align-items: flex-start;
    flex-direction: column;
    gap: 2vw;
  }
`

export const SiteMapContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding-right: 2vw;
  gap: 1vw;

  @media (max-width: 768px) {
    border-bottom: 1px solid #f2f2f2;
    gap: 0;
  }
`

export const SiteSection = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  line-height: 2.5;
  font-weight: bold;
  font-size: 0.8vw;
  text-transform: uppercase;
  color: ${({ theme }) => theme.currentTheme['--text-100']};

  @media (max-width: 768px) {
    font-size: 4vw;
    text-transform: none;
    width: 80vw;
    padding: 1vw;
    font-weight: 300;
    cursor: pointer;
  }
`

export const SitePage = styled.li`
  list-style-type: none;
  font-weight: 200;
  font-size: 0.8vw;
  display: block;
  color: ${({ theme }) => theme.currentTheme['--text-100']};

  @media (max-width: 768px) {
    font-size: 4vw;
    color: grey;
    padding: 2vw;
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
  }
`
