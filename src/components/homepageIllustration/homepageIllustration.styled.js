import styled from "styled-components"
import { colors } from "../../theme"
import { small } from "../breakpoints"

export const IllustrationWrapper = styled.section`
  height: 100%;
  width: 80vw;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;

  svg {
    @media all and (max-width: ${small}) {
      display: none;
    }
  }
  svg g g g g {
  }
`
export const Accent = styled.span`
  position: relative;
  &:after {
    content: "";
    display: block;
    position: absolute;
    bottom: -10%;
    left: 0;
    width: 40%;
    height: 10px;
    background-color: ${colors.darkBlue};
    transition: 0.3s ease-in-out;
  }
  &:hover:after {
    transition: 0.3s ease-in-out;
    left: 90%;
    width: 0;
  }
`
