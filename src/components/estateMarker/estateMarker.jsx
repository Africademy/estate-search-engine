import React from "react"
import { MarkerWrapper } from "./estateMarker.styled"
import Building from "../icons/blockOfFlats"

const EstateMarker = ({ price, type }) => {
  const renderIcon = type => {
    switch (type) {
      case "Flat": {
        return <Building height={"20px"} />
      }
    }
  }
  return (
    <MarkerWrapper>
      {renderIcon(type)} ${price}
    </MarkerWrapper>
  )
}

export default EstateMarker
