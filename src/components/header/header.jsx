import React from "react"
import { Link } from "gatsby"
import {
  HeaderWrapper,
  Logo,
  Nav,
  Interaction,
  FavouritesIcon,
} from "./header.styled"
import Heart from "../icons/favourites"

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo></Logo>
      <Nav>
        <Link to="">Buy</Link>
        <Link to="">Rent</Link>
        <Link to="">Coming</Link>
      </Nav>
      <Interaction>
        <FavouritesIcon>
          <Heart />
        </FavouritesIcon>
      </Interaction>
    </HeaderWrapper>
  )
}

export default Header
