import styled from "styled-components"
import { colors } from "../../theme"
import { medium } from "../breakpoints"

export const Wrapper = styled.main`
  display: none;
  @media all and (max-width: ${medium}) {
    height: ${props => (props.toggle ? "100vh" : 0)};
    width: 100vw;
    position: absolute;
    z-index: 50;
    top: 0;
    left: 0;
    display: flex;
    justify-content: flex-end;
  }
`
export const Fade = styled.div`
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.33);
  display: ${props => (props.toggle ? "block" : "none")};
`
export const Menu = styled.nav`
  width: 100%;
  height: max-content;
  background-color: #fff;
  position: relative;
  z-index: 5;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  align-items: center;
  padding: 12vh 20px 5vh;
  right: 0;
  transition: 0.3s ease-in-out;
  transform: translateY(${props => (props.toggle ? 0 : "-100%")});

  a {
    font-size: 2em;
    line-height: 1.5em;
  }
`
export const Languages = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
`
export const Polish = styled.button`
  width: 45%;
  border: none;
  font-size: 1em;
  background-color: ${props => (props.lang ? "transparent" : colors.pink)};
  color: ${props => (props.lang ? "#000" : "#fff")};
  border-radius: 15px;

  &:focus {
    outline: none;
  }
`
export const English = styled.button`
  width: 45%;
  border: none;
  font-size: 1em;
  background-color: ${props => (props.lang ? colors.pink : "transparent")};
  color: ${props => (props.lang ? "#fff" : "#000")};
  border-radius: 15px;

  &:focus {
    outline: none;
  }
`
export const CTABtn = styled.button`
  padding: 20px 40px 20px;
  border: none;
  background-color: ${colors.pink};
  color: #fff;
  font-size: 1em;
  font-weight: 500;
  margin: 50px 0 0;
`
