import React, { useState } from "react"
import {
  PriceWrapper,
  DropdownContainer,
  SwitchPrices,
  PriceValue,
  Label,
} from "./price.styled"

const Price = ({ prices }) => {
  const [type, setType] = useState(false)
  return (
    <PriceWrapper>
      <DropdownContainer>
        <SwitchPrices
          value={type}
          type="checkbox"
          name="checkbox"
          checked={type}
          onChange={() => setType(!type)}
        />
        {type === false ? (
          <Label htmlFor="checkbox">Rent</Label>
        ) : (
          <Label htmlFor="checkbox">Sell</Label>
        )}
      </DropdownContainer>
      {type === false ? (
        <PriceValue>${prices[0].price} / month</PriceValue>
      ) : (
        <PriceValue>${prices[1].price}</PriceValue>
      )}
    </PriceWrapper>
  )
}

export default Price
