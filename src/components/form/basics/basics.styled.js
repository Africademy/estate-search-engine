import styled from "styled-components"
import { Images } from "../addForm/addForm.styled"
import { large, medium, small } from "../../breakpoints"
import { colors } from "../../../theme"

export const BasicsWrapper = styled(Images)``
export const Header = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;
  height: auto;
`
export const ClearBtn = styled.button`
  font-size: 0.9em;
  padding: 5px 10px 5px;
  border: none;
  background-color: ${props =>
    props.switch === "Clear all" ? "#ff0043" : colors.accept};
  color: #fff;
  border-radius: 50px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`
export const SubTitle = styled.h3`
  font-size: 2em;
  display: inherit;
  align-self: flex-start;
`
export const Inputs = styled.section`
  margin: 50px 0 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 2vw;

  @media all and (max-width: ${small}) {
    display: flex;
    flex-flow: column;
    -webkit-flex-flow: column;
    margin: 20px 0 0;
  }
`
export const InputWrapper = styled.div`
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  width: 20vw;
  margin: 0 0 20px;

  @media all and (max-width: ${small}) {
    width: 100%;
  }
  @media all and (min-width: ${small}) and (max-width: ${medium}) {
    width: 40vw;
  }
  @media all and (min-width: ${medium}) and (max-width: ${large}) {
    width: 30vw;
  }
`
export const Label = styled.label`
  margin: 0 0 10px;
`
export const Input = styled.input`
  padding: 10px;
  font-size: 1.1em;
  border: none;
  background-color: #f1f1f1;
  border-radius: 10px;

  &:focus {
    outline: #000;
  }
  @media all and (max-width: ${small}) {
    height: 60px;
  }
`
export const ReadOnlyInput = styled(Input)``
export const DropdownInput = styled(InputWrapper)`
  position: relative;
`
export const Dropdown = styled.ul`
  position: absolute;
  z-index: 2;
  top: 100%;
  width: 100%;
  height: auto;
  background-color: #ffffff;
  display: ${props => (props.toggle ? "flex" : "none")};
  flex-flow: column;
  -webkit-flex-flow: column;
  box-shadow: 0 0.9px 2.2px -7px rgba(0, 0, 0, 0.02),
    0 2.2px 5.3px -7px rgba(0, 0, 0, 0.028),
    0 4.1px 10px -7px rgba(0, 0, 0, 0.035),
    0 7.4px 17.9px -7px rgba(0, 0, 0, 0.042),
    0 13.8px 33.4px -7px rgba(0, 0, 0, 0.05),
    0 33px 80px -7px rgba(0, 0, 0, 0.07);
`
export const ErrorMessage = styled.p`
  color: #ff0043;
`
export const Item = styled.button`
  border: none;
  background: none;
  font-size: 1em;
  padding: 15px;
  text-align: left;
  cursor: pointer;
  position: relative;
  transition: 0.3s ease-in-out;

  &:focus {
    outline: none;
  }
  &:hover {
    transform: translateX(10px);
    transition: 0.3s ease-in-out;
    color: ${colors.pink};
  }
  &:before {
    content: "";
    display: block;
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 3px;
    background-color: ${colors.pink};
  }
  &:hover:before {
    opacity: 1;
    transform: translateX(-10px);
    transition: 0.3s ease-in-out;
  }
`
