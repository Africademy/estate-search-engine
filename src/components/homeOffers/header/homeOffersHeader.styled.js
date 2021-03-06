import styled from "styled-components"
import { colors } from "../../../theme"
import { small, medium, large, xlarge } from "../../breakpoints"

export const Wrapper = styled.section`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;
`
export const Title = styled.h2`
  font-size: 2.8em;
`
export const SwitchDisplayStyle = styled.section`
  width: 5vw;
  height: 100%;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;

  @media all and (max-width: ${small}) {
    width: 20vw;
  }
  @media all and (min-width: ${small}) and (max-width: ${medium}) {
    width: 100px;
  }
  @media all and (min-width: ${medium}) and (max-width: ${large}) {
    width: 10vw;
  }
  @media all and (min-width: ${large}) and (max-width: ${xlarge}) {
    width: 100px;
  }
`
export const MostImportant = styled.button`
  height: 35px;
  width: 35px;
  border-radius: 10px;
  border: none;
  background-color: rgba(67, 97, 238, 0.3);
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:focus {
    outline: none;
  }

  ${props => {
    if (props.isDetailed) {
      return `
         &:hover {
    transition: 0.3s ease-in-out;
    background-color: ${colors.darkBlue};
  }
      `
    }
  }}
`
export const MoreDetails = styled(MostImportant)`
  ${props => {
    if (!props.isDetailed) {
      return `
        &:hover {
    transition: 0.3s ease-in-out;
    background-color: ${colors.darkBlue};
  }
      `
    }
  }}
`

export const Icon = styled.div`
  width: 60%;
  height: 50%;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  justify-content: space-between;
  -webkit-justify-content: space-between;
`
export const BigRect = styled.div`
  width: 100%;
  height: 50%;
  background-color: #fff;
  border-radius: 5px 5px 0 0;
`
export const SmallRect = styled(BigRect)`
  height: 30%;
  border-radius: 0 0 5px 5px;
`
export const Line = styled.span`
  display: block;
  width: 100%;
  height: 3px;
  background-color: #fff;
`
