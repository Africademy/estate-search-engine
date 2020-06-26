import React from "react"
import { AdvantagesWrapper, List, Item, Icon } from "./advantages.styled"
import { Title } from "../details/details.styled"

const Advantages = ({ estate }) => {
  return (
    <AdvantagesWrapper>
      <Title>Advantages</Title>
      <List>
        {estate.advantages.map(adv => {
          return (
            <Item key={adv.key}>
              <Icon src={`../icons/${adv.name.toLowerCase()}.svg`} />
              {adv.name}
            </Item>
          )
        })}
      </List>
    </AdvantagesWrapper>
  )
}

export default Advantages
