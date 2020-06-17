import styled from "styled-components"
import { colors } from "../../theme"

export const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  padding: 2vw 5vw 0;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  align-items: center;
  -webkit-align-items: center;
`
export const Title = styled.h2`
  font-size: 3em;
  display: flex;
  align-self: flex-start;
`
export const Description = styled.p`
  font-size: 1.1em;
  margin: 2vw 0 0;
  text-align: center;
`
export const Highlight = styled.span`
  color: ${colors.pink};
  font-weight: 600;
`
