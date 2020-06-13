import React, { useState } from "react"
import { Link } from "gatsby"
import {
  HeaderWrapper,
  Logo,
  LogoSVG,
  Nav,
  Dropdown,
  Interaction,
  FavouritesIcon,
  AddAdvertBtn,
} from "./header.styled"
import Heart from "../icons/favourites"
import Burger from "../burger/burger"
import logo from "../../static/icons/location.svg"

const Header = () => {
  const [isMenuOpen, setMenu] = useState(false)

  const handleMenu = () => {
    setMenu(!isMenuOpen)
  }
  return (
    <HeaderWrapper>
      <Logo>
        <LogoSVG src={logo} />
      </Logo>
      <Dropdown></Dropdown>
      <Nav>
        <Link to="/buy">Buy</Link>
        <Link to="/rent">Rent</Link>
        <Link to="/coming">Coming</Link>
      </Nav>
      <Interaction>
        <FavouritesIcon>
          <Heart height={"100%"} />
        </FavouritesIcon>
        <Burger isMenuOpen={isMenuOpen} handleMenu={handleMenu} />
        <AddAdvertBtn>Add advertisement</AddAdvertBtn>
      </Interaction>
    </HeaderWrapper>
  )
}

export default Header
