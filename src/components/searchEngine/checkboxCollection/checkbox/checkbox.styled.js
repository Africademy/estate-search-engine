import styled from "styled-components"
import { colors } from "../../../../theme"
import checkIcon from "../../../../static/icons/check.svg"

export const Wrapper = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
`
export const Input = styled.input`
  width: 30px;
  height: 30px;
  margin: 0 10px 0 0;
  position: relative;
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -13px 0 0 -13px;
    display: block;
    width: 26px;
    height: 26px;
    border-radius: 10px;
    ${props => {
      if (props.checked) {
        return `
        background: url(${checkIcon}) no-repeat ${colors.pink} center center;
        background-size: 18px;
        border: none;
      `
      } else {
        return `
          background-color: transparent;
          border: 2px solid #ccc;
        `
      }
    }}
  }

  &:focus {
    outline: none;
  }
`

export const Label = styled.label``
