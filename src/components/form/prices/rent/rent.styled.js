import styled from "styled-components"
import { colors } from "../../../../theme"
import { small } from "../../../breakpoints"
import arrowDown from "../../../../static/icons/nav-arrow-down.svg"

export const RentWrapper = styled.section`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;
  border-radius: 15px;
  padding: 1vw;
  background-color: ${colors.pinkHalf};
  margin: 1vw 0 0;

  @media all and (max-width: ${small}) {
    flex-flow: column;
    -webkit-flex-flow: column;
    height: auto;
    padding: 2vw;
    margin: 5vw 0 0;
  }
`
export const Currency = styled.div`
  position: relative;
  @media all and (max-width: ${small}) {
    width: 100%;
  }
`
export const CurrencyInput = styled.input`
  height: 50px;
  width: 70%;
  font-size: 1em;
  padding: 10px;
  border: none;
  border-radius: ${props => (props.toggle ? "10px 10px 0 0" : "10px")};
  background: #fff url(${arrowDown}) no-repeat 95% center;
  cursor: pointer;

  &:focus {
    outline: none;
  }
  @media all and (max-width: ${small}) {
    width: 100%;
  }
`
export const CurrencyDropdown = styled.ul`
  width: 70%;
  position: absolute;
  top: 100%;
  left: 0;
  height: auto;
  background-color: #fff;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  transform-origin: 65% 0;
  transform: scale(${props => (props.toggle ? 1 : 0)});
  transition: 0.3s ease-in-out;
  box-shadow: 0 1.9px 2.2px -10px rgba(0, 0, 0, 0.017),
    0 4.5px 5.3px -10px rgba(0, 0, 0, 0.024),
    0 8.4px 10px -10px rgba(0, 0, 0, 0.03),
    0 15px 17.9px -10px rgba(0, 0, 0, 0.036),
    0 28px 33.4px -10px rgba(0, 0, 0, 0.043),
    0 67px 80px -10px rgba(0, 0, 0, 0.06);

  @media all and (max-width: ${small}) {
    width: 100%;
    transform-origin: 90% 0;
  }
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
export const PriceProvider = styled.div`
  position: relative;
  width: 30vw;

  @media all and (max-width: ${small}) {
    width: 100%;
    margin: 0 0 2vw;
  }
`
export const PriceInput = styled.input`
  font-size: 1em;
  height: 50px;
  width: ${props => (props.rent ? "15vw" : "20vw")};
  border: none;
  padding: 10px;
  border-radius: 10px;
  transition: 0.3s ease-in-out;

  &:focus {
    outline: none;
  }
  @media all and (max-width: ${small}) {
    width: ${props => (props.rent ? "60%" : "100%")};
  }
`
export const Label = styled.label`
  font-size: 1em;
  font-weight: 600;
  margin: 0 0 0 10px;
`
