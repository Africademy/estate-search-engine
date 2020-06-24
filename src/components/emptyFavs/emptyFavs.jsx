import React from "react"
import { navigate } from "gatsby"
import { EmptyWrapper, Message, ComeBackBtn } from "./emptyFavs.styled"

const EmptyFavs = () => {
  return (
    <EmptyWrapper>
      <Message>You don't have any favourite estates</Message>
      <ComeBackBtn onClick={() => navigate("/")}>
        Find your favourites
      </ComeBackBtn>
    </EmptyWrapper>
  )
}

export default EmptyFavs
