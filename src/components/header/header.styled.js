import styled from "styled-components"

export const HeaderWrapper = styled.header`
  width: 100vw;
  height: 10vh;
  background-color: #d6d6d6;
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
export const Nav = styled.nav`
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;
`
export const Interaction = styled.section`
  height: 100%;
  width: 25%;
  display: flex;
  align-items: center;
`
export const FavouritesIcon = styled.button`
  border: none;
  background: none;
  height: auto;
  cursor: pointer;
  position: relative;

  :focus {
    outline: none;
  }
  :after {
    content: "";
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -30%;
    right: -40%;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: #ff0043;
  }
`
