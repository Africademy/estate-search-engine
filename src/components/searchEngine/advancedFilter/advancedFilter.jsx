import React from "react"
import {
  Wrapper,
  Label,
  InputsContainer,
  Input,
  FirstInput,
  SecondInput,
  DropDown,
  Item,
} from "./advancedFilter.styled"
import { useDispatch } from "react-redux"

const AdvancedFilter = ({
  title,
  minValue,
  maxValue,
  array,
  insertValue,
  toggle,
  maxToggle,
  lowerName,
  higherName,
  firstDispatch,
  secondDispatch,
}) => {
  const dispatch = useDispatch()
  return (
    <Wrapper>
      <Label>{title}</Label>
      <InputsContainer>
        <FirstInput>
          <Input
            onFocus={e => dispatch(firstDispatch(e.target.type))}
            type="text"
            placeholder="min"
            value={minValue}
            readOnly
          />
          <DropDown toggle={toggle}>
            {array.map(item => {
              return (
                <Item
                  name={lowerName}
                  onClick={e => insertValue(e, item.amount)}
                  key={item.key}
                >
                  {item.amount}
                </Item>
              )
            })}
          </DropDown>
        </FirstInput>
        <SecondInput>
          <Input
            onFocus={e => dispatch(secondDispatch(e.target.type))}
            type="text"
            placeholder="max"
            value={maxValue}
            readOnly
          />
          <DropDown toggle={maxToggle}>
            {array.map(item => {
              return (
                <Item
                  onClick={e => insertValue(e, item.amount)}
                  name={higherName}
                  key={item.key}
                >
                  {item.amount}
                </Item>
              )
            })}
          </DropDown>
        </SecondInput>
      </InputsContainer>
    </Wrapper>
  )
}

export default AdvancedFilter
