import styled from "styled-components"
import { colors } from "../../../theme"
import check from "../../../static/icons/check.svg"

export const Wrapper = styled.div`
  width: max-content;
  height: auto;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
`
export const Title = styled.h3`
  font-size: 1.2em;
`
export const Advantage = styled.button`
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  width: 100%;
  margin: 0 0 5px;
  border: none;
  background: none;

  &:focus {
    outline: none;
  }
`
export const Checkbox = styled.input`
  margin: 0 5px 0 0;
  height: 18px;
  width: 18px;
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;
  position: relative;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    border: 2px solid #ccc;
  }
  &:checked:before {
    background: url(${check}) no-repeat ${colors.pink} center center;
    background-size: 15px;
    border: none;
  }

  &:focus {
    outline: none;
  }
`
export const Label = styled.label`
  font-size: 1.1em;
`

/*
${props => {
      if (props.toggle) {
        return `
          background: url(${check}) no-repeat ${colors.pink} center center;
          background-size: 15px;
          border: none;
        `
      } else {
        return `
          background-color: #fff;
          border: 2px solid #ccc;
        `
      }
    }}
 */
