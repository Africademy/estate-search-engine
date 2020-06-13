import React from "react"
import {
  EstateWrapper,
  EstateImageContainer,
  Image,
  ControlBtns,
  LeftBtn,
  RightBtn,
  EstateContent,
  Name,
  Address,
  Footer,
  Price,
  Highlight,
  AddToFavourites,
} from "./estate.styled"
import Heart from "../icons/favourites"
import NavArrowLeft from "../icons/imageArrow"

const Estate = ({ estate }) => {
  return (
    <EstateWrapper>
      <EstateImageContainer>
        <ControlBtns>
          <LeftBtn>
            <NavArrowLeft height={"30px"} />
          </LeftBtn>
          <RightBtn>
            <NavArrowLeft height={"30px"} />
          </RightBtn>
        </ControlBtns>
        {estate.image.map(img => {
          return <Image src={`./photos/${img}.jpeg`} />
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
          <AddToFavourites>
            <Heart height={"80%"} />
          </AddToFavourites>
        </Footer>
      </EstateContent>
    </EstateWrapper>
  )
}

export default Estate
