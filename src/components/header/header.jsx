import React from "react"
import { Link } from "gatsby"
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  Dropdown,
  Interaction,
  FavouritesIcon,
  AddAdvertBtn,
} from "./header.styled"
import Heart from "../icons/favourites"

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo></Logo>
      <Dropdown></Dropdown>
      <Nav>
        <Link to="/buy">Buy</Link>
        <Link to="/rent">Rent</Link>
        <Link to="/coming">Coming</Link>
      </Nav>
      <Interaction>
        <FavouritesIcon>
          <Heart />
        </FavouritesIcon>
        <AddAdvertBtn>Add advertisement</AddAdvertBtn>
      </Interaction>
    </HeaderWrapper>
  )
}

export default Header
