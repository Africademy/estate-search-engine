import styled from "styled-components"
import { colors } from "../../../../theme"

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
`
export const Dropdown = styled.section`
  position: absolute;
  width: 100%;
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
  transform: scale(${props => (props.toggleType ? 1 : 0)});
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
