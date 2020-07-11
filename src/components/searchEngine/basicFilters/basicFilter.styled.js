import styled from "styled-components"
import { colors } from "../../../theme"
import { small } from "../../breakpoints"
import dollarW from "../../../static/icons/dollar-white.svg"

export const TypesWrapper = styled.section`
  height: 100%;
  width: ${props =>
    props.title === "Price" || props.title === "Cena" ? "15vw" : "10vw"};
  font-size: 1em;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  position: relative;
  z-index: 5;

  @media all and (max-width: ${small}) {
    width: 80%;
  }
`
export const Type = styled.div`
  height: 100%;
  color: #fff;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  font-size: 1.2em;
  border: none;
  background: none;
  cursor: pointer;

  :focus {
    outline: none;
  }

  svg {
    transform: rotate(${props => (props.toggleType ? "90deg" : 0)});
  }
`
export const Dropdown = styled.section`
  position: absolute;
  z-index: 5;
  width: 120%;
  height: max-content;
  background-color: #ffffff;
  left: 0;
  top: 100%;
  box-shadow: 0 1.1px 2.2px -9px rgba(0, 0, 0, 0.034),
    0 2.6px 5.3px -9px rgba(0, 0, 0, 0.048),
    0 4.9px 10px -9px rgba(0, 0, 0, 0.06),
    0 8.7px 17.9px -9px rgba(0, 0, 0, 0.072),
    0 16.3px 33.4px -9px rgba(0, 0, 0, 0.086),
    0 39px 80px -9px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-flow: column;
  padding: 1vw 0 1vw;
  transition: 0.3s ease-in-out;
  transform-origin: center 0;
  transform: scale(${props => (props.toggleState ? 1 : 0)});
  border-radius: 10px;
  overflow: hidden;
`
export const PriceFilter = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;
  position: relative;
`
export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;
  margin: 0 0 10px;
`
export const Title = styled.p`
  color: #fff;
  font-size: 0.7em;
`
export const Item = styled.button`
  padding: 10px 0 10px 20px;
  height: max-content;
  background: none;
  width: 100%;
  text-align: left;
  border-radius: 50px;
  font-size: 1em;
  margin: 0 10px 0 0;
  border: none;
  cursor: pointer;
  font-weight: 500;
  position: relative;
  transition: 0.3s ease-in-out;
  color: #000;

  &:hover {
    color: ${colors.pink};
  }
  &:before {
    content: "";
    display: block;
    height: 100%;
    width: 4px;
    background-color: ${colors.pink};
    position: absolute;
    left: 0;
    top: 0;
    visibility: hidden;
  }
  &:hover:before {
    visibility: visible;
  }
  &:focus {
    outline: none;
  }
`
export const Input = styled.input`
  height: 40px;
  font-size: 1em;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.15);
  color: #fff;
  width: 80%;

  &:focus {
    outline: none;
  }
`
export const MinInput = styled.input`
  width: 100%;
  height: 40px;
  font-size: 1em;
  padding: 10px 10px 10px 25px;
  border: none;
  border-radius: 10px;
  color: #fff;
  background: url(${dollarW}) no-repeat rgba(255, 255, 255, 0.15) 0 center;

  &:focus {
    outline: none;
  }
`
export const MaxInput = styled(MinInput)``
export const MinPriceContainer = styled.div`
  position: relative;
  width: 45%;
`
export const MaxPriceContainer = styled(MinPriceContainer)``
export const PriceDropdown = styled.ul`
  width: 100%;
  position: absolute;
  height: auto;
  background-color: #fff;
  top: 0;
  left: 0;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  justify-content: center;
  padding: 10px 0 10px;
  box-shadow: 0 0.1px 2.2px rgba(0, 0, 0, 0.025),
    0 0.3px 5.3px rgba(0, 0, 0, 0.036), 0 0.6px 10px rgba(0, 0, 0, 0.045),
    0 1.1px 17.9px rgba(0, 0, 0, 0.054), 0 2.1px 33.4px rgba(0, 0, 0, 0.065),
    0 5px 80px rgba(0, 0, 0, 0.09);
  transform: ${props => (props.toggle ? "scale(1)" : "scale(0)")};
`
export const PriceItem = styled.button`
  font-size: 1em;
  border: none;
  background: transparent;
  cursor: pointer;

  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${colors.pink};
    color: #fff;
  }
`
