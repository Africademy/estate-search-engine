import React from "react"
import { navigate } from "gatsby"
import {
  CarouselItemWrapper,
  ImageContainer,
  Img,
  Content,
  GradientFade,
  Name,
  Price,
  ShowDetailsBtn,
} from "./carouselItem.styled"
import NoImage from "../noImage/noImage"

const CarouselItem = ({ estate, showSelectedEstate }) => {
  const { name, prices, images } = estate
  return (
    <CarouselItemWrapper onClick={() => showSelectedEstate(estate)}>
      <GradientFade />
      <ImageContainer>
        {images.length > 0 ? (
          <Img key={images[0].key} src={`../photos/${images[0].img}.jpeg`} />
        ) : (
          <NoImage />
        )}
      </ImageContainer>
      <Content>
        <Name>{name}</Name>
        <Price>${prices.price}</Price>
        <ShowDetailsBtn onClick={() => navigate(`/results/${estate.slug}`)}>
          Show details
        </ShowDetailsBtn>
      </Content>
    </CarouselItemWrapper>
  )
}

export default CarouselItem
