import React, { useState } from "react"
import { HomeOffersWrapper, Grid } from "./homeOffers.styled"
import Estate from "../estate/estate"
import DetailedEstate from "../detailedEstate/detailedEstate"
import HomeOffersHeader from "./header/homeOffersHeader"
import { useDispatch, useSelector } from "react-redux"
import { addToFavourites } from "../actions/addToFavourites"

const HomeOffers = () => {
  const estates = useSelector(state => state.Estates)
  const [updated, setUpdated] = useState(false)
  const dispatch = useDispatch()
  const [isDetailed, setDetailed] = useState(false)

  const handleToggle = () => {
    setDetailed(!isDetailed)
  }

  return (
    <HomeOffersWrapper>
      <HomeOffersHeader isDetailed={isDetailed} handleToggle={handleToggle} />
      <Grid isDetailed={isDetailed}>
        {isDetailed
          ? estates.map(estate => {
              return <DetailedEstate key={estate.key} estate={estate} />
            })
          : estates.map(estate => {
              return <Estate key={estate.key} estate={estate} />
            })}
      </Grid>
    </HomeOffersWrapper>
  )
}

export default HomeOffers
