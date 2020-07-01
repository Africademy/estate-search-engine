import React from "react"
import {
  DetailsWrapper,
  Title,
  Grid,
  Position,
  Category,
  Value,
} from "./details.styled"

const Details = ({ estate }) => {
  return (
    <DetailsWrapper>
      <Title>Details</Title>
      <Grid>
        <Position>
          <Category>Type</Category>
          <Value>{estate.type}</Value>
        </Position>
        <Position>
          <Category>Rooms</Category>
          <Value>{estate.rooms}</Value>
        </Position>
        <Position>
          <Category>Floor</Category>
          <Value>{estate.floor}</Value>
        </Position>
      </Grid>
    </DetailsWrapper>
  )
}

export default Details
