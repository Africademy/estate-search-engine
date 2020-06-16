import styled from "styled-components"
import { small } from "../breakpoints"

export const HomeOffersWrapper = styled.main`
  width: 100vw;
  height: 60vh;
  padding: 5vw;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  justify-content: center;
  -webkit-justify-content: center;

  @media all and (max-width: ${small}) {
    height: auto;
  }
`
export const Grid = styled.section`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(
    ${props => (props.isDetailed ? "2, 1fr" : "3, 1fr")}
  );
  grid-column-gap: 1vw;
  grid-row-gap: 1vw;

  @media all and (max-width: ${small}) {
    grid-template-columns: 1fr;
    height: auto;
    grid-row-gap: 5vw;
  }
`
