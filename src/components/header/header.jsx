import React from "react"
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
import { useSelector } from "react-redux"
import { navigate } from "../../../.cache/gatsby-browser-entry"

const Header = () => {
  const favs = useSelector(state => state.Favourites)
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
        <FavouritesIcon favs={favs}>
          <Heart height={"100%"} />
        </FavouritesIcon>
        <Burger />
        <AddAdvertBtn
          onClick={() => {
            navigate("/advertisement")
          }}
        >
          Add advertisement
        </AddAdvertBtn>
      </Interaction>
    </HeaderWrapper>
  )
}

export default Header
