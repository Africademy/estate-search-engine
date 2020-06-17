import React from "react"
import { Wrapper, List, Item } from "./advantages.styled"
import { SubTitle } from "../addForm/addForm.styled"

const Advantages = ({ advantages }) => {
  return (
    <Wrapper>
      <SubTitle>Advantages</SubTitle>
      <List>
        {advantages.map(adv => {
          return <Item key={adv.key}>{adv.name}</Item>
        })}
      </List>
    </Wrapper>
  )
}

export default Advantages
