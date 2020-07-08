import styled from "styled-components"
import { colors } from "../../../theme"

export const Wrapper = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  justify-content: space-between;
  -webkit-justify-content: space-between;
`
export const Label = styled.label`
  font-size: 1em;
`
export const InputsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  width: 100%;
  height: auto;
`
export const FirstInput = styled.div`
  width: 45%;
  height: 50px;
  position: relative;
`
export const SecondInput = styled(FirstInput)`
  width: 45%;
  height: 50px;
`
export const DropDown = styled.div`
  position: absolute;
  width: 100%;
  height: 5vh;
  background-color: #ccc;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  box-shadow: 0 1.1px 1.6px rgba(0, 0, 0, 0.015),
    0 2.6px 3.7px rgba(0, 0, 0, 0.022), 0 4.6px 6.6px rgba(0, 0, 0, 0.028),
    0 7.7px 10.9px rgba(0, 0, 0, 0.032), 0 12.7px 18px rgba(0, 0, 0, 0.038),
    0 22.2px 31.4px rgba(0, 0, 0, 0.045), 0 48px 68px rgba(0, 0, 0, 0.06);
  transform: ${props => (props.toggle ? "scale(1)" : "scale(0)")};
`
export const Input = styled.input`
  height: 100%;
  width: 100%;
  font-size: 1em;
  padding: 10px;
  border: none;
  background-color: #e0e0e0;
  border-radius: 10px;

  &:focus {
    outline: none;
  }
`
export const Item = styled.button`
  font-size: 1em;
  text-align: left;
  padding: 10px 20px 10px;
  border: none;
  background-color: #fff;
  cursor: pointer;
  position: relative;

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
