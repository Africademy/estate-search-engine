import React from "react"
import { BurgerWrapper, Line } from "./burger.styled"

const Burger = ({ isMenuOpen, handleMenu }) => {
  return (
    <BurgerWrapper isMenuOpen={isMenuOpen} onClick={() => handleMenu()}>
      <Line />
      <Line />
    </BurgerWrapper>
  )
}

export default Burger
