import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import { DisplayWrapper, ShowOnMap, ShowList } from "./displayType.styled"
import Map from "../icons/map"
import ViewGrid from "../icons/grid"

const DisplayType = () => {
  const [path, setPath] = useState(null)
  useEffect(() => {
    if (window !== undefined) {
      console.log(window.location.pathname.includes("map"))
    }
  }, [])
  return (
    <DisplayWrapper>
      <ShowOnMap onClick={() => navigate("/results/map")}>
        <Map color={"#000"} height={"25px"} />
        Map
      </ShowOnMap>
      <ShowList onClick={() => navigate("/results")}>
        <ViewGrid height={"25px"} color={"#000"} />
        List
      </ShowList>
    </DisplayWrapper>
  )
}

export default DisplayType
