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
  toggleDropdown,
  toggleCurrencyDropdown,
  currency,
  toggleCurrency,
  currencies,
  rentPrice,
  getPrice,
}) => {
  const [togglePrice, setPrice] = useState(false)
  return (
    <RentWrapper>
      <PriceProvider>
        <PriceInput
          onChange={e => getPrice(e)}
          value={rentPrice}
          toggle={togglePrice}
          placeholder="Choose price..."
        />
        <Label>/ month</Label>
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
            return <Item key={cur.key}>{cur.name}</Item>
          })}
        </CurrencyDropdown>
      </Currency>
    </RentWrapper>
  )
}

export default Rent
