import React from "react"
import {
  Dropdown,
  PriceDropdown,
  Item,
  Title,
  TypesWrapper,
  Type,
  PriceFilter,
  ApplyBtn,
  InputWrapper,
  Separator,
} from "./basicFilter.styled"
import { MaxInput, MinInput } from "../advancedFilters/advancedFilters.styled"

const BasicFilter = ({
  chooseType,
  array,
  handleToggle,
  toggleState,
  title,
  insert,
  openPrice,
  applyPrice,
  minPrice,
  maxPrice,
  handlePrice,
  name,
}) => {
  return (
    <TypesWrapper>
      {array !== null ? (
        <Type onClick={() => handleToggle()}>
          <Title>{title}</Title>
          {chooseType}
          <Dropdown toggleState={toggleState}>
            {array.map(item => {
              return (
                <Item name={name} onClick={e => insert(e)} key={item.key}>
                  {item.name}
                </Item>
              )
            })}
            )}
          </Dropdown>
        </Type>
      ) : (
        <Type>
          <Title onClick={() => openPrice()}>{title}</Title>
          {chooseType}
          <PriceDropdown toggleState={toggleState}>
            <PriceFilter>
              <InputWrapper>
                <MinInput
                  onChange={e => handlePrice(e)}
                  name="minPrice"
                  value={minPrice}
                  placeholder="min"
                />
                <Separator />
                <MaxInput
                  onChange={e => handlePrice(e)}
                  name="maxPrice"
                  value={maxPrice}
                  placeholder="max"
                />
              </InputWrapper>
              <ApplyBtn onClick={() => applyPrice()}>Apply</ApplyBtn>
            </PriceFilter>
          </PriceDropdown>
        </Type>
      )}
    </TypesWrapper>
  )
}

export default BasicFilter
