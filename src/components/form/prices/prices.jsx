import React from "react"
import {
  PricesWrapper,
  Wrapper,
  CheckboxWrapper,
  RentWrapper,
  Settings,
  Checkbox,
  Currency,
  CurInput,
  CurDropdown,
  PriceInput,
  PriceLabel,
  PriceInputWrapper,
  ChooseWrapper,
  Choose,
} from "./prices.styled"
import {
  Header,
  SubTitle,
  ClearBtn,
  Inputs,
  Item,
} from "../basics/basics.styled"

const Prices = ({
  clearAllFields,
  rent,
  toggleDropdown,
  toggleCurrencyDropdown,
  currency,
  currencies,
  toggleCurrency,
  handleInsertCurrency,
  rentPrice,
  sell,
  sellPrice,
  clearPrices,
}) => {
  return (
    <PricesWrapper>
      <Header>
        <SubTitle>Prices</SubTitle>
        <ClearBtn
          switch={clearPrices}
          name="prices"
          onClick={e => clearAllFields(e)}
        >
          {clearPrices}
        </ClearBtn>
      </Header>
      <ChooseWrapper>
        <Choose>
          <Checkbox type="checkbox" />
          Rent
        </Choose>
        <Choose>
          <Checkbox type="checkbox" />
          Sell
        </Choose>
        <Choose>
          <Checkbox type="checkbox" />
          Rent & Sell
        </Choose>
      </ChooseWrapper>
      <CheckboxWrapper>
        <RentWrapper rent={rent}>
          <Settings>
            <Currency>
              <CurInput
                placeholder="Currency"
                toggle={toggleDropdown}
                onClick={() => toggleCurrencyDropdown()}
                value={currency}
                type="text"
                readOnly
              />
              <CurDropdown toggle={toggleCurrency}>
                {currencies.map(cur => {
                  return (
                    <Item
                      onClick={e => handleInsertCurrency(e, cur.name)}
                      key={cur.key}
                    >
                      {cur.name}
                    </Item>
                  )
                })}
              </CurDropdown>
            </Currency>
          </Settings>
          <Inputs>
            <PriceInputWrapper>
              <PriceInput
                onChange={() => console.log("changed")}
                value={rentPrice}
                name="monthly"
                type="text"
              />
              <PriceLabel htmlFor="monthly">/ month</PriceLabel>
            </PriceInputWrapper>
          </Inputs>
        </RentWrapper>
        <Wrapper sell={sell}>
          <Settings>
            <Currency>
              <CurInput
                placeholder="Currency"
                toggle={toggleDropdown}
                onClick={() => toggleCurrencyDropdown()}
                value={currency}
                type="text"
                readOnly
              />
              <CurDropdown toggle={toggleCurrency}>
                {currencies.map(cur => {
                  return (
                    <Item
                      onClick={e => handleInsertCurrency(e, cur.name)}
                      key={cur.key}
                    >
                      {cur.name}
                    </Item>
                  )
                })}
              </CurDropdown>
            </Currency>
          </Settings>
          <Inputs>
            <PriceInputWrapper>
              <PriceInput value={sellPrice} name="pay-once" type="text" />
            </PriceInputWrapper>
          </Inputs>
        </Wrapper>
      </CheckboxWrapper>
    </PricesWrapper>
  )
}

export default Prices
