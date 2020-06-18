import styled from "styled-components"
import { colors } from "../../theme"
import { medium, large } from "../breakpoints"

export const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  padding: 2vw 10vw 0;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  align-items: center;
  -webkit-align-items: center;

  @media all and (min-width: ${medium}) and (max-width: ${large}) {
    padding: 2vw 10vw 0;
  }
`
export const Title = styled.h2`
  font-size: 3em;
  display: flex;
  align-self: flex-start;
  @media all and (min-width: ${medium}) and (max-width: ${large}) {
    font-size: 3.2em;
  }
`
export const Description = styled.p`
  font-size: 1.1em;
  margin: 2vw 0 2vw;
  text-align: center;
`
export const Highlight = styled.span`
  color: ${colors.pink};
  font-weight: 600;
`
