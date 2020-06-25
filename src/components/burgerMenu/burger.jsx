import React from "react"
import { Wrapper, Fade, Menu, CTABtn } from "./burger.styled"
import { Link } from "gatsby"
import { useSelector } from "react-redux"

const BurgerMenu = () => {
  const toggle = useSelector(state => state.ToggleBurger)
  return (
    <Wrapper toggle={toggle}>
      <Fade toggle={toggle} />
      <Menu toggle={toggle}>
        <Link to="/buy">Buy</Link>
        <Link to="/rent">Rent</Link>
        <Link to="/coming">Coming</Link>
        <CTABtn>Add advertisement</CTABtn>
      </Menu>
    </Wrapper>
  )
}

export default BurgerMenu
