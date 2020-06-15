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
  minRooms,
  maxRooms,
}) => {
  const [rooms, setMinRooms] = useState([
    { key: 1 },
    { key: 2 },
    { key: 3 },
    { key: 4 },
  ])
  return (
    <Wrapper>
      <Label>Amount of rooms</Label>
      <InputsWrapper>
        <InputWrapper>
          <MinInput placeholder="min" readOnly value={minRooms} />
          {dropdown ? (
            <Dropdown>
              {rooms.map(room => {
                return (
                  <Item
                    name="minRooms"
                    onClick={e => insertMinRoom(e)}
                    key={room.key}
                  >
                    {room.key}
                  </Item>
                )
              })}
            </Dropdown>
          ) : null}
        </InputWrapper>
        <InputWrapper>
          <MaxInput placeholder="max" readOnly value={maxRooms} />
          {dropdown ? (
            <DropdownMax>
              {rooms.map(room => {
                return (
                  <Item
                    name="maxRooms"
                    onClick={e => insertMaxRoom(e)}
                    key={room.key}
                  >
                    {room.key}
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
