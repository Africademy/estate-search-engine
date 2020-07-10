import React from "react"
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
import NoImage from "../noImage/noImage"

const Estate = ({ estate, handleLike }) => {
  const handleSeen = estate => {
    estate.seen = true
    navigate(`/results/${estate.slug}`)
  }
  return (
    <EstateWrapper className="estate">
      <EstateImageContainer seen={estate.seen}>
        {estate.images.length > 0 ? (
          estate.images.map(img => {
            return <Image key={img.key} src={`./photos/${img.img}.jpeg`} />
          })
        ) : (
          <NoImage height={"120px"} color={"#ddd"} />
        )}
      </EstateImageContainer>
      <EstateContent>
        <Name onClick={() => handleSeen(estate)}>{estate.name}</Name>
        <Address>
          {estate.address}, {estate.city}
        </Address>
        <Footer>
          <Price>
            $<Highlight>{estate.prices.price}</Highlight>
            {estate.prices.type === "Rent" ? "/ month" : null}
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

/*
 */
