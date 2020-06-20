import styled from "styled-components"
import { small, medium, large } from "../../breakpoints"

export const FormWrapper = styled.form`
  width: 50vw;
  height: auto;
  margin: 0 0 10vw;

  @media all and (max-width: ${small}) {
    width: 100vw;
    padding: 0 5vw 0;
  }
  @media all and (min-width: ${small}) and (max-width: ${medium}) {
    width: 90vw;
  }
  @media all and (min-width: ${medium}) and (max-width: ${large}) {
    width: 80vw;
  }
`
