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
import { useSelector } from "react-redux"

const HomeOffersHeader = ({ handleToggle, isDetailed }) => {
  const lang = useSelector(state => state.SwitchLanguage)
  console.log(isDetailed)
  return (
    <Wrapper>
      <Title>{lang ? "Newest" : "Najnowsze"}</Title>
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
          <MoreDetails isDetailed={isDetailed} disabled="disabled">
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
