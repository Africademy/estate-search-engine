import styled from "styled-components"
import { colors } from "../../../theme"
import { medium, small } from "../../breakpoints"

export const PriceWrapper = styled.div`
  width: 30vw;
  height: max-content;
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
  @media all and (min-width: ${small}) and (max-width: ${medium}) {
    width: 100%;
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

  @media all and (min-width: ${small}) and (max-width: ${medium}) {
    font-size: 1.2em;
  }
`
export const Label = styled.label`
  font-size: 1.2em;
`
