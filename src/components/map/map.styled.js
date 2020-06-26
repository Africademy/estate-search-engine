import styled from "styled-components"
import { small } from "../breakpoints"

export const MapWrapper = styled.main`
  width: 30vw;
  height: 20vh;
  background-color: #ccc;
  border-radius: 15px;
  overflow: hidden;

  @media all and (max-width: ${small}) {
    width: 100%;
  }
`
