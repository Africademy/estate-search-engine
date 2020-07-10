import styled from "styled-components"
import { colors } from "../../theme"

export const SortingWrapper = styled.section`
  width: 100%;
  height: auto;
  min-height: 5vh;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  padding: 10px 5vw 10px;
`
export const SortContainer = styled.div`
  width: max-content;
  height: max-content;
  position: relative;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
`
export const InputContainer = styled.div`
  position: relative;
`
export const SortDropdown = styled.div`
  position: absolute;
  z-index: 5;
  width: 90%;
  height: auto;
  top: -20%;
  left: 50%;
  margin: 0 0 0 -45%;
  background-color: #ffffff;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  transition: 0.3s ease-in-out;
  transform-origin: center 20%;
  transform: ${props => (props.toggle ? "scale(1)" : "scale(0)")};
  border-radius: 10px;
  overflow: hidden;
  padding: 10px 0 10px;
  box-shadow: 0 0.7px 2.2px -6px rgba(0, 0, 0, 0.02),
    0 1.8px 5.3px -6px rgba(0, 0, 0, 0.028),
    0 3.4px 10px -6px rgba(0, 0, 0, 0.035),
    0 6px 17.9px -6px rgba(0, 0, 0, 0.042),
    0 11.3px 33.4px -6px rgba(0, 0, 0, 0.05),
    0 27px 80px -6px rgba(0, 0, 0, 0.07);
`
export const SortInput = styled.input`
  height: 40px;
  font-size: 1em;
  padding: 10px;
  border: 1px solid #9b9b9b;
  border-radius: 10px;

  &:focus {
    outline: none;
  }
`
export const Label = styled.label`
  font-size: 1em;
  margin: 0 10px 0 0;
`
export const Item = styled.button`
  border: none;
  padding: 10px 20px 10px;
  font-size: 1em;
  text-align: left;
  width: 100%;
  cursor: pointer;
  background: transparent;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: ${colors.pink};
    color: #fff;
    transition: 0.3s ease-in-out;
  }
  &:focus {
    outline: none;
  }
`
