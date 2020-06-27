import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import { DisplayWrapper, ShowOnMap, ShowList } from "./displayType.styled"
import Map from "../icons/map"
import ViewGrid from "../icons/grid"

const DisplayType = () => {
  const [path, setPath] = useState(false)
  // TODO color of button depending on pathname
  // TODO make page with all estates on map
  useEffect(() => {
    if (window !== undefined) {
      if (window.location.pathname.includes("map")) {
        setPath(true)
      } else if (window.location.pathname === "/results") {
        setPath(false)
      }
    }
  }, [])
  return (
    <DisplayWrapper>
      <ShowOnMap path={path} onClick={() => navigate("/results/map")}>
        <Map path={path} color={"#fff"} height={"25px"} secondColor={"#000"} />
        Map
      </ShowOnMap>
      <ShowList path={path} onClick={() => navigate("/results")}>
        <ViewGrid
          path={path}
          height={"25px"}
          color={"#000"}
          secondColor={"#fff"}
        />
        List
      </ShowList>
    </DisplayWrapper>
  )
}

export default DisplayType
