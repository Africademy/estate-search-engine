import React from "react"
import { Dropdown, Item, Title, TypesWrapper } from "./typeOf.styled"

const Type = ({
  reference,
  toggleState,
  types,
  toggleDropdown,
  chooseType,
}) => {
  return (
    <TypesWrapper>
      <Type ref={reference} onClick={() => toggleDropdown()}>
        <Title>Type of estate</Title>
        {chooseType}
        <Dropdown toggleType={toggleState}>
          <Item>any</Item>
        </Dropdown>
      </Type>
    </TypesWrapper>
  )
}

export default Type
