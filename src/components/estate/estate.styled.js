import styled from "styled-components"
import { small } from "../breakpoints"
import { colors } from "../../theme"
import eye from "../../static/icons/eye-empty.svg"

export const EstateContent = styled.section`
  width: 95%;
  height: 50%;
  background-color: #ffffff;
  position: absolute;
  z-index: 0;
  bottom: 0;
  left: 0;
  box-shadow: 0 0.4px 2.2px -10px rgba(0, 0, 0, 0.039),
    0 0.9px 5.3px -10px rgba(0, 0, 0, 0.057),
    0 1.6px 10px -10px rgba(0, 0, 0, 0.07),
    0 2.9px 17.9px -10px rgba(0, 0, 0, 0.083),
    0 5.4px 33.4px -10px rgba(0, 0, 0, 0.101),
    0 13px 80px -10px rgba(0, 0, 0, 0.14);
  padding: 40px 15px 15px;

  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  transition: 0.3s ease-in-out;
  border-radius: 0 0 20px 20px;

  @media all and (max-width: ${small}) {
    width: 95%;
  }
`
export const EstateWrapper = styled.div`
  width: 100%;
  height: 40vh;
  position: relative;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  align-items: center;
  -webkit-align-items: center;

  @media all and (max-width: ${small}) {
    height: 45vh;
  }
`
export const EstateImageContainer = styled.section`
  width: 100%;
  height: 60%;
  background-color: #ccc;
  border-radius: 10px;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  overflow-y: hidden;
  position: relative;
  z-index: 2;
  ${props => {
    if (props.seen) {
      return `
        border: 4px solid ${colors.blue};
        
        &:after {
          content: "Seen";
          color: #fff;
          display: block;
          position: absolute;
          top: 0;
          right: 0;
          height: max-content;
          width: max-content;
          padding: 5px 10px 5px 40px;
          background: url(${eye}) no-repeat ${colors.blue} 10% center;
          background-size: 25px;
          border-radius: 0 0 0 10px;
          font-size: 1.1em;
        }
      `
    }
  }}

  &:hover img {
    transition: 0.7s ease-in-out;
    transform: translateX(-100%);
  }
`
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  transition: 0.7s ease-in-out;
`
export const Name = styled.h3`
  font-size: 1.7em;
  cursor: pointer;

  &:hover {
    color: ${colors.pink};
  }

  @media all and (max-width: ${small}) {
    font-size: 1.5em;
  }
`
export const Address = styled.p`
  display: flex;
  align-items: center;
  -webkit-align-items: center;

  svg {
    margin: 0 5px 0 0;
  }
  @media all and (max-width: ${small}) {
    font-size: 0.9em;
  }
`
export const Footer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: space-between;
  -webkit-justify-content: space-between;
`
export const Price = styled.p`
  font-size: 1.2em;
  font-weight: 500;
`
export const Highlight = styled.span`
  font-size: 1.2em;
  font-weight: 600;
  opacity: 1;
`
export const AddToFavourites = styled.button`
  height: 40px;
  width: 40px;
  display: flex;
  align-self: flex-end;
  cursor: pointer;
  border: none;
  background: none;
  position: relative;
  z-index: 10;

  &:focus {
    outline: none;
  }
`
