import React from "react"
import { RentEstatesWrapper } from "./rentEstates.styled"
import Estate from "../estate/estate"
import { useSelector } from "react-redux"

const RentEstates = () => {
  const estates = useSelector(state => state.Filter)

  return (
    <RentEstatesWrapper>
      {estates
        .filter(estate => {
          return estate.prices.type === "Rent"
        })
        .map(estate => {
          return <Estate estate={estate} />
        })}
    </RentEstatesWrapper>
  )
}

export default RentEstates
