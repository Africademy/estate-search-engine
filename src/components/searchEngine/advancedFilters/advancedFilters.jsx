import React from "react"
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
  insertRoom,
  min,
  max,
  title,
  icon,
  array,
  readOnly,
  pl,
  lang,
  toggle,
}) => {
  return (
    <Wrapper>
      <Label>{lang ? title : pl}</Label>
      <InputsWrapper>
        <InputWrapper>
          {readOnly ? (
            <MinInput
              icon={icon}
              placeholder={lang ? "min" : "od"}
              readOnly
              value={min}
            />
          ) : (
            <MinInput
              icon={icon}
              placeholder={lang ? "min" : "od"}
              onChange={e => console.log(e)}
              value={min}
            />
          )}
          {dropdown ? (
            <Dropdown toggle={toggle}>
              {array.map(val => {
                return (
                  <Item
                    name="minRooms"
                    onClick={e => insertRoom(e)}
                    key={val.key}
                  >
                    {val.amount}
                  </Item>
                )
              })}
            </Dropdown>
          ) : null}
        </InputWrapper>
        <InputWrapper>
          {readOnly ? (
            <MaxInput
              icon={icon}
              placeholder={lang ? "max" : "od"}
              readOnly
              value={max}
            />
          ) : (
            <MaxInput
              icon={icon}
              placeholder={lang ? "max" : "od"}
              onChange={e => console.log(e)}
              value={max}
            />
          )}
          {dropdown ? (
            <DropdownMax toggle={toggle}>
              {array.map(val => {
                return (
                  <Item
                    name="maxRooms"
                    onClick={e => insertRoom(e)}
                    value={max}
                    key={val.key}
                  >
                    {val.amount}
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
