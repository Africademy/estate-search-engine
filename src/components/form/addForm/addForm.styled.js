import styled from "styled-components"
import { colors } from "../../../theme"
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
export const Images = styled.section`
  width: 100%;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  align-items: center;
  -webkit-align-items: center;
  margin: 50px 0 0;
`
export const Imgs = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`
export const ImageContainer = styled.div`
  width: 100%;
  height: 20vh;
  background-color: #000;
  overflow: hidden;
`
export const Img = styled.img``
