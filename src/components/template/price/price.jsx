import React from "react"
import { PriceWrapper, PriceValue } from "./price.styled"

const Price = ({ prices }) => {
  return (
    <PriceWrapper>
      {prices.type === "Rent" ? (
        <PriceValue>${prices.price} / month</PriceValue>
      ) : (
        <PriceValue>${prices.price}</PriceValue>
      )}
    </PriceWrapper>
  )
}

export default Price
