import React, { useState } from "react"
import { HomeOffersWrapper, Grid } from "./homeOffers.styled"
import Estate from "../estate/estate"
import DetailedEstate from "../detailedEstate/detailedEstate"
import HomeOffersHeader from "./header/homeOffersHeader"
import JSONEstates from "../../data/estates.json"

const HomeOffers = () => {
  const [offers] = useState(JSONEstates)
  const [isDetailed, setDetailed] = useState(true)

  const handleToggle = () => {
    setDetailed(!isDetailed)
  }

  return (
    <HomeOffersWrapper>
      <HomeOffersHeader handleToggle={handleToggle} />
      <Grid isDetailed={isDetailed}>
        {isDetailed
          ? offers.map(estate => {
              return <DetailedEstate estate={estate} />
            })
          : offers.map(estate => {
              return <Estate key={estate.key} estate={estate} />
            })}
      </Grid>
    </HomeOffersWrapper>
  )
}

export default HomeOffers
