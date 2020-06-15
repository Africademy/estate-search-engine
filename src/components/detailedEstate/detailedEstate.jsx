import React from "react"
import {
  EstateWrapper,
  ImageContainer,
  Img,
  ContentContainer,
  Type,
} from "./detaiiledEstate.styled"
import {
  Address,
  AddToFavourites,
  Footer,
  Highlight,
  Name,
  Price,
} from "../estate/estate.styled"
import Heart from "../icons/favourites"
import Pin from "../icons/pin"

const DetailedEstate = ({ estate }) => {
  return (
    <EstateWrapper>
      <ImageContainer>
        {estate.images.map(img => {
          return <Img key={img.key} src={`./photos/${img.img}.jpeg`} />
        })}
      </ImageContainer>
      <ContentContainer>
        <Name>{estate.name}</Name>
        <Type>{estate.type}</Type>
        <Address>
          <Pin height={"25px"} />
          {estate.city}, {estate.district}
        </Address>
        <Footer>
          <Price>
            $<Highlight>{estate.prices[0].price}</Highlight>
          </Price>
          <AddToFavourites>
            <Heart height={"80%"} />
          </AddToFavourites>
        </Footer>
      </ContentContainer>
    </EstateWrapper>
  )
}

export default DetailedEstate
