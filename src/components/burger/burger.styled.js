import styled from "styled-components"
import { small } from "../breakpoints"

export const BurgerWrapper = styled.button`
  display: none;
  @media all and (max-width: ${small}) {
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    align-items: center;
    height: 40px;
    width: 40px;
    background: none;
    border: none;
    transition: 0.3s ease-in-out;
    transform: ${props =>
      props.isMenuOpen
        ? "translateY(5px) rotate(90deg)"
        : "translateY(0) rotate(0deg)"};

    :focus {
      outline: none;
    }

    span:nth-child(1) {
      ${props => {
        if (props.isMenuOpen) {
          return `
              transform: translateY(-5px) rotate(45deg);
            `
        }
      }}
    }
    span:nth-child(2) {
      ${props => {
        if (props.isMenuOpen) {
          return `
              transform: translateY(6px) rotate(-45deg);
            `
        }
      }}
    }
  }
`
export const Line = styled.span`
  width: 90%;
  height: 3px;
  background-color: #000;
  transform-origin: 0 50%;
  transition: 0.3s ease-in-out;
`
