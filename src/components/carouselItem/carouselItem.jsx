import React from "react"
import {
  CarouselItemWrapper,
  Name,
  Address,
  Price,
} from "./carouselItem.styled"

const CarouselItem = ({ estate, showSelectedEstate }) => {
  const { name, address, district, city, prices } = estate
  return (
    <CarouselItemWrapper onClick={() => showSelectedEstate(estate)}>
      <Name>{name}</Name>
      <Address>
        {address}, {city}, {district}
      </Address>
      <Price>${prices.price}</Price>
    </CarouselItemWrapper>
  )
}

export default CarouselItem
