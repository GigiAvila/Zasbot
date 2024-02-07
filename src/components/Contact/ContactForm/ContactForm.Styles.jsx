import styled from 'styled-components'

export const FormWrapper = styled.article`
  width: 70vw;
  height: 70vh;
  display: flex;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.currentTheme['--bg-300']};
  border-radius: 8px;
  box-shadow: 1px 1px 50px 4px rgba(0, 0, 0, 0.82);
`

export const Form = styled.form`
  width: 35vw;
  padding: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.currentTheme['--bg-300']};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.5vw;
  color: ${({ theme }) => theme.currentTheme['--text-100']};

  > span {
    color: ${({ theme }) => theme.currentTheme['--accent-300']};
  }
`

export const Input = styled.input`
  margin-bottom: 1vw;
  padding: 0.5vw;
  border: none;
  border-radius: 4px;
  width: 30vw;
  background-color: ${({ theme }) => theme.currentTheme['--bg-100']};

  &::placeholder {
    color: ${({ theme }) => theme.currentTheme['--text-200']};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.currentTheme['--primary-100']};
  }
`

export const TextArea = styled.textarea`
  width: 30vw;
  height: 12vh;
  margin-bottom: 0.5vw;
  padding: 0.5vw;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.currentTheme['--bg-100']};

  &:focus {
    outline: 2px solid ${({ theme }) => theme.currentTheme['--primary-100']};
  }
`

export const PhoneDiv = styled.div`
  display: flex;
  flex-direction: column;
`

export const OptionalText = styled.span`
  font-size: 0.8em;
  color: ${({ theme }) => theme.currentTheme['--accent-100']};
  margin-left: 5px;
`

export const SubmitButton = styled.button`
  padding: 1vw;
  background-color: ${({ theme }) => theme.currentTheme['--accent-100']};
  color: ${({ theme }) => theme.currentTheme['--text-300']};
  border: none;

  cursor: pointer;
  transition: background-color 0.3s;
  align-self: flex-end;
  margin-right: 1vw;

  &:hover {
    background-color: #ffd700;
    color: black;
  }
`

export const ThundersBG = styled.div`
  width: 35vw;
  height: 70vh;
  overflow: hidden;
  position: relative;

  > img {
    width: 100%;
    height: 105%;
    border-radius: 8px;
    object-fit: cover;
  }
`

export const CustomCheckbox = styled.label`
  position: relative;
  display: flex;
  gap: 1vw;
  width: 30vw;
  height: auto;
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
  border: 2px solid ${({ theme }) => theme.currentTheme['--accent-400']};
  background-color: ${({ theme }) => theme.currentTheme['--bg-300']};
  transition: background-color 0.3s;

  ${HiddenCheckbox}:checked + & {
    background-color: ${({ theme }) => theme.currentTheme['--accent-400']};
  }

  &:after {
    content: '';
    width: 8px;
    height: 14px;
    border: solid ${({ theme }) => theme.currentTheme['--text-400']};
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
