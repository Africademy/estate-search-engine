import styled from "styled-components"
import { colors } from "../../theme"

export const HeaderWrapper = styled.header`
  width: 100vw;
  height: 10vh;
  background-color: #ffffff;
  position: sticky;
  top: 0;
  padding: 0 5vw 0;

  display: flex;
  justify-content: space-between;
`
export const Logo = styled.div`
  height: 100%;
  width: 10%;
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

    :hover {
      color: #ff0043;
    }

    :hover ~ ${Dropdown} {
      visibility: visible;
    }
  }
`
export const NavItem = styled.p`
  font-size: 1em;
`
export const Interaction = styled.section`
  height: 100%;
  width: 25%;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: space-between;
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
  border: none;
  font-size: 1em;
  border-radius: 50px;
  cursor: pointer;
`
