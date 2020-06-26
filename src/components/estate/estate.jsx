import React, { useEffect, useState } from "react"
import { navigate } from "gatsby"
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
import { addToFavourites } from "../actions/addToFavourites"

const Estate = ({ estate, handleLike }) => {
  return (
    <EstateWrapper>
      <EstateImageContainer seen={estate.seen}>
        {estate.images.map(img => {
          return <Image key={img.key} src={`./photos/${img.img}.jpeg`} />
        })}
      </EstateImageContainer>
      <EstateContent>
        <Name onClick={() => navigate(`/results/${estate.slug}`)}>
          {estate.name}
        </Name>
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
