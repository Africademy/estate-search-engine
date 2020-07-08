import React from "react"
import { Wrapper, Checkboxes } from "./checkboxCollection.styled"
import { Label } from "../advancedFilter/advancedFilter.styled"
import Checkbox from "./checkbox/checkbox"
import JSONadvantages from "../../../data/advantages.json"

const CheckboxCollection = () => {
  return (
    <Wrapper>
      <Label>Advantages</Label>
      <Checkboxes>
        {JSONadvantages.map(item => {
          return <Checkbox key={item.key} item={item} />
        })}
      </Checkboxes>
    </Wrapper>
  )
}

export default CheckboxCollection
