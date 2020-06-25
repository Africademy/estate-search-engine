import styled from "styled-components"
import { colors } from "../../../theme"
import { small } from "../../breakpoints"

export const TypesWrapper = styled.section`
  height: 60%;
  width: 10vw;
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
`
export const PriceDropdown = styled(Dropdown)`
  width: 200%;
`
export const PriceFilter = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  position: relative;
  padding: 0 10px 0;
  align-items: flex-end;
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
export const ApplyBtn = styled.button`
  width: max-content;
  padding: 10px 20px 10px;
  bottom: 0;
  right: 10px;
  cursor: pointer;
  border-radius: 50px;
  background-color: ${colors.pink};
  color: #fff;
  border: none;

  :focus {
    outline: none;
  }
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

  :hover {
    color: ${colors.pink};
  }
  :before {
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
  :hover:before {
    visibility: visible;
  }
  :focus {
    outline: none;
  }
`
export const Separator = styled.span`
  display: block;
  width: 20px;
  height: 2px;
  background-color: #000;
  margin: 0 10px 0;
`
