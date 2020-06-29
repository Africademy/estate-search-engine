import React, { useEffect, useState } from "react"
import { Link, navigate } from "gatsby"
import {
  HeaderWrapper,
  Logo,
  LogoSVG,
  Nav,
  NavItem,
  Dropdown,
  Item,
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
  const [types] = useState([
    { key: 1, name: "Flat" },
    { key: 2, name: "House" },
    { key: 3, name: "Garage" },
    { key: 4, name: "Commercial" },
    { key: 5, name: "Parcels" },
    { key: 6, name: "Rooms" },
  ])

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
      <Nav>
        <NavItem>
          <Link to="/buy">{lang ? "Buy" : "Kup"}</Link>
          <Dropdown>
            {types.map(type => {
              return <Item key={type.key}>{type.name}</Item>
            })}
          </Dropdown>
        </NavItem>
        <Link to="/rent">{lang ? "Rent" : "Wynajem"}</Link>
        <Link to="/coming">{lang ? "Coming" : "Inwestycje"}</Link>
      </Nav>
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
            <Polish
              lang={lang.toString()}
              onClick={() => dispatch(switchLanguage())}
            >
              PL
            </Polish>
          ) : (
            <Polish
              disabled="disabled"
              lang={lang.toString()}
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
