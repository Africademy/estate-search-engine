import styled from "styled-components"
import dollar from "../../../static/icons/dollar.svg"

export const Wrapper = styled.div`
  width: 100%;
  height: 10vh;
`
export const Label = styled.p`
  font-size: 0.9em;
  margin: 0 0 5px;
`
export const InputsWrapper = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  justify-content: space-between;
  position: relative;
`
export const InputWrapper = styled.div`
  width: 45%;
  height: 40px;
`
export const Dropdown = styled.ul`
  position: absolute;
  z-index: 2;
  top: 100%;
  height: auto;
  width: max-content;
  min-width: 45%;
  background-color: #e7e7e7;
  transition: 0.3s ease-in-out;
  transform: ${props => (props.toggle ? "scale(1)" : "scale(0)")};
  transform-origin: 50% 0;
  padding: 2px 0 2px;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
`
export const DropdownMax = styled(Dropdown)``
export const MinInput = styled.input`
  height: 100%;
  width: 100%;
  border: 1px solid #a0a0a0;
  border-radius: 5px;
  
  ${props => {
    if (props.icon) {
      return `
        background-image: url(${dollar});
        background-size: 18px;
        background-repeat: no-repeat;
        background-position: 3px center;
        padding: 10px 10px 10px 25px;
      `
    } else {
      return `
        padding: 10px;
      `
    }
  }}

  &:focus ~ ${Dropdown} {
    transform: scale(1);
  }
`
export const MaxInput = styled(MinInput)``

export const Item = styled.button`
  list-style-type: none;
  line-height: 1.5em;
  padding: 0 0 0 5px;
  font-size: 1em;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
  }
`
