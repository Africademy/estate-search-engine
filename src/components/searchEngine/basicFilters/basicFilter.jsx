import React, { useState } from "react"
import {
  Dropdown,
  Title,
  TypesWrapper,
  Type,
  PriceFilter,
  Input,
  MinInput,
  MaxInput,
  MinPriceContainer,
  MaxPriceContainer,
  PriceDropdown,
  PriceItem,
} from "./basicFilter.styled"

const BasicFilter = ({
  chooseType,
  array,
  handleToggle,
  toggleState,
  title,
  openPrice,
  minPriceValue,
  maxPriceValue,
  maxPrice,
  handlePrice,
  toggleMin,
  toggleMax,
  toggleDropdowns,
}) => {
  const [price] = useState([
    { key: 1, value: 1000 },
    { key: 2, value: 1200 },
    { key: 3, value: 1400 },
    { key: 4, value: 1600 },
    { key: 5, value: 1800 },
    { key: 6, value: 2000 },
  ])
  return (
    <TypesWrapper title={title}>
      {array !== null ? (
        <Type onClick={e => handleToggle(e)}>
          <Title>{title}</Title>
          <Input placeholder={"Choose..."} readOnly value={chooseType} />
          <Dropdown toggleState={toggleState}></Dropdown>
        </Type>
      ) : (
        <Type>
          <Title onClick={e => openPrice(e)}>{title}</Title>
          <PriceFilter>
            <MinPriceContainer>
              <MinInput
                onClick={e => toggleDropdowns(e)}
                name="minPrice"
                value={minPriceValue}
                placeholder="min"
                readOnly
              />
              <PriceDropdown toggle={toggleMin}>
                {price.map(item => {
                  return (
                    <PriceItem
                      name="minPrice"
                      onClick={e => handlePrice(e, item.value)}
                      key={item.key}
                    >
                      {item.value}
                    </PriceItem>
                  )
                })}
              </PriceDropdown>
            </MinPriceContainer>
            <MaxPriceContainer>
              <MaxInput
                onClick={e => toggleDropdowns(e)}
                name="maxPrice"
                value={maxPriceValue}
                placeholder="max"
                readOnly
              />
              <PriceDropdown toggle={toggleMax}>
                {price.map(item => {
                  return (
                    <PriceItem
                      name="maxPrice"
                      onClick={e => handlePrice(e, item.value)}
                      key={item.key}
                    >
                      {item.value}
                    </PriceItem>
                  )
                })}
              </PriceDropdown>
            </MaxPriceContainer>
          </PriceFilter>
        </Type>
      )}
    </TypesWrapper>
  )
}

export default BasicFilter
