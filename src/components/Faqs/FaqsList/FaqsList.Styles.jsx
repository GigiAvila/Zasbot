import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scaleY(0);
  }
  to {
    opacity: 1;
    transform: scaleY(1);
  }
`

const moveUp = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
`

const moveDown = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }
`

export const FaqList = styled.ul`
  width: 60vw;

  @media (max-width: 768px) {
    width: 95vw;
  }
`

export const NavNumber = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  height: 3vh;
  width: 2vw;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 768px) {
    height: 3vh;
    width: 5vw;
  }
`

export const Title = styled.h3`
  font-size: 1.5vw;
  font-weight: 300;
  position: relative;
  color: ${({ theme }) => theme.currentTheme['--text-100']};
  width: 85%;

  @media (max-width: 768px) {
    font-size: 4vw;
  }
`

export const NavElementTitle = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1vw;
  position: relative;
  cursor: pointer;
`

export const NavElement = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1vw;
  padding: 1.5vw;
  border-bottom: 1px solid ${({ theme }) => theme.currentTheme['--primary-100']};
  position: relative;
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid
      ${({ theme }) => theme.currentTheme['--primary-100']};

    ${Title} {
      transition: font-weight 0.6s ease-in-out;
      font-weight: bold;
    }

    ${NavNumber} {
      > :first-child {
        animation: ${moveUp} 0.5s linear;
      }

      > :last-child {
        animation: ${moveDown} 0.5s linear;
        justify-content: flex-end;
      }
    }
  }

  &:hover:before {
    width: 100%;
  }

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.currentTheme['--primary-100']};
    transition: width 0.6s ease;
  }
`

export const SpanWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  > span {
    font-size: 1.2vw;
    flex: 1;
    width: 100%;
    height: 100%;
    text-align: center;
    color: ${({ theme }) => theme.currentTheme['--primary-100']};
  

    @media (max-width: 768px) {
      font-size: 3vw;
      padding-bottom: 1vw;
    }

    &:first-child {
      animation: ${moveUp} 0.5s linear;
    }

    &:last-child {
      animation: ${moveDown} 0.5s linear;
    }
  }
};
`
export const SpanWrapperInfoNumber = styled.div`
  position: absolute;
  top: 0;
  right: 0px;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > span {
    font-size: 1.2vw;
    width: 100%;
    height: 100%;
    text-align: center;
    color: ${({ theme }) => theme.currentTheme['--primary-100']};
    align-self: flex-start; 

    @media (max-width: 768px) {
      font-size: 3vw;
      padding-bottom: 1vw;
    }

    &:first-child {
      animation: ${moveDown} 0.5s linear;
    }

    &:last-child {
      animation: ${moveUp} 0.5s linear;
      align-self: flex-start; 
    }
  }
};
`

export const AccordionIcon = styled.div`
  position: absolute;
  width: 1.5vw;
  height: auto;
  right: 0;
  display: flex;
  filter: invert(100%);

  > img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 3.5vw;
  }
`

export const AccordionInformation = styled.div`
  padding: 1vw;
  animation: ${fadeIn} 0.5s ease-in-out;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transform-origin: top;
  transform: scaleY(${(props) => (props.isOpen ? 1 : 0)});
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;

  > p {
    font-size: 1vw;
    padding: 0.5vw;
    font-weight: 300;
    color: ${({ theme }) => theme.currentTheme['--text-100']};

    @media (max-width: 768px) {
      font-size: 3vw;
      padding: 1vw;
    }
  }
`
