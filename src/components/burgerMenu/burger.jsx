import React from "react"
import {
  Wrapper,
  Fade,
  Menu,
  Languages,
  Polish,
  English,
  CTABtn,
} from "./burger.styled"
import { Link } from "gatsby"
import { useSelector, useDispatch } from "react-redux"
import { switchLanguage } from "../actions/switchLanguage"

const BurgerMenu = () => {
  const toggle = useSelector(state => state.ToggleBurger)
  const lang = useSelector(state => state.SwitchLanguage)
  const dispatch = useDispatch()
  return (
    <Wrapper toggle={toggle}>
      <Fade toggle={toggle} />
      <Menu toggle={toggle}>
        <Link to="/buy">{lang ? "Buy" : "Kup"}</Link>
        <Link to="/rent">{lang ? "Rent" : "Wynajem"}</Link>
        <Link to="/coming">{lang ? "Coming" : "Inwestycje"}</Link>
        <Languages>
          <Polish onClick={() => dispatch(switchLanguage())} lang={lang}>
            PL
          </Polish>
          <English onClick={() => dispatch(switchLanguage())} lang={lang}>
            EN
          </English>
        </Languages>
        <CTABtn>{lang ? "Add advertisement" : "Dodaj ogłoszenie"}</CTABtn>
      </Menu>
    </Wrapper>
  )
}

export default BurgerMenu
