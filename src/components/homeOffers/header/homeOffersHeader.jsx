import React from "react"
import {
  Wrapper,
  Title,
  SwitchDisplayStyle,
  MostImportant,
  MoreDetails,
  Icon,
  BigRect,
  SmallRect,
  Line,
} from "./homeOffersHeader.styled"

const HomeOffersHeader = ({ handleToggle }) => {
  return (
    <Wrapper>
      <Title>Newest</Title>
      <SwitchDisplayStyle>
        <MostImportant onClick={() => handleToggle()}>
          <Icon>
            <BigRect />
            <SmallRect />
          </Icon>
        </MostImportant>
        <MoreDetails>
          <Icon>
            <Line />
            <Line />
            <Line />
          </Icon>
        </MoreDetails>
      </SwitchDisplayStyle>
    </Wrapper>
  )
}

export default HomeOffersHeader
