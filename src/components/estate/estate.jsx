import React, { useEffect, useState } from "react"
import {
  EstateWrapper,
  EstateImageContainer,
  Image,
  EstateContent,
  Name,
  Address,
  Footer,
  Price,
  Highlight,
  AddToFavourites,
} from "./estate.styled"
import Heart from "../icons/favourites"
import HeartFull from "../icons/favouritesFilled"

const Estate = ({ estate, handleLike }) => {
  return (
    <EstateWrapper>
      <EstateImageContainer>
        {estate.images.map(img => {
          return <Image key={img.key} src={`./photos/${img.img}.jpeg`} />
        })}
      </EstateImageContainer>
      <EstateContent>
        <Name>{estate.name}</Name>
        <Address>
          {estate.address}, {estate.city}
        </Address>
        <Footer>
          <Price>
            $<Highlight>{estate.prices[0].price}</Highlight> / month
          </Price>
          <AddToFavourites onClick={() => handleLike(estate)}>
            {estate.liked ? (
              <HeartFull height={"80%"} />
            ) : (
              <Heart height={"80%"} />
            )}
          </AddToFavourites>
        </Footer>
      </EstateContent>
    </EstateWrapper>
  )
}

export default Estate
