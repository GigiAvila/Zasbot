import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const FormWrapper = styled.article`
  width: 70vw;
  height: 70vh;
  display: flex;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.currentTheme['--bg-200']};
  border-radius: 8px;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
  margin-bottom: 5vw;

  @media (max-width: 768px) {
    width: 90vw;
    height: auto;
  }
`

export const Form = styled.form`
  width: 35vw;
  padding: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 90vw;
  }
`

export const Label = styled.label`
  font-weight: bold;
  font-size: 0.9em;
  margin-bottom: 0.5vw;
  color: ${({ theme }) => theme.currentTheme['--text-100']};

  @media (max-width: 768px) {
    font-size: 4vw;
    font-weight: 500;
    padding: 2vw 0.5vw;
  }
`

export const PrivatePolicyAnchor = styled.a`
  text-decoration: none;

  > span {
    color: ${({ theme }) => theme.currentTheme['--primary-200']};

    &:hover {
      text-decoration: none;
      color: ${({ theme }) => theme.currentTheme['--accent-300']};
    }
  }

  @media (max-width: 768px) {
    font-size: 4vw;
    font-weight: 500;
  }
`

export const Input = styled.input`
  margin-bottom: 1vw;
  padding: 0.5vw;
  border: none;
  border-radius: 4px;
  width: 30vw;
  background-color: ${({ theme }) => theme.currentTheme['--bg-100']};
  color: ${({ theme }) => theme.currentTheme['--text-200']};

  &::placeholder {
    color: ${({ theme }) => theme.currentTheme['--text-200']};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.currentTheme['--primary-100']};
  }

  @media (max-width: 768px) {
    width: 85vw;
    padding: 3vw 0.5vw;
  }
`

export const TextArea = styled.textarea`
  width: 30vw;
  min-height: 10vh;
  max-height: 30vh;
  margin-bottom: 0.5vw;
  padding: 0.5vw;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.currentTheme['--bg-100']};
  color: ${({ theme }) => theme.currentTheme['--text-200']};
  resize: none;
  form-sizing: content;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.currentTheme['--primary-100']};
  }

  @media (max-width: 768px) {
    width: 85vw;
    height: 20vh;
  }
`

export const PhoneDiv = styled.div`
  display: flex;
  flex-direction: column;
`

export const OptionalText = styled.span`
  font-size: 0.7em;
  color: ${({ theme }) => theme.currentTheme['--primary-200']};
  margin-left: 5px;
`

export const SubmitButton = styled.button`
  padding: 0.5vw 1vw;
  border: none;
  font-size: 0.8em;
  font-weight: 400;
  cursor: pointer;
  transition: background-color 0.3s;
  align-self: flex-end;
  margin-right: 1vw;
  width: 5vw;
  background-color: ${({ theme }) => theme.currentTheme['--primary-200']};
  color: ${({ theme }) => theme.currentTheme['--bg-100']};

  &:hover {
    background-color: ${({ theme }) => theme.currentTheme['--accent-300']};
    border-radius: 10px;
    color: ${({ theme }) => theme.currentTheme['--bg-100']};
    border: none;
  }

  @media (max-width: 768px) {
    padding: 3vw;
    width: 20vw;
  }
`

export const ContactImage = styled.div`
  width: 30vw;
  height: 70vh;
  overflow: hidden;
  position: relative;

  > img {
    width: 100%;
    height: 120%;
    border-radius: 8px;
    object-fit: cover;
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.9));
    animation: ${fadeIn} 0.6s ease-in-out;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const ErrorSpan = styled.span`
  color: red;
  font-size: 0.7vw;
`

export const CustomCheckbox = styled.label`
  position: relative;
  display: flex;
  gap: 1vw;
  width: 30vw;
  height: auto;

  @media (max-width: 768px) {
    width: 85vw;
    justify-content: center;
    align-items: center;
  }
`

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  cursor: pointer;
  display: none;
`

export const StyledCheckbox = styled.div`
  width: 25px;
  height: 25px;
  position: relative;
  border: 2px solid ${({ theme }) => theme.currentTheme['--primary-200']};
  background-color: ${({ theme }) => theme.currentTheme['--bg-200']};
  transition: background-color 0.3s;

  ${HiddenCheckbox}:checked + & {
    background-color: ${({ theme }) => theme.currentTheme['--primary-200']};
  }

  &:after {
    content: '';
    width: 8px;
    height: 14px;
    border: solid ${({ theme }) => theme.currentTheme['--bg-200']};
    border-width: 0 3px 3px 0;
    transform: rotate(35deg);
    position: absolute;
    left: 20%;
    top: 0%;
    opacity: 0;
    transition: opacity 0.3s;
  }

  ${HiddenCheckbox}:checked + &:after {
    opacity: 1;
  }
`
