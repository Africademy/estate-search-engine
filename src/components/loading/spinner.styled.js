import styled, { keyframes } from "styled-components"
import { colors } from "../../theme"

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
export const SpinnerWrapper = styled.div`
  width: 100%;
  height: ${props => props.height};
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
`
export const SpinnerContainer = styled.div`
  width: ${props => props.size};
  height: ${props => props.size};
  background-color: ${colors.purple};
  border-radius: 50%;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 50%;
    height: 50%;
    transform-origin: 0 0;
    background-color: #fff;
    animation: 1s ${spinner} linear infinite;
  }
`
export const Inside = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70px;
  height: 70px;
  background-color: #ffffff;
  border-radius: 50%;
  margin: -35px 0 0 -35px;
`
