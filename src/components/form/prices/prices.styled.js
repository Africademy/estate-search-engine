import styled from "styled-components"
import { small } from "../../breakpoints"
import {
  BasicsWrapper,
  InputWrapper,
  Input,
  Label,
} from "../basics/basics.styled"
import { colors } from "../../../theme"
import check from "../../../static/icons/check.svg"
import arrowDown from "../../../static/icons/nav-arrow-down.svg"

export const PricesWrapper = styled(BasicsWrapper)`
  flex-flow: column;
  -webkit-flex-flow: column;
  padding: 0 0 5vw;
`
export const CheckboxWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  margin: 2vw 0 0;

  @media all and (max-width: ${small}) {
    flex-flow: column;
    -webkit-flex-flow: column;
    width: 100%;
    margin: 10vw 0 0;
  }
`
export const Wrapper = styled.section`
  width: 45%;
  height: auto;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  background-color: ${props =>
    props.sell ? "rgba(67, 97, 238, 0.5)" : "rgba(67, 97, 238, 0.2)"};
  padding: 20px;
  border-radius: 20px;

  @media all and (max-width: ${small}) {
    margin: 2vw 0 0;
  }
`
export const RentWrapper = styled(Wrapper)`
  background-color: ${props =>
    props.rent ? "rgba(67, 97, 238, 0.5)" : "rgba(67, 97, 238, 0.2)"};
`
export const Settings = styled.div`
  width: 100%;
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
    background-color: #fff;
    position: absolute;
    top: -10px;
    left: -20px;
  }
  &:checked:before {
    background: ${colors.accept} url(${check}) no-repeat center center;
    background-size: 18px;
  }
`
export const PriceInput = styled(Input)`
  width: 100px;

  @media all and (max-width: ${small}) {
    height: 50px;
    width: 50%;
  }
`
export const PriceLabel = styled(Label)`
  margin: 0 0 0 10px;
`
export const Currency = styled.div`
  position: relative;
`
export const CurInput = styled.input`
  height: 40px;
  border-radius: 10px;
  border: none;
  width: 120px;
  background: #fff url(${arrowDown}) no-repeat 95% 50%;
  cursor: pointer;
  padding: 10px;
  font-size: 1em;

  &:focus {
    outline: none;
  }
`
export const CurDropdown = styled.ul`
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  height: auto;
  background-color: #fff;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  transform-origin: 95% 0;
  transform: scale(${props => (props.toggle ? 1 : 0)});
  transition: 0.3s ease-in-out;
`
export const PriceInputWrapper = styled(InputWrapper)`
  flex-flow: row;
  -webkit-flex-flow: row;
  align-items: center;
  -webkit-align-items: center;
`
export const ChooseWrapper = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  margin: 1vw 0 0;
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
`
