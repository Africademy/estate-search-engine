import React from "react"
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
import { useDispatch } from "react-redux"
import { addToFavourites } from "../actions/addToFavourites"

const Estate = ({ estate }) => {
  const dispatch = useDispatch()
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
          <AddToFavourites onClick={() => dispatch(addToFavourites(estate))}>
            <Heart height={"80%"} />
          </AddToFavourites>
        </Footer>
      </EstateContent>
    </EstateWrapper>
  )
}

export default Estate
