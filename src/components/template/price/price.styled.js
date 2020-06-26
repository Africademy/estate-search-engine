import styled from "styled-components"
import { colors } from "../../../theme"
import { small } from "../../breakpoints"

export const PriceWrapper = styled.div`
  width: 30vw;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;
  padding: 20px;
  border: 1px solid ${colors.pink};
  border-radius: 15px;
  margin: 0 0 25px;

  @media all and (max-width: ${small}) {
    width: 100%;
    flex-flow: column;
    -webkit-flex-flow: column;
  }
`
export const DropdownContainer = styled.div`
  height: auto;
  width: 45%;
  position: relative;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: space-between;
`
export const SwitchPrices = styled.input`
  cursor: pointer;
  width: 60px;
  height: 30px;
  -webkit-appearance: none;
  -moz-appearance: none;
  position: relative;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 60px;
    height: 30px;
    background-color: #ccc;
    border-radius: 50px;
    padding: 10px;
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    height: 20px;
    width: 20px;
    top: 50%;
    left: 5px;
    margin: -10px 0 0;
    border-radius: 50%;
    background-color: ${colors.pink};
  }
  &:focus {
    outline: none;
  }
  &:checked:after {
    left: 60%;
  }
`
export const Item = styled.button`
  font-size: 1em;
  padding: 15px 30px 15px;
  border: none;
  text-align: left;
  cursor: pointer;
  position: relative;

  &:before {
    content: "";
    display: block;
    height: 100%;
    width: 3px;
    background-color: ${colors.pink};
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
  }
  &:hover {
    color: ${colors.pink};
  }
  &:hover:before {
    visibility: visible;
  }
  &:focus {
    outline: none;
  }
`
export const PriceValue = styled.h3`
  font-size: 1.5em;
  font-weight: 500;
`
export const Label = styled.label`
  font-size: 1.2em;
`
