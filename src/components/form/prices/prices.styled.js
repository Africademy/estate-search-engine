import styled from "styled-components"
import { small } from "../../breakpoints"
import { BasicsWrapper } from "../basics/basics.styled"
import { colors } from "../../../theme"
import check from "../../../static/icons/check.svg"

export const PricesWrapper = styled(BasicsWrapper)`
  flex-flow: column;
  -webkit-flex-flow: column;
  padding: 0 0 5vw;
`
export const Settings = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: space-between;
  -webkit-justify-content: space-between;
`
export const Select = styled.div`
  width: max-content;
  height: max-content;
  padding: 20px 40px 20px;
  border-radius: 50px;
  background-color: rgb(255, 255, 255);
  font-weight: 600;
  display: flex;
  align-items: center;

  @media all and (max-width: ${small}) {
    padding: 15px 30px 15px;
  }
`
export const Checkbox = styled.input`
  margin: 0 10px 0 0;
  position: relative;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;

  &:before {
    content: "";
    display: block;
    height: 20px;
    width: 20px;
    border-radius: 50px;
    ${props => {
      if (props.status) {
        return `
          background: ${colors.accept} url(${check}) no-repeat center center;
    background-size: 18px;
        `
      } else {
        return `
          background-color: #fff;
        `
      }
    }};

    position: absolute;
    top: -10px;
    left: -20px;
  }
  &:focus {
    outline: none;
  }
`
export const ChooseWrapper = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  margin: 1vw 0 0;

  @media all and (max-width: ${small}) {
    overflow-x: scroll;
    width: 100%;
  }
`
export const Choose = styled.button`
  padding: 15px 30px 15px;
  border-radius: 50px;
  border: none;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  margin: 0 15px 0 0;
  font-size: 1em;
  width: auto;
  @media all and (max-width: ${small}) {
    width: max-content;
  }
`
