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

const HomeOffersHeader = ({ handleToggle, isDetailed }) => {
  return (
    <Wrapper>
      <Title>Newest</Title>
      <SwitchDisplayStyle>
        {isDetailed ? (
          <MostImportant isDetailed={isDetailed} onClick={() => handleToggle()}>
            <Icon>
              <BigRect />
              <SmallRect />
            </Icon>
          </MostImportant>
        ) : (
          <MostImportant disabled="disabled">
            <Icon>
              <BigRect />
              <SmallRect />
            </Icon>
          </MostImportant>
        )}
        {!isDetailed ? (
          <MoreDetails onClick={() => handleToggle()}>
            <Icon>
              <Line />
              <Line />
              <Line />
            </Icon>
          </MoreDetails>
        ) : (
          <MoreDetails disabled="disabled">
            <Icon>
              <Line />
              <Line />
              <Line />
            </Icon>
          </MoreDetails>
        )}
      </SwitchDisplayStyle>
    </Wrapper>
  )
}

export default HomeOffersHeader
