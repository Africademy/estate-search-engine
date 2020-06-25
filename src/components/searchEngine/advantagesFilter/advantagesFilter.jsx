import React from "react"
import {
  Wrapper,
  Title,
  Advantage,
  Checkbox,
  Label,
} from "./advantagesFilter.styled"

const AdvantagesFilter = ({ advs }) => {
  return (
    <Wrapper>
      <Title>Advantages</Title>
      {advs.map(advantage => {
        return (
          <Advantage key={advantage.key}>
            <Checkbox checked={advantage.checked} type="checkbox" />
            <Label>{advantage.name}</Label>
          </Advantage>
        )
      })}
    </Wrapper>
  )
}

export default AdvantagesFilter
