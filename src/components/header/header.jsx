import React, { useEffect, useState } from "react"
import { Link, navigate } from "gatsby"
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

const Header = () => {
  const favs = useSelector(state => state.Favourites)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 100) {
          setScrolled(true)
        } else {
          setScrolled(false)
        }
      })
    }
  })
  return (
    <HeaderWrapper scrolled={scrolled}>
      <Logo onClick={() => navigate("/")} role="button">
        <LogoSVG src={logo} />
      </Logo>
      <Dropdown />
      <Nav>
        <Link to="/buy">Buy</Link>
        <Link to="/rent">Rent</Link>
        <Link to="/coming">Coming</Link>
      </Nav>
      <Interaction>
        <FavouritesIcon favs={favs} onClick={() => navigate("/favourites")}>
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
