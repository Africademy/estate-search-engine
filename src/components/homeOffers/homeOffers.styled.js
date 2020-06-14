import styled from "styled-components"
import { small } from "../breakpoints"

export const HomeOffersWrapper = styled.main`
  width: 100vw;
  height: 60vh;
  padding: 5vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1vw;

  @media all and (max-width: ${small}) {
    grid-template-columns: 1fr;
    height: auto;
    grid-row-gap: 5vw;
  }
`
