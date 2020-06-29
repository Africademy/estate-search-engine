import React from "react"
import {
  Wrapper,
  Title,
  Advantage,
  Checkbox,
  Label,
} from "./advantagesFilter.styled"
import { useSelector } from "react-redux"

const AdvantagesFilter = ({ array, title }) => {
  const lang = useSelector(state => state.SwitchLanguage)
  const handleSelect = adv => {
    console.log(adv.checked)
    const status = adv.checked
    adv.checked = !status
  }
  return (
    <Wrapper>
      <Title>{title}</Title>
      {array.map(advantage => {
        return (
          <Advantage
            onClick={() => handleSelect(advantage)}
            key={advantage.key}
          >
            <Checkbox toggle={advantage.checked} type="checkbox" />
            <Label>{lang ? advantage.name.en : advantage.name.pl}</Label>
          </Advantage>
        )
      })}
    </Wrapper>
  )
}

export default AdvantagesFilter
