import styled from "styled-components"
import { small, medium, large } from "../breakpoints"

export const HomeOffersWrapper = styled.main`
  width: 100vw;
  height: auto;
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
  @media all and (min-width: ${small}) and (max-width: ${medium}) {
    grid-template-columns: ${props =>
      props.isDetailed ? "repeat(1, 1fr)" : "repeat(2, 1fr)"};
    grid-column-gap: 2vw;
    grid-row-gap: 2vw;
  }
  @media all and (min-width: ${medium}) and (max-width: ${large}) {
    grid-template-columns: ${props =>
      props.isDetailed ? "repeat(2, 1fr)" : "repeat(2, 1fr)"};
    grid-column-gap: 2vw;
    grid-row-gap: 2vw;
  }
`
