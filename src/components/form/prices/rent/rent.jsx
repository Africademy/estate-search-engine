import React, { useState } from "react"
import {
  RentWrapper,
  Currency,
  CurrencyInput,
  CurrencyDropdown,
  Item,
  PriceProvider,
  PriceInput,
  Label,
} from "./rent.styled"

const Rent = ({
  toggleCurrencyDropdown,
  currency,
  toggleCurrency,
  currencies,
  rentPrice,
  sellPrice,
  getPrice,
  handleInsertCurrency,
  rent,
}) => {
  const [togglePrice] = useState(false)
  return (
    <RentWrapper>
      <PriceProvider>
        <PriceInput
          onChange={e => getPrice(e)}
          value={rent ? rentPrice : sellPrice}
          toggle={togglePrice}
          placeholder="Choose price..."
          rent={rent}
        />
        {rent ? <Label>/ month</Label> : null}
      </PriceProvider>
      <Currency>
        <CurrencyInput
          placeholder="Currency"
          toggle={toggleCurrency}
          onClick={() => toggleCurrencyDropdown()}
          value={currency}
          type="text"
          readOnly
        />
        <CurrencyDropdown toggle={toggleCurrency}>
          {currencies.map(cur => {
            return (
              <Item
                key={cur.key}
                onClick={e => handleInsertCurrency(e, cur.name)}
              >
                {cur.name}
              </Item>
            )
          })}
        </CurrencyDropdown>
      </Currency>
    </RentWrapper>
  )
}

export default Rent
