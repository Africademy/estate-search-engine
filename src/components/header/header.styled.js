import styled from "styled-components"
import { colors } from "../../theme"
import { small } from "../breakpoints"

export const HeaderWrapper = styled.header`
  width: 100vw;
  height: 10vh;
  background-color: #ffffff;
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 0 5vw 0;

  display: flex;
  justify-content: space-between;
`
export const Logo = styled.div`
  height: 100%;
  width: 10%;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
`
export const LogoSVG = styled.img`
  height: 50%;
`
export const Dropdown = styled.ul`
  width: 100vw;
  height: 20vh;
  background-color: #373737;
  position: absolute;
  left: 0;
  top: 10vh;
  visibility: hidden;
`

export const Nav = styled.nav`
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;

  a {
    height: 100%;
    display: flex;
    align-items: center;
    -webkit-align-items: center;
    font-size: 1em;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
    position: relative;

    :before {
      content: "";
      display: block;
      position: absolute;
      width: 50%;
      height: 4px;
      border-radius: 50px 0 0 50px;
      bottom: 30%;
      left: 0;
      transform-origin: 0 50%;
      transform: scale(0);
      transition: 0.3s ease-in-out;
      background-color: ${colors.pink};
    }

    :after {
      content: "";
      display: block;
      position: absolute;
      width: 50%;
      height: 4px;
      border-radius: 0 50px 50px 0;
      bottom: 30%;
      right: 0;
      transform-origin: 100% 50%;
      transform: scale(0);
      transition: 0.3s ease-in-out;
      background-color: ${colors.pink};
    }
    :hover:after {
      transform: scale(1);
      transition: 0.3s ease-in-out;
    }
    :hover:before {
      transform: scale(1);
      transition: 0.3s ease-in-out;
    }

    :hover ~ ${Dropdown} {
      visibility: visible;
    }
  }
  @media all and (max-width: ${small}) {
    display: none;
  }
`
export const Interaction = styled.section`
  height: 100%;
  width: 25%;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: space-between;

  @media all and (max-width: ${small}) {
    width: 30%;
  }
`
export const FavouritesIcon = styled.button`
  border: none;
  background: none;
  height: 3.5vh;
  width: 3.5vh;
  cursor: pointer;
  position: relative;

  :focus {
    outline: none;
  }
  :after {
    content: "2";
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -10%;
    right: -30%;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: ${colors.darkBlue};
  }
`
export const AddAdvertBtn = styled.button`
  padding: 15px 30px 15px;
  font-size: 1em;
  border-radius: 50px;
  cursor: pointer;
  background-color: ${colors.pink};
  border: 2px solid ${colors.pink};
  color: #fff;
  transition: 0.3s ease-in-out;

  :hover {
    background-color: #fff;
    color: #000;
    transition: 0.3s ease-in-out;
  }

  @media all and (max-width: ${small}) {
    display: none;
  }
`
