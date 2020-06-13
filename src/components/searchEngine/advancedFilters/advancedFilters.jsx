import React from "react"
import {
  Wrapper,
  Label,
  InputsWrapper,
  MinInput,
  MaxInput,
  Dropdown,
  Item,
} from "./advancedFilters.styled"

const AdvancedFilter = ({ dropdown }) => {
  return (
    <Wrapper>
      <Label>Amount of rooms</Label>
      <InputsWrapper>
        <MinInput placeholder="min" />
        {dropdown ? (
          <Dropdown>
            <Item>2</Item>
            <Item>3</Item>
          </Dropdown>
        ) : null}
        <MaxInput placeholder="max" />
      </InputsWrapper>
    </Wrapper>
  )
}

export default AdvancedFilter
