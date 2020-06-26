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
  SwitchLanguage,
  Polish,
  English,
} from "./header.styled"
import Heart from "../icons/favourites"
import Burger from "../burger/burger"
import logo from "../../static/icons/location.svg"
import { useSelector, useDispatch } from "react-redux"
import { switchLanguage } from "../actions/switchLanguage"

const Header = () => {
  const favs = useSelector(state => state.Favourites)
  const toggle = useSelector(state => state.ToggleModal)
  const lang = useSelector(state => state.SwitchLanguage)
  const [scrolled, setScrolled] = useState(false)
  const dispatch = useDispatch()
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
    <HeaderWrapper toggle={toggle} scrolled={scrolled}>
      <Logo onClick={() => navigate("/")} role="button">
        <LogoSVG src={logo} />
      </Logo>
      <Dropdown />
      {lang ? (
        <Nav>
          <Link to="/buy">Buy</Link>
          <Link to="/rent">Rent</Link>
          <Link to="/coming">Coming</Link>
        </Nav>
      ) : (
        <Nav>
          <Link to="/buy">Kup</Link>
          <Link to="/rent">Wynajem</Link>
          <Link to="/coming">Inwestycje</Link>
        </Nav>
      )}
      <Interaction>
        <FavouritesIcon
          favs={favs.length}
          onClick={() => navigate("/favourites")}
        >
          <Heart height={"100%"} />
        </FavouritesIcon>
        <Burger />
        <AddAdvertBtn
          onClick={() => {
            navigate("/advertisement")
          }}
        >
          {lang ? "Add advertisement" : "Dodaj ogłoszenie"}
        </AddAdvertBtn>
        <SwitchLanguage>
          {lang ? (
            <Polish lang={lang} onClick={() => dispatch(switchLanguage())}>
              PL
            </Polish>
          ) : (
            <Polish
              disabled="disabled"
              lang={lang}
              onClick={() => dispatch(switchLanguage())}
            >
              PL
            </Polish>
          )}
          {lang ? (
            <English
              disabled="disabled"
              lang={lang}
              onClick={() => dispatch(switchLanguage())}
            >
              EN
            </English>
          ) : (
            <English lang={lang} onClick={() => dispatch(switchLanguage())}>
              EN
            </English>
          )}
        </SwitchLanguage>
      </Interaction>
    </HeaderWrapper>
  )
}

export default Header
