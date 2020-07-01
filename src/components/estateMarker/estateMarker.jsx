import React from "react"
import { MarkerWrapper } from "./estateMarker.styled"
import Building from "../icons/blockOfFlats"
import House from "../icons/house"

const EstateMarker = ({ price, type }) => {
  const renderIcon = type => {
    switch (type) {
      case "Flat": {
        return <Building height={"20px"} />
      }
      case "House": {
        return <House height={"20px"} groupColor={"#fff"} color={"#000"} />
      }
      default: {
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
