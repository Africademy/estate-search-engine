import React from "react"
import {
  CarouselItemWrapper,
  ImageContainer,
  Img,
  Name,
  Address,
  Price,
} from "./carouselItem.styled"

const CarouselItem = ({ estate, showSelectedEstate }) => {
  const { name, address, district, city, prices, images } = estate
  return (
    <CarouselItemWrapper onClick={() => showSelectedEstate(estate)}>
      <ImageContainer>
        <Img key={images[0].key} src={`../photos/${images[0].img}.jpeg`} />
      </ImageContainer>
      <Name>{name}</Name>
      <Address>
        {address}, {city}, {district}
      </Address>
      <Price>${prices.price}</Price>
    </CarouselItemWrapper>
  )
}

export default CarouselItem
