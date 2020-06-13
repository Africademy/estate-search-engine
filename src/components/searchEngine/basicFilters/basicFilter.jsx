import React, { useState } from "react"
import {
  Dropdown,
  Item,
  Title,
  TypesWrapper,
  Type,
  PriceFilter,
  RangeOfPrice,
  ApplyBtn,
} from "./basicFilter.styled"

const BasicFilter = ({
  chooseType,
  array,
  handleToggle,
  toggleState,
  title,
  insert,
  applyPrice,
  handleRangeChange,
  price,
}) => {
  return (
    <TypesWrapper>
      <Type onClick={() => handleToggle()}>
        <Title>{title}</Title>
        {chooseType}
        <Dropdown toggleState={toggleState}>
          {array !== null ? (
            array.map(item => {
              return (
                <Item onClick={e => insert(e)} key={item.key}>
                  {item.name}
                </Item>
              )
            })
          ) : (
            <PriceFilter>
              <RangeOfPrice
                price={price}
                onChange={e => handleRangeChange(e)}
                min="0"
                max="1000"
                type="range"
              />
              <ApplyBtn onClick={() => applyPrice()}>Apply {price}</ApplyBtn>
            </PriceFilter>
          )}
        </Dropdown>
      </Type>
    </TypesWrapper>
  )
}

export default BasicFilter
