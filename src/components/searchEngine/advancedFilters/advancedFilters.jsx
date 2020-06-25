import React, { useState } from "react"
import {
  Wrapper,
  Label,
  InputsWrapper,
  InputWrapper,
  MinInput,
  MaxInput,
  Dropdown,
  DropdownMax,
  Item,
} from "./advancedFilters.styled"

const AdvancedFilter = ({
  dropdown,
  insertMinRoom,
  insertMaxRoom,
  min,
  max,
  title,
  icon,
  array,
  readOnly,
}) => {
  return (
    <Wrapper>
      <Label>{title}</Label>
      <InputsWrapper>
        <InputWrapper>
          {readOnly ? (
            <MinInput icon={icon} placeholder="min" readOnly value={min} />
          ) : (
            <MinInput icon={icon} placeholder="min" value={min} />
          )}
          {dropdown ? (
            <Dropdown>
              {array.map(val => {
                return (
                  <Item
                    name="minRooms"
                    onClick={e => insertMinRoom(e)}
                    key={val.key}
                  >
                    {val.value}
                  </Item>
                )
              })}
            </Dropdown>
          ) : null}
        </InputWrapper>
        <InputWrapper>
          {readOnly ? (
            <MaxInput icon={icon} placeholder="max" readOnly value={max} />
          ) : (
            <MaxInput icon={icon} placeholder="max" value={max} />
          )}
          {dropdown ? (
            <DropdownMax>
              {array.map(val => {
                return (
                  <Item
                    name="maxRooms"
                    onClick={e => insertMaxRoom(e)}
                    key={val.key}
                  >
                    {val.value}
                  </Item>
                )
              })}
            </DropdownMax>
          ) : null}
        </InputWrapper>
      </InputsWrapper>
    </Wrapper>
  )
}

export default AdvancedFilter
