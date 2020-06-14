import styled from "styled-components"
import { small } from "../breakpoints"

export const EstateContent = styled.section`
  width: 90%;
  height: 50%;
  background-color: #ffffff;
  position: absolute;
  bottom: 0;
  box-shadow: 0 0.4px 2.2px -10px rgba(0, 0, 0, 0.039),
    0 0.9px 5.3px -10px rgba(0, 0, 0, 0.057),
    0 1.6px 10px -10px rgba(0, 0, 0, 0.07),
    0 2.9px 17.9px -10px rgba(0, 0, 0, 0.083),
    0 5.4px 33.4px -10px rgba(0, 0, 0, 0.101),
    0 13px 80px -10px rgba(0, 0, 0, 0.14);
  padding: 15px;

  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  transition: 0.3s ease-in-out;

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
  align-items: center;

  :hover ${EstateContent} {
    transform: translateY(-10px);
    box-shadow: 0 1.1px 2.2px -6px rgba(0, 0, 0, 0.028),
      0 2.6px 5.3px -6px rgba(0, 0, 0, 0.04),
      0 4.9px 10px -6px rgba(0, 0, 0, 0.05),
      0 8.7px 17.9px -6px rgba(0, 0, 0, 0.06),
      0 16.3px 33.4px -6px rgba(0, 0, 0, 0.072),
      0 39px 80px -6px rgba(0, 0, 0, 0.1);

    transition: 0.3s ease-in-out;
  }

  @media all and (max-width: ${small}) {
    height: 45vh;
  }
`
export const LeftBtn = styled.button`
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
  cursor: pointer;
  border: none;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  //transform: translateX(-50px);
  transition: 0.3s ease-in-out;
`
export const RightBtn = styled(LeftBtn)`
  //transform: translateX(50px);
  svg {
    transform: rotate(180deg);
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

  :hover ${LeftBtn} {
    transform: translateX(0);
    transition: 0.3s ease-in-out;
  }
  :hover ${RightBtn} {
    transform: translateX(0);
    transition: 0.3s ease-in-out;
  }
  :hover img {
    transition: 0.7s ease-in-out;
    transform: translateX(-100%);
  }
`
export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center center;
  transition: 0.7s ease-in-out;
`
export const ControlBtns = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  padding: 0 5px 0;
`
export const Name = styled.h3`
  font-size: 1.7em;
`
export const Address = styled.p``
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
`
