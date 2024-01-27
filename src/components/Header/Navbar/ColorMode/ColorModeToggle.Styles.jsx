import styled from 'styled-components'

export const ColorModeContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`

export const Label = styled.label`
  background-color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  cursor: pointer;
  box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.1);
  line-height: 1;
`

export const MoonIcon = styled.div`
  grid-column: 1 / 1;
  grid-row: 1 / 1;
  transition: transform 500ms;
  transition-delay: 200ms;
`

export const SunIcon = styled.div`
  grid-column: 1 / 1;
  grid-row: 1 / 1;
  transition: transform 500ms;
  transform: scale(0);
`

export const Input = styled.input`
  display: none;

  &:checked + ${MoonIcon} {
    transform: rotate(360deg) scale(0);
  }

  &:checked ~ ${SunIcon} {
    transition-delay: 200ms;
    transform: scale(1) rotate(360deg);
  }
`
