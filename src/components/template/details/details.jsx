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
      </Grid>
    </DetailsWrapper>
  )
}

export default Details
