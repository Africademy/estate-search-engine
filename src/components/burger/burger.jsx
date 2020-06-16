import React from "react"
import { BurgerWrapper, Line } from "./burger.styled"
import { useDispatch, useSelector } from "react-redux"
import { ToggleMenu } from "../actions/toggleMenu"

const Burger = () => {
  const dispatch = useDispatch()
  const toggle = useSelector(state => state.ToggleBurger)
  return (
    <BurgerWrapper isMenuOpen={toggle} onClick={() => dispatch(ToggleMenu())}>
      <Line />
      <Line />
    </BurgerWrapper>
  )
}

export default Burger
