import styled from "styled-components"
import { colors } from "../../theme"
import { small } from "../breakpoints"
import search from "../../static/icons/search.svg"

//TODO better rwd

export const SearchWrapper = styled.main`
  width: 100vw;
  height: 70vh;
  display: flex;
  flex-flow: column;
  align-items: center;
  background-color: ${colors.blue};
  padding: 5vw 0 5vw;
  position: relative;
  z-index: 10;
`
export const HeroText = styled.h1`
  font-size: 4.5em;
  width: 40vw;
  color: #fff;
  left: 10vw;
  top: 35%;
`
export const SearchBar = styled.section`
  width: 80%;
  height: 100px;
  background-color: ${colors.darkBlue};
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px 0;
  position: relative;

  @media all and (max-width: ${small}) {
    width: 90%;
    height: 70vh;
    flex-flow: column;
    padding: 10px;
  }
`
export const InputWrapper = styled.section`
  height: 60%;
  width: 40%;
  position: relative;

  @media all and (max-width: ${small}) {
    width: 100%;
    height: 60px;
  }
`
export const Filters = styled.section`
  display: flex;
  @media all and (max-width: ${small}) {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 20px;
  }
`
export const SearchInput = styled.input`
  height: 100%;
  width: 100%;
  font-size: 1.1em;
  border-radius: ${props => {
    if (props.isEmpty === "") {
      return `
        5px
              `
    } else if (!props.toggle) {
      return `
        5px
              `
    } else {
      return `
        5px 5px 0 0
              `
    }
  }};
  border: none;
  padding: 10px 10px 10px 45px;
  background-image: url(${search});
  background-size: 30px;
  background-repeat: no-repeat;
  background-position: 2% center;
  transition: 0.3s ease-in-out;

  &:focus {
    outline: none;
  }
`
export const SearchDropDown = styled.div`
  position: absolute;
  background-color: #ffffff;
  width: 100%;
  height: auto;
  flex-flow: column;
  transition: 0.3s ease-in-out;
  display: ${props => (props.toggle ? "flex" : "none")};
`
export const Result = styled.button`
  width: 100%;
  border: none;
  background: none;
  text-align: left;
  padding: 15px 0 15px 45px;
  font-size: 1em;
  cursor: pointer;
  position: relative;

  &:focus {
    outline: none;
  }
  &:before {
    content: "";
    display: block;
    height: 100%;
    width: 30%;
    background: linear-gradient(
      90deg,
      ${colors.pinkHalf},
      ${colors.pinkTransparent}
    );
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: 0.3s ease-in-out;
  }
  &:hover:before {
    opacity: 1;
    transition: 0.3s ease-in-out;
  }
`
export const Select = styled.input`
  width: 60px;
  height: 50px;
  font-size: 1em;
  padding: 10px;

  :focus {
    outline: none;
  }
`
export const SearchBtn = styled.button`
  border: none;
  padding: 20px 40px 20px;
  background-color: ${colors.pink};
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1em;

  &:focus {
    outline: none;
  }
  @media all and (max-width: ${small}) {
    width: 100%;
  }
`
export const ToggleAdvanced = styled.button`
  height: 40px;
  width: 40px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
  border: none;
  cursor: pointer;
  background-color: rgba(67, 97, 238, 0.3);
  transition: 0.3s ease-in-out;
  position: relative;

  svg {
    transition: 0.3s ease-in-out;
    transform: rotate(${props => (props.toggleAdvanced ? "90deg" : 0)});
  }

  :focus {
    outline: none;
  }
  :hover {
    transition: 0.3s ease-in-out;
    background-color: rgba(67, 97, 238, 0.6);
  }

  @media all and (max-width: ${small}) {
    justify-self: end;

    &:before {
      content: "Advanced";
      display: block;
      position: absolute;
      color: #fff;
      font-size: 1.2em;
      right: 130%;
    }
  }
`
