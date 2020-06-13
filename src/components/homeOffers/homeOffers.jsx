import React from "react"
import { HomeOffersWrapper } from "./homeOffers.styled"
import Estate from "../estate/estate"
import JSONEstates from "../../data/estates.json"

const HomeOffers = () => {
  return (
    <HomeOffersWrapper>
      {JSONEstates.map(estate => {
        return <Estate estate={estate} />
      })}
    </HomeOffersWrapper>
  )
}

export default HomeOffers
