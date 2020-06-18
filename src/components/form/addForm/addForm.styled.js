import styled from "styled-components"
import { colors } from "../../../theme"
import arrowDown from "../../../static/icons/nav-arrow-down.svg"
import check from "../../../static/icons/check.svg"

export const FormWrapper = styled.form`
  width: 50vw;
  height: auto;
`
export const Images = styled.section`
  width: 100%;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  align-items: center;
  -webkit-align-items: center;
  margin: 50px 0 0;
`
export const Imgs = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`
export const ImageContainer = styled.div`
  width: 100%;
  height: 20vh;
  background-color: #000;
  overflow: hidden;
`
export const Img = styled.img``
export const Basics = styled(Images)``
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
`
export const InputWrapper = styled.div`
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  width: 20vw;
  margin: 0 0 20px;
`
export const Label = styled.label`
  margin: 0 0 10px;
`
export const Dropdown = styled.ul`
  position: absolute;
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
export const Input = styled.input`
  padding: 10px;
  font-size: 1.1em;
  border: none;
  background-color: #f1f1f1;
  border-radius: 10px;

  &:focus {
    outline: #000;
  }
`
export const ReadOnlyInput = styled(Input)``
export const DropdownInput = styled(InputWrapper)`
  position: relative;
`
export const Prices = styled(Basics)`
  flex-flow: column;
  -webkit-flex-flow: column;
  padding: 0 0 5vw;
`
export const CheckboxWrapper = styled.section`
  display: flex;
`
export const Wrapper = styled.section`
  width: 100%;
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
`
export const RentWrapper = styled(Wrapper)`
  background-color: ${props =>
    props.rent ? "rgba(67, 97, 238, 0.5)" : "rgba(67, 97, 238, 0.2)"};
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
export const PriceInputWrapper = styled(InputWrapper)`
  flex-flow: row;
  -webkit-flex-flow: row;
  align-items: center;
  -webkit-align-items: center;
`
export const PriceInput = styled(Input)`
  width: 100px;
`
export const PriceLabel = styled(Label)`
  margin: 0 0 0 10px;
`
export const Settings = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: space-between;
  -webkit-justify-content: space-between;
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
