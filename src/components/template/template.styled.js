import styled from "styled-components"
import arrow from "../../static/icons/nav-arrow-down.svg"
import { small, medium, large } from "../breakpoints"
import { colors } from "../../theme"

export const TemplateWrapper = styled.main`
  width: 100vw;
  height: auto;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  align-items: center;
  -webkit-align-items: center;
  position: relative;
  transition: 0.3s ease-in-out;
`
export const SliderContainer = styled.section`
  width: 100vw;
  height: ${props => (props.toggle ? "100vh" : "50vh")};
  overflow: scroll;
  display: flex;
  position: relative;
  transition: 0.3s ease-in-out;
`
export const LeftColumn = styled.div`
  width: 5vw;
  height: 50vh;
  position: absolute;
  z-index: 10;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;

  @media all and (max-width: ${small}) {
    width: 15vw;
  }
`
export const RightColumn = styled.div`
  width: 5vw;
  height: 50vh;
  position: absolute;
  z-index: 10;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;

  @media all and (max-width: ${small}) {
    width: 15vw;
  }
`
export const LeftBtn = styled.button`
  height: 5vw;
  width: 5vw;
  cursor: pointer;
  background: url(${arrow}) rgba(255, 255, 255, 0.5) no-repeat center center;
  border-radius: 50px;
  background-size: 50px;
  border: none;
  transition: 0.3s ease-in-out;
  transform: rotate(90deg);

  &:hover {
    transform: rotate(90deg) scale(1.1);
  }
  &:focus {
    outline: none;
  }
  @media all and (max-width: ${small}) {
    width: 15vw;
  }
`
export const RightBtn = styled(LeftBtn)`
  transform: rotate(-90deg);
  background-color: ${colors.pink};

  &:hover {
    transform: rotate(-90deg) scale(1.1);
  }
`
export const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transform: translateX(-${props => props.imageWidth * props.slider}px);
  transition: 0.3s ease-in-out;
  cursor: pointer;
`
export const ContentContainer = styled.section`
  width: 80vw;
  height: auto;
  min-height: 40vh;
  background-color: #fff;
  box-shadow: 0 1.4px 2.2px -10px rgba(0, 0, 0, 0.028),
    0 3.5px 5.3px -10px rgba(0, 0, 0, 0.04),
    0 6.5px 10px -10px rgba(0, 0, 0, 0.05),
    0 11.6px 17.9px -10px rgba(0, 0, 0, 0.06),
    0 21.7px 33.4px -10px rgba(0, 0, 0, 0.072),
    0 52px 80px -10px rgba(0, 0, 0, 0.1);

  position: absolute;
  top: 80%;
  padding: 2vw;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  align-items: center;
  transition: 0.3s ease-in-out;
  margin: 0 0 10vh;

  ${props => {
    if (props.toggle) {
      return `
        transform: translateY(30vh);
        transition: 1s ease-in-out;
      `
    }
  }};

  @media all and (max-width: ${small}) {
    width: 100vw;
    top: 100%;
    padding: 5vw;
  }
  @media all and (min-width: ${small}) and (max-width: ${medium}) {
    width: 90vw;
  }
`
export const Header = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: space-between;
  -webkit-justify-content: space-between;
`
export const Name = styled.h3`
  font-size: 2em;
  @media all and (max-width: ${small}) {
    font-size: 1.5em;
  }
`
export const AddToFavourites = styled.button`
  height: 50px;
  width: 50px;
  border: none;
  background: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`
export const Address = styled.section`
  width: 100%;
  height: auto;
`
export const Street = styled.p`
  font-size: 1.1em;
  font-weight: 600;
  opacity: 0.7;
`
export const Content = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  margin: 2vw 0 0;
  justify-content: space-between;
  @media all and (max-width: ${small}) {
    flex-flow: column;
    -webkit-flex-flow: column;
  }
`
export const Main = styled.section`
  width: 35vw;
  height: auto;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;

  @media all and (max-width: ${small}) {
    width: 100%;
  }
  @media all and (min-width: ${small}) and (max-width: ${medium}) {
    width: 45%;
  }
`
export const PriceAndMap = styled(Main)`
  @media all and (max-width: ${small}) {
    width: 90vw;
  }
  @media all and (min-width: ${small}) and (max-width: ${medium}) {
    width: 45%;
  }
`
