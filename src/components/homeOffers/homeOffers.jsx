import React, { useState } from "react"
import { HomeOffersWrapper, Grid } from "./homeOffers.styled"
import Estate from "../estate/estate"
import DetailedEstate from "../detailedEstate/detailedEstate"
import HomeOffersHeader from "./header/homeOffersHeader"
import JSONEstates from "../../data/estates.json"
import { useDispatch, useSelector } from "react-redux"
import { addToFavourites } from "../actions/addToFavourites"

const HomeOffers = () => {
  const [offers] = useState(JSONEstates)
  const [updated, setUpdated] = useState(false)
  const dispatch = useDispatch()
  const fav = useSelector(state => state.Favourites)
  const [isDetailed, setDetailed] = useState(false)

  const handleToggle = () => {
    setDetailed(!isDetailed)
  }
  const handleLike = estate => {
    dispatch(addToFavourites(estate))
    setUpdated(!updated)
  }

  return (
    <HomeOffersWrapper>
      <HomeOffersHeader handleToggle={handleToggle} />
      <Grid isDetailed={isDetailed}>
        {isDetailed
          ? offers.map(estate => {
              return (
                <DetailedEstate
                  handleLike={handleLike}
                  key={estate.key}
                  estate={estate}
                />
              )
            })
          : offers.map(estate => {
              return (
                <Estate
                  handleLike={handleLike}
                  key={estate.key}
                  estate={estate}
                />
              )
            })}
      </Grid>
    </HomeOffersWrapper>
  )
}

export default HomeOffers
